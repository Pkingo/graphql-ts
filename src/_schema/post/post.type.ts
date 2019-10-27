import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';
import { userType } from '../user/user.type';
import { getUser } from '../../_requests/user';
import { IPost } from '../../_types/post';
import { commentType } from '../comment/comment.type';
import { getCommentsByPostId } from '../../_requests/comment';

// @ts-ignore
export const postType = new GraphQLObjectType({
  name: 'Post',
  fields: {
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    comments: {
      type: new GraphQLList(commentType),
      resolve: ({ id }: IPost) => {
        return getCommentsByPostId(id);
      }
    }
  }
});
