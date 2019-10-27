import { GraphQLObjectType, GraphQLString } from 'graphql';

export const geoType = new GraphQLObjectType({
  name: 'Geo',
  fields: {
    lat: { type: GraphQLString },
    lng: { type: GraphQLString }
  }
});
