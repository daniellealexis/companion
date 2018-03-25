import React from 'react';

import Section, { THREE_GRID, FULL_WIDTH } from 'components/layout/Section';
import {
    PostCard,
    UserCard,
    EventCard,
    QuestionCard,
} from 'components/common/Cards';

import users from 'dummyData/users';
import events from 'dummyData/events';
import posts from 'dummyData/posts';
import questions from 'dummyData/questions';

import './styles.styl';

const usersToDisplay = users.slice(0, 3);

const NEW_USERS_TITLE = 'Newcomers';
const POSTS_TITLE = 'Community Connections';
const QUESTIONS_TITLE = 'Q&A';
const EVENTS_TITLE = 'Upcoming Events';

const baseClassName = 'Feed';

const Feed = () => (
    <div className={baseClassName}>
        <Section title={NEW_USERS_TITLE} layout={THREE_GRID}>
            { usersToDisplay && usersToDisplay.map(user => (
                <UserCard key={user.id} {...user} />
            ))}
        </Section>
        <Section title={POSTS_TITLE} layout={FULL_WIDTH}>
            { posts && posts.map(post => (
                <PostCard key={post.id} {...post} />
            ))}
        </Section>
        <Section title={QUESTIONS_TITLE} layout={FULL_WIDTH}>
            { questions && questions.map(question => (
                <QuestionCard key={question.id} {...question} />
            ))}
        </Section>
        <Section title={EVENTS_TITLE} layout={THREE_GRID}>
            {events && events.map(event => (
                <EventCard key={event.id} {...event} />
            ))}
        </Section>
    </div>
);

export default Feed;
