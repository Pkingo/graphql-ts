import axois from 'axios';
import { IUser } from '../_types/user';

export const getUsers = async (): Promise<IUser[]> => {
  return axois
    .get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.data);
};

export const getUser = (id: number): Promise<IUser> => {
  return axois
    .get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp => resp.data);
};
