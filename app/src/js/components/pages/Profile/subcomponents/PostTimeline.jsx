import React, { Component } from 'react';
import PropTypes from 'prop-types';

import posts, { POST_TYPE } from 'dummyData/posts';
import questions, { QUESTION_TYPE } from 'dummyData/questions';

import PostCard from 'components/common/Cards/PostCard';
import QuestionCard from 'components/common/Cards/QuestionCard';

import DatedTimelineSection from './DatedTimelineSection';

const getContentForUser = (content, userId) => {
    const usersContent = window._.filter(content, { userId });
    return usersContent || [];
};

export default class PostTimeline extends Component {
    static propTypes = {
        userId: PropTypes.number.isRequired,
    };

    getUsersContentDateMap() {
        const { userId } = this.props;
        const usersPosts = getContentForUser(posts, userId);
        const usersQuestions = getContentForUser(questions, userId);

        // Combine all of user's content
        const allContent = [
            ...usersPosts,
            ...usersQuestions,
        ].filter(Boolean);

        if (!allContent.length) {
            return null;
        }

        // Group content by created date
        const contentByDate = window._.groupBy(allContent, 'createdAt');

        // Create an array of objects containing date and all content for that date
        const dateMap = window._.keys(contentByDate).map(date => ({
            date,
            posts: contentByDate[date],
        }));

        return dateMap;
    }

    render() {
        const baseClassName = this.constructor.name;
        const contentByDate = this.getUsersContentDateMap();

        return (
            <div className={baseClassName}>
                {!contentByDate &&
                    <p>No Posts Yet</p>
                }
                {contentByDate && contentByDate.map(dateSection => (
                    <DatedTimelineSection date={dateSection.date} key={dateSection.date}>
                        {dateSection.posts.map(content => (
                            <React.Fragment>
                                {content.type === POST_TYPE &&
                                    <PostCard {...content} key={content.id} />
                                }
                                {content.type === QUESTION_TYPE &&
                                    <QuestionCard {...content} key={content.id} />
                                }
                            </React.Fragment>
                        ))}
                    </DatedTimelineSection>
                ))}
            </div>
        );
    }
}
