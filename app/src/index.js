import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

const AppWithApollo = () => {

  const [accessToken, setAccessToken] = useState();
  const { getAccessTokenSilently } = useAuth0();

  const getAccessToken = useCallback(async () => {
    try {
      const token = await getAccessTokenSilently();
      setAccessToken(token);
    } catch (err) {
      //Try with loginWithRedirect() here in a moment
    }
  }, [getAccessTokenSilently]);

  useEffect(() => {
    getAccessToken();
  }, [getAccessToken]);

  const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorisation: accessToken ? `Bearer ${accessToken}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-z5v8jnvt.us.auth0.com'
      clientId='xngUI2sEpiMj35U3hGO3LNb0K0lxhZeq'
      redirectUri={window.location.origin}
      audience='http://localhost:4000/'
    >
      <Provider store={store}>
        <AppWithApollo />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
