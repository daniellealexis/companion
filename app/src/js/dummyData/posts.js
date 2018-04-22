import { find } from 'utils/collections';
import { addDaysToToday } from 'utils/dateFormatting';
import users from './users';

export const POST_TYPE = 'post';

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
        type: POST_TYPE,
        createdAt: addDaysToToday(0),
    },
    {
        id: 2,
        userId: 5,
        user: find(users, { id: 5 }),
        text: 'out of work and hoping to get career advice from other freelancers',
        category: categories.MENTORSHIP,
        type: POST_TYPE,
        createdAt: addDaysToToday(1),
    },
    {
        id: 3,
        userId: 6,
        user: find(users, { id: 6 }),
        text: 'looking to share his design skills for front-end development help',
        category: categories.WORK_SWAP,
        type: POST_TYPE,
        createdAt: addDaysToToday(12),
    },
    {
        id: 4,
        userId: 1,
        user: find(users, { id: 1 }),
        text: 'looking for a creative professional with a lot of experience in UI to collaborate with',
        category: categories.COLLABORATE,
        type: POST_TYPE,
        createdAt: addDaysToToday(0),
    },
    {
        id: 5,
        userId: 1,
        user: find(users, { id: 1 }),
        text: 'out of work and hoping to get career advice from other freelancers',
        category: categories.MENTORSHIP,
        type: POST_TYPE,
        createdAt: addDaysToToday(1),
    },
    {
        id: 6,
        userId: 1,
        user: find(users, { id: 1 }),
        text: 'looking to share his design skills for front-end development help',
        category: categories.WORK_SWAP,
        type: POST_TYPE,
        createdAt: addDaysToToday(12),
    },
    {
        id: 4,
        userId: 2,
        user: find(users, { id: 2 }),
        text: 'looking for a creative professional with a lot of experience in UI to collaborate with',
        category: categories.COLLABORATE,
        type: POST_TYPE,
        createdAt: addDaysToToday(0),
    },
    {
        id: 5,
        userId: 2,
        user: find(users, { id: 2 }),
        text: 'out of work and hoping to get career advice from other freelancers',
        category: categories.MENTORSHIP,
        type: POST_TYPE,
        createdAt: addDaysToToday(1),
    },
];
