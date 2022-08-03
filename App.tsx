//Código de Daniel de Queiroz Cavalcanti
import { ApolloProvider } from '@apollo/client';
import React from 'react';
import NavigationModule from './src/navigation/NavigationModule';
import client from './src/services/apollo';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationModule />
    </ApolloProvider>
  );
}

