import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'

const httpLink = new HttpLink({ uri: 'http://192.168.0.107:4000/graphql' })

const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        'x-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRhYzZjYWY0LWE0MmQtNGE5OC05ZmZhLWFmNTIwYjNiYWY4MCIsImlhdCI6MTUxNTA4OTEwMCwiZXhwIjoxNTQ2NjQ2NzAwfQ.Vv1Vv6Q2eCs05GHx-JGA8qV3YJ1hSv-3RR3AWQNse20"
      }
    }
})

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})