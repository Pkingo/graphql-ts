import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';
import { adressType } from './adress.type';
import { companyType } from './company.type';

export const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    address: { type: adressType },
    phone: { type: GraphQLString },
    website: { type: GraphQLString },
    company: { type: companyType }
  }
});
