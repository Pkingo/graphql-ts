import { GraphQLObjectType, GraphQLString } from 'graphql';
import { authors } from '../../mockData';
import { authorType } from '../author/author.type';

export const postType = new GraphQLObjectType({
  name: 'Post',
  fields: {
    title: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    author: {
      type: authorType,
      resolve: ({ author }: { author: 'Flavio' | 'Roger' }, _) => {
        return authors[author];
      }
    }
  }
});
