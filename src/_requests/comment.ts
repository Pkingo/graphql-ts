import axois from 'axios';
import { IComment } from '../_types/comment';

export const getComments = (): Promise<IComment[]> => {
  return axois
    .get<IComment[]>('https://jsonplaceholder.typicode.com/comments')
    .then(resp => resp.data);
};

export const getComment = (id: number): Promise<IComment> => {
  return axois
    .get<IComment>(`https://jsonplaceholder.typicode.com/comments/${id}`)
    .then(resp => resp.data);
};

export const getCommentsByPostId = (postId: number): Promise<IComment[]> => {
  return axois
    .get<IComment[]>(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    )
    .then(resp => resp.data);
};
