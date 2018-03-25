import { find } from 'utils/collections';
import users from './users';

const categories = {
    COLLABORATE: 'Collaborate',
    WORK_SWAP: 'Work Swap',
    MENTORSHIP: 'Mentorship',
};

export default [
    {
        id: 1,
        userId: 4,
        user: find(users, { id: 4 }),
        text: 'looking for a creative professional with a lot of experience in UI to collaborate with',
        category: categories.COLLABORATE,
    },
    {
        id: 2,
        userId: 5,
        user: find(users, { id: 5 }),
        text: 'out of work and hoping to get career advice from other freelancers',
        category: categories.MENTORSHIP,
    },
    {
        id: 3,
        userId: 6,
        user: find(users, { id: 6 }),
        text: 'looking to share his design skills for front-end development help',
        category: categories.WORK_SWAP,
    },
];
