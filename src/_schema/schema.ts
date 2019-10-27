import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql';
import { authors, posts } from '../mockData';
import { authorType } from './author/author.type';
import { authorNameType } from './author/authorName.type';
import { postType } from './post/post.type';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    post: {
      type: postType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (_, { id }) => {
        return posts[id];
      }
    },
    posts: {
      type: new GraphQLList(postType),
      resolve: () => {
        return posts;
      }
    },
    author: {
      type: authorType,
      description: 'Returns a single author based on name given',
      args: {
        name: { type: authorNameType }
      },
      resolve: (_, { name }: { name: 'Roger' | 'Flavio' }) => {
        return authors[name];
      }
    },
    authors: {
      type: new GraphQLList(authorType),
      resolve: () => {
        return authors;
      }
    }
  }
});

export const schema = new GraphQLSchema({
  query: queryType
});
