import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addCommas } from 'utils/numberFormatting';

const FOLLOWERS = 'Followers';
const FOLLOWING = 'Following';
const ASSISTED = 'Assisted';
const ABOUT = 'About';
const PORTFOLIO = 'Portfolio';

export default class UserDetailsList extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string,
        imageUrl: PropTypes.string.isRequired,
        followers: PropTypes.number,
        following: PropTypes.number,
        assisted: PropTypes.number,
        skillLevel: PropTypes.string,
        portfolio: PropTypes.string,
        dribble: PropTypes.string,
        behance: PropTypes.string,
        about: PropTypes.string,
    };

    static defaultProps = {
        title: null,
        followers: 0,
        following: 0,
        assisted: 0,
        skillLevel: null,
        portfolio: null,
        dribble: null,
        behance: null,
        about: null,
    };

    render() {
        const baseClassName = this.constructor.name;
        const titleClass = `${baseClassName}__detail-title`;
        const detailClass = `${baseClassName}__detail-value`;

        return (
            <div className={baseClassName} >
                <section>
                    <h4 className={titleClass}>{FOLLOWERS}</h4>
                    <p className={detailClass}>{addCommas(this.props.followers)}</p>
                    <h4 className={titleClass}>{FOLLOWING}</h4>
                    <p className={detailClass}>{addCommas(this.props.following)}</p>
                </section>
                <section>
                    <h4 className={titleClass}>{ASSISTED}</h4>
                    <p className={detailClass}>{addCommas(this.props.assisted)}</p>
                </section>
                { this.props.about &&
                    <section>
                        <h4 className={titleClass}>{ABOUT}</h4>
                        <p className={detailClass}>{this.props.about}</p>
                    </section>
                }
                { this.props.portfolio &&
                    <section>
                        <h4 className={titleClass}>{PORTFOLIO}</h4>
                        <p className={detailClass}>
                            <a href={this.props.portfolio}>
                                {this.props.portfolio}
                            </a>
                        </p>
                    </section>
                }
            </div>
        );
    }
}
