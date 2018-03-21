import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class SearchInput extends Component {
    static propTypes = {
        placeholder: PropTypes.string,
    };

    static defaultProps = {
        placeholder: 'Search',
    };

    render() {
        const baseClassName = this.constructor.name;

        return (
            <div className={baseClassName}>
                <input placeholder={this.props.placeholder} />
            </div>
        );
    }
}
