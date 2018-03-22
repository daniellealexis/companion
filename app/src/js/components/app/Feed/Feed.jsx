import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Section from 'components/layout/Section';
import { PostCard } from 'components/common/Cards';
import UserAvatar from 'components/common/UserAvatar';

import './styles.styl';

export default class Feed extends Component {
    render() {
        const baseClassName = this.constructor.name;

        return (
            <div className={baseClassName}>
                <Section title="Newcomers">
                    <div>test</div>
                </Section>
                <Section title="Community Connections">
                    <div>test</div>
                </Section>
                <Section title="Q&A">
                    <PostCard
                        text="I have a question about colors and was wondering if I could get an opinion from a designer"
                        category="2nd Opinion"
                        imageUrl="https://image.freepik.com/free-vector/colorful-watercolor-triangles-pattern_23-2147662863.jpg"
                        points="+10"
                        userAvatar={
                            <UserAvatar name="Kim G" title="Designer" imageUrl="https://1.bp.blogspot.com/-apCJGz2OWqc/WXGlbrzvWkI/AAAAAAAAAgI/ghZSGVd3RK8dkVSWZ-7ngiQLbU-KTgDJQCLcBGAs/s1600/yoon-ji-seong-wanna-one-02.jpg" />
                        }
                    />
                </Section>
            </div>
        );
    }
}

// text
// userAvatar
// imageUrl
// timePosted
// points
// category
