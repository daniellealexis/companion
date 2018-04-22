import React, { Component } from 'react';
import PropTypes from 'prop-types';

import comments from 'dummyData/comments';

import CommentCard from 'components/common/Cards/CommentCard';

export default class QuestionContent extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
    };

    static defaultProps = {
        text: null,
    };

    comments = window._.filter(comments, { questionId: this.props.id });

    render() {
        const baseClassName = this.constructor.name;

        return (
            <React.Fragment>
                <section className={baseClassName}>
                    <h1 className={`${baseClassName}__title`}>{this.props.title}</h1>
                    {this.props.text &&
                        <p className={`${baseClassName}__text`}>{this.props.text}</p>
                    }
                </section>
                <section className={`${baseClassName}__comment-list`}>
                    {this.comments && this.comments.map(comment => (
                        <CommentCard {...comment} key={comment.id} />
                    ))}
                    {/* comment form */}
                </section>
            </React.Fragment>
        );
    }
}
