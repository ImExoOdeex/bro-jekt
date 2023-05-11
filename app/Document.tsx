import { withEmotionCache } from "@emotion/react";
import {
	Links,
	LiveReload,
	Meta,
	Scripts,
	ScrollRestoration,
	useLoaderData
} from "@remix-run/react";
import { useContext, useEffect } from "react";
import {
	ClientStyleContext,
	ServerStyleContext
} from "./components/emotion/context";
import { getCookieWithoutDocument } from "./components/utils/functions/cookies";
import { type loader } from "./root";

interface DocumentProps {
	children: React.ReactNode;
}

const Document = withEmotionCache(
	({ children }: DocumentProps, emotionCache) => {
		const serverStyleData = useContext(ServerStyleContext);
		const clientStyleData = useContext(ClientStyleContext);

		useEffect(() => {
			emotionCache.sheet.container = document.head;
			const tags = emotionCache.sheet.tags;
			emotionCache.sheet.flush();
			tags.forEach((tag) => {
				(emotionCache.sheet as any)._insertTag(tag);
			});
			clientStyleData?.reset();
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);

		let { cookies } = useLoaderData<typeof loader>();

		if (typeof document !== "undefined") {
			cookies = document.cookie;
		}

		const themeValue =
			getCookieWithoutDocument("chakra-ui-color-mode", cookies) ?? "dark";

		return (
			<html
				lang="en"
				style={{ colorScheme: themeValue, scrollBehavior: "smooth" }}
				data-theme={themeValue}
			>
				<head>
					<Meta />
					<Links />
					{serverStyleData?.map(({ key, ids, css }) => (
						<style
							key={key}
							data-emotion={`${key} ${ids.join(" ")}`}
							dangerouslySetInnerHTML={{ __html: css }}
						/>
					))}
				</head>
				<body>
					{children}
					<ScrollRestoration />
					<Scripts />
					<LiveReload />
				</body>
			</html>
		);
	}
);

export default Document;
