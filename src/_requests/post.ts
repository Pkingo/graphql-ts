import axois from 'axios';
import { IPost } from '../_types/post';

export const getPosts = (): Promise<IPost[]> => {
  return axois
    .get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.data);
};

export const getPost = (id: number): Promise<IPost> => {
  return axois
    .get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(resp => resp.data);
};

export const getPostsByUserId = (userId: number): Promise<IPost[]> => {
  return axois
    .get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(resp => resp.data);
};
