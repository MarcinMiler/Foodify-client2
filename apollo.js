import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
// import { setContext } from 'apollo-link-context'

const httpLink = new HttpLink({ uri: 'http://192.168.0.106:4000/graphql' })

// const middlewareLink = setContext(async () => ({
//     headers: {
//       'x-token': await AsyncStorage.getItem('token')
//     },
// }))

const wsLink = new WebSocketLink({
  uri: `ws://192.168.0.106:4000/subscriptions`,
  options: {
    reconnect: true
  }
})

// const linkConcat = middlewareLink.concat(httpLink)

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  }, 
  wsLink,
  httpLink,
)

export const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
})