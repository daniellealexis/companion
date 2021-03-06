import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}

ScrollToTop.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withRouter(ScrollToTop);
