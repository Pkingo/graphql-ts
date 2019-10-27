import { GraphQLObjectType, GraphQLString } from 'graphql';

export const companyType = new GraphQLObjectType({
  name: 'Company',
  fields: {
    name: { type: GraphQLString },
    catchPhrase: { type: GraphQLString },
    bs: { type: GraphQLString }
  }
});
