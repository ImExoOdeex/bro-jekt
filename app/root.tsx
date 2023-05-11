import {
	ChakraBaseProvider,
	cookieStorageManager,
	cookieStorageManagerSSR,
	useConst
} from "@chakra-ui/react";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { type LinksFunction } from "@remix-run/react/dist/routeModules";
import Document from "./Document";
import Layout from "./components/layout/global/Layout";
import theme from "./components/utils/chakraIntegration/theme";

// ----------------------------- META -----------------------------

export function meta() {
	return [
		{
			title: "informatyka"
		},
		{
			robots: "all"
		},
		{
			description: "sdfasdfasfasihnjasdnjk"
		},
		{
			keywords: ""
		},
		{
			charset: "utf-8"
		},
		{
			viewport: "width=device-width,initial-scale=1"
		},
		{
			author: ".imexoodeex#0528"
		}
	];
}

// ----------------------------- LINKS -----------------------------

export const links: LinksFunction = () => [
	...(cssBundleHref
		? [
				{ rel: "preconnect", href: "https://fonts.googleapis.com" },
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossOriginIsolated: "anonymous"
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&&family=Outfit:wght@700;800;900&display=swap"
				}
		  ]
		: [])
];
// ----------------------------- APP -----------------------------

export default function App() {
	const { cookies } = useLoaderData();
	const cookieManager = useConst(cookieStorageManagerSSR(cookies));

	return (
		<Document>
			<ChakraBaseProvider
				resetCSS
				theme={theme}
				colorModeManager={
					typeof cookies === "string" || cookies === ""
						? cookieManager
						: cookieStorageManager
				}
			>
				<Layout>
					<Outlet />
				</Layout>
			</ChakraBaseProvider>
		</Document>
	);
}

// ----------------------------- LOADER -----------------------------

export function loader({ request }: LoaderArgs) {
	return json({ cookies: request.headers.get("cookie") ?? "" });
}
