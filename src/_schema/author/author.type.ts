import { GraphQLInt, GraphQLObjectType } from 'graphql';
import { authorNameType } from './authorName.type';

export const authorType = new GraphQLObjectType({
  name: 'AuthorQuery',
  fields: {
    name: {
      type: authorNameType
    },
    age: {
      type: GraphQLInt
    }
  }
});
