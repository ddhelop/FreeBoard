import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles}/>
        <Component {...pageProps} />
      </>
    </ApolloSetting>
  );
}
