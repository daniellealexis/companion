import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { formatDateShort } from 'utils/dateFormatting';

export default class DatedTimelineSection extends Component {
    static propTypes = {
        date: PropTypes.string.isRequired,
        children: PropTypes.node,
        className: PropTypes.string,
    };

    static defaultProps = {
        className: '',
        children: null,
    };

    buildClassNames() {
        return [
            this.constructor.name,
            this.props.className,
        ].filter(Boolean).join(' ');
    }

    render() {
        const baseClassName = this.constructor.name;
        const baseClassNames = this.buildClassNames();
        const dateTitle = formatDateShort(this.props.date);

        return (
            <section className={baseClassNames}>
                <h2 className={`${baseClassName}__title`}>{dateTitle}</h2>
                {this.props.children}
            </section>
        );
    }
}
