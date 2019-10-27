import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';
import { adressType } from './adress.type';
import { companyType } from './company.type';
import { postType } from '../post/post.type';
import { IUser } from '../../_types/user';
import { getPostsByUserId } from '../../_requests/post';

// @ts-ignore
export const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    address: { type: adressType },
    phone: { type: GraphQLString },
    website: { type: GraphQLString },
    company: { type: companyType },
    posts: {
      type: new GraphQLList(postType),
      resolve: ({ id }: IUser) => {
        return getPostsByUserId(id);
      }
    }
  }
});
