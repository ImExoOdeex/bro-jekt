import { CacheProvider } from "@emotion/react";
import { RemixBrowser } from "@remix-run/react";
import React, { useState } from "react";
import { hydrate } from "react-dom";

import { ClientStyleContext } from "./components/emotion/context";
import createEmotionCache, {
	defaultCache
} from "./components/emotion/createEmotionCache";

interface ClientCacheProviderProps {
	children: React.ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
	const [cache, setCache] = useState(defaultCache);

	function reset() {
		setCache(createEmotionCache());
	}

	return (
		<ClientStyleContext.Provider value={{ reset }}>
			<CacheProvider value={cache}>{children}</CacheProvider>
		</ClientStyleContext.Provider>
	);
}

hydrate(
	<ClientCacheProvider>
		<RemixBrowser />
	</ClientCacheProvider>,
	document
);
