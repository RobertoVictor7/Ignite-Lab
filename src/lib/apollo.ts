import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ot20ww0xu701ywhqleatq5/master',
    cache: new InMemoryCache()
})