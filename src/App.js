import React from 'react';
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";


// for apollo client
const httpLink = new HttpLink({
  uri: 'https://checktodos-graphql.hasura.app/v1beta1/relay'
});

function App() {

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
           
    </ApolloProvider>
  );
  }

export default App;
