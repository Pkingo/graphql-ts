import { GraphQLObjectType, GraphQLString } from 'graphql';
import { geoType } from './geo.type';

export const adressType = new GraphQLObjectType({
  name: 'Adress',
  fields: {
    street: { type: GraphQLString },
    suite: { type: GraphQLString },
    city: { type: GraphQLString },
    zipcode: { type: GraphQLString },
    geo: { type: geoType }
  }
});
