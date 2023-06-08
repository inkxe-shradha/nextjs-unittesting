import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
console.log('uri', 'https://graphql.contentful.com/content/v1/spaces/' +
    process.env.SPACE_ID);

const httpLink = createHttpLink({
    uri: 'https://graphql.contentful.com/content/v1/spaces/' +
        process.env.SPACE_ID + '/environments/master',
});


const graphQLLInk = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = process.env.ACCESS_TOKEN;
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});
export const client = new ApolloClient({
    link: graphQLLInk.concat(httpLink),
    cache: new InMemoryCache(),
})


