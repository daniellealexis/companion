import { find } from 'utils/collections';
import { addDaysToToday } from 'utils/dateFormatting';
import users from './users';

export const QUESTION_TYPE = 'question';

const categories = {
    SECOND_OPINION: '2nd Opinion',
    ADVICE: 'Advice',
};

export default [
    {
        id: 1,
        userId: 7,
        user: find(users, { id: 7 }),
        title: 'I have a question about colors and was wondering if I could get an opinion from a designer',
        text: "What's the difference between CMYK brights and RGB brights? I'm doing a project for a client who's trying to get very bright colors in his print materials for an upcoming expo.",
        category: categories.SECOND_OPINION,
        imageUrl: 'https://images.unsplash.com/photo-1516188003451-593901026058?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=26702bdaafe645b659e7002b6c460e95&auto=format&fit=crop&w=700&q=80',
        points: 10,
        type: QUESTION_TYPE,
        createdAt: addDaysToToday(),
    },
    {
        id: 2,
        userId: 8,
        user: find(users, { id: 8 }),
        title: 'I was wondering what\'s the best way of setting up my new studio space for both work and teaching?',
        text: null,
        category: categories.ADVICE,
        imageUrl: 'https://images.unsplash.com/photo-1448697138198-9aa6d0d84bf4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=df2ce3dc65409d077b8efd6a99f7b63b&auto=format&fit=crop&w=700&q=80',
        points: 14,
        type: QUESTION_TYPE,
        createdAt: addDaysToToday(-4),
    },
    {
        id: 3,
        userId: 1,
        user: find(users, { id: 1 }),
        title: 'I was wondering what\'s the best way of setting up my new studio space for both work and teaching?',
        text: 'I was wondering what\'s the best way of setting up my new studio space for both work and teaching?',
        category: categories.ADVICE,
        imageUrl: 'https://images.unsplash.com/photo-1448697138198-9aa6d0d84bf4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=df2ce3dc65409d077b8efd6a99f7b63b&auto=format&fit=crop&w=700&q=80',
        points: 14,
        type: QUESTION_TYPE,
        createdAt: addDaysToToday(),
    },
];
