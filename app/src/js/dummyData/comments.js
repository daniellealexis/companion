import { find } from 'utils/collections';
import { addDaysToToday } from 'utils/dateFormatting';
import users from './users';

const dummyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

/**
 * Text would be markup, for adding images and etc
 */

export default [
    {
        id: 1,
        userId: 4,
        postId: null,
        questionId: 1,
        user: find(users, { id: 4 }),
        text: dummyText,
        createdAt: addDaysToToday(-1),
    },
    {
        id: 2,
        userId: 8,
        postId: null,
        questionId: 1,
        user: find(users, { id: 8 }),
        text: dummyText,
        createdAt: addDaysToToday(),
    },
    {
        id: 3,
        userId: 2,
        postId: null,
        questionId: 2,
        user: find(users, { id: 2 }),
        text: dummyText,
        createdAt: addDaysToToday(-1),
    },
    {
        id: 4,
        userId: 2,
        postId: null,
        questionId: null,
        user: find(users, { id: 2 }),
        text: dummyText,
        createdAt: addDaysToToday(-2),
    },
    {
        id: 5,
        userId: 2,
        postId: 2,
        questionId: null,
        user: find(users, { id: 2 }),
        text: dummyText,
        createdAt: addDaysToToday(-1),
    },
    {
        id: 6,
        userId: 2,
        postId: 2,
        questionId: null,
        user: find(users, { id: 2 }),
        text: dummyText,
        createdAt: addDaysToToday(-3),
    },
];
