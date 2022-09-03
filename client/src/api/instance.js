import { GraphQLClient } from 'graphql-request'
import { ENDPOINT } from '../constants'


export const graphQlClient = new GraphQLClient(ENDPOINT)

