import { find } from 'utils/collections';
import users from './users';

const categories = {
    SECOND_OPINION: '2nd Opinion',
    ADVICE: 'Advice',
};

export default [
    {
        id: 1,
        userId: 7,
        user: find(users, { id: 7 }),
        text: 'I have a question about colors and was wondering if I could get an opinion from a designer',
        category: categories.SECOND_OPINION,
        imageUrl: 'https://images.unsplash.com/photo-1516188003451-593901026058?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=26702bdaafe645b659e7002b6c460e95&auto=format&fit=crop&w=700&q=80',
        points: 10,
    },
    {
        id: 2,
        userId: 8,
        user: find(users, { id: 8 }),
        text: 'I was wondering what\'s the best way of setting up my new studio space for both work and teaching?',
        category: categories.ADVICE,
        imageUrl: 'https://images.unsplash.com/photo-1448697138198-9aa6d0d84bf4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=df2ce3dc65409d077b8efd6a99f7b63b&auto=format&fit=crop&w=700&q=80',
        points: 14,
    },
];
