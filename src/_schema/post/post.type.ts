import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import { userType } from '../user/user.type';
import { getUser } from '../../_requests/user';
import { IPost } from '../../_types/post';

export const postType = new GraphQLObjectType({
  name: 'Post',
  fields: {
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    user: {
      type: userType,
      resolve: (source: IPost) => {
        return getUser(source.userId);
      }
    }
  }
});
