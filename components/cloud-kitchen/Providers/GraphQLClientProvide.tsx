'use client'
import { ApolloProvider } from '@apollo/client'
import { client } from './apolloClient'

const GraphQLClientProvide: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default GraphQLClientProvide
