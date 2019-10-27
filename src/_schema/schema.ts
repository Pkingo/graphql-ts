import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull
} from 'graphql';

// GraphQL types
import { userType } from './user/user.type';
import { postType } from './post/post.type';
import { commentType } from './comment/comment.type';

// requests
import { getUsers, getUser } from '../_requests/user';
import { getPost, getPosts } from '../_requests/post';
import { getComment, getComments } from '../_requests/comment';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: userType,
      args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
      resolve: (_, { id }) => {
        return getUser(id);
      }
    },
    users: {
      type: new GraphQLList(userType),
      resolve: getUsers
    },
    post: {
      type: postType,
      args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
      resolve: (_, { id }) => {
        return getPost(id);
      }
    },
    posts: {
      type: new GraphQLList(postType),
      resolve: getPosts
    },
    comment: {
      type: commentType,
      args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
      resolve: (_, { id }) => {
        return getComment(id);
      }
    },
    comments: {
      type: new GraphQLList(commentType),
      resolve: getComments
    }
  }
});
export const schema = new GraphQLSchema({
  query: queryType
});
