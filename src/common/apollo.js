import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import apis from "./apis";

const httpLink = new HttpLink({
  uri: apis.GRAPHQL_SERVER
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default apolloClient;
