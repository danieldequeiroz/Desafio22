//Código de Daniel de Queiroz Cavalcanti
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

const httplink = createHttpLink({
    uri: 'https://api.github.com/graphql'
});

const authLink = setContext((_, { headers }) => {
    const token = "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";
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token}`,
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httplink),
    cache: new InMemoryCache()
});

export default client;
