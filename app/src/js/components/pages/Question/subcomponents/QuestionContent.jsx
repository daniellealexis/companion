import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class QuestionContent extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired, // for getting comments
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
    };

    static defaultProps = {
        text: null,
    };

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
                <section className={`${baseClassName}__comments`}>
                    {/* comments */}
                    {/* comment form */}
                </section>
            </React.Fragment>
        );
    }
}
