import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchInputG from 'grommet/components/SearchInput';

import './styles.styl';

export default class SearchInput extends Component {
    static propTypes = {
        placeholder: PropTypes.string,
    };

    static defaultProps = {
        placeholder: 'Search',
    };

    render() {
        const baseClassName = this.constructor.name;
        const { placeholder } = this.props;

        return (
            <SearchInputG className={baseClassName} placeHolder={placeholder} />
        );
    }
}
