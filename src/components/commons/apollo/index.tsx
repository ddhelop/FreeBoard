import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function ApolloSetting(props:any){
  const client = new ApolloClient({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });
  return(
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}