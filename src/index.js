import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {InMemoryCache, ApolloClient, gql} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://checktodos-graphql.hasura.app/v1beta1/relay',
  cache: new InMemoryCache(),
});

client.query({
  query: gql`

    query getTodos {
      todos_connection {
        edges {
          node {
            done
            id
            text
          }
        }
      }
    }
  `
}).then(data => console.log(data))


ReactDOM.render(<App />, document.getElementById('root'));

