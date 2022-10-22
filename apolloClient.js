import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl9jy0y2l2rub01ujcl3z53fm/master',
    cache: new InMemoryCache()
})

export default client;