import { createRequestHandler } from "@remix-run/express";
import { broadcastDevReady } from "@remix-run/node";
import compression from "compression";
import express, {
	type NextFunction,
	type Request,
	type Response
} from "express";
import morgan from "morgan";
import path from "path";

const BUILD_DIR = path.join(process.cwd(), "build");

const app = express();
app.use(compression());

app.disable("x-powered-by");
app.use(
	"/build",
	express.static("public/build", { immutable: true, maxAge: "1y" })
);

app.use(express.static("public", { maxAge: "1y" }));

app.use(
	morgan(":req[x-forwarded-for] :method :url :status | :response-time ms")
);

app.all(
	"*",
	process.env.NODE_ENV === "development"
		? (req: Request, res: Response, next: NextFunction) => {
				purgeRequireCache();

				return createRequestHandler({
					build: require(BUILD_DIR),
					mode: process.env.NODE_ENV
				})(req, res, next);
		  }
		: createRequestHandler({
				build: require(BUILD_DIR),
				mode: process.env.NODE_ENV
		  })
);
const port =
	process.env.PORT || process.env.NODE_ENV === "development" ? 3000 : 3000; // any port you want for production

app.listen(port, () => {
	console.log(`Express server listening on port ${port}`);

	if (process.env.NODE_ENV === "development") {
		const build = require(BUILD_DIR);
		broadcastDevReady(build);
	}
});

function purgeRequireCache() {
	for (const key in require.cache) {
		if (key.startsWith(BUILD_DIR)) {
			delete require.cache[key];
		}
	}
}