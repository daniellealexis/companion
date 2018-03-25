import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { formatDateShort } from 'utils/dateFormatting';

import './styles.styl';

export default class EventCard extends Component {
    static propTypes = {
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        host: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    };

    componentWillMount() {
        this.formattedDate = formatDateShort(this.props.date);
    }

    render() {
        const baseClassName = this.constructor.name;

        return (
            <article className={baseClassName} >
                <p className={`${baseClassName}__date`}>{this.formattedDate}</p>
                <div
                    className={`${baseClassName}__image`}
                    style={{ backgroundImage: `url(${this.props.imageUrl})` }}
                />
                <p className={`${baseClassName}__host`}>{this.props.host}</p>
                <h4 className={`${baseClassName}__title`}>{this.props.title}</h4>
                <div className={`${baseClassName}__button-wrapper`}>
                    <button>+ Invite</button>
                </div>
            </article>
        );
    }
}
