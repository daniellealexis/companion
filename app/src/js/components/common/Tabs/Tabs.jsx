import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TabsG from 'grommet/components/Tabs';

export const JUSTIFY_START = 'start';
export const JUSTIFY_END = 'end';

import './styles.styl';

export default class Tabs extends Component {
    static propTypes = {
        className: PropTypes.string,
        justify: PropTypes.oneOf([JUSTIFY_START, JUSTIFY_END]),
        children: PropTypes.node.isRequired,
        activeIndex: PropTypes.number,
        onTabChange: PropTypes.func.isRequired,
    };

    static defaultProps = {
        className: '',
        justify: null,
        activeIndex: 0,
    };

    getBaseClassNames() {
        const { justify, className } = this.props;
        const baseClassName = this.constructor.name;

        return [
            baseClassName,
            className,
            justify && `${baseClassName}--justify-${justify}`,
        ].filter(Boolean).join(' ');
    }

    handleTabChange = newActiveTab => this.props.onTabChange(newActiveTab);

    render() {
        const classNames = this.getBaseClassNames();

        return (
            <TabsG
                className={classNames}
                justify={this.props.justify}
                activeIndex={this.props.activeIndex}
                onActive={this.handleTabChange}
            >
                {this.props.children}
            </TabsG>
        );
    }
}
