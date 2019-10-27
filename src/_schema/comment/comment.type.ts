import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import { IComment } from '../../_types/comment';
import { postType } from '../post/post.type';
import { getPost } from '../../_requests/post';

// @ts-ignore
export const commentType = new GraphQLObjectType({
  name: 'Comment',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    body: { type: GraphQLString },
    email: { type: GraphQLString }
  }
});
