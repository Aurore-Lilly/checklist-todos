import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloClient, InMemoryCache, gql} from "@apollo/client";

// ADD TODOS
// TOGGLE TODOS
// DELETE TODOS
// LIST TODOS

// WE WANT TO DISPLAY UPDATE TO OUR USER 

const client = new ApolloClient({
  uri: 'https://checktodos-graphql.hasura.app/v1beta1/relay',
  cache: new InMemoryCache()
});

client.query({
  query: gql `
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
}).then(result => console.log(result));

ReactDOM.render(<App />, document.getElementById('root'));
