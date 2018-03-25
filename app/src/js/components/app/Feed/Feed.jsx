import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Section, { THREE_GRID, FULL_WIDTH } from 'components/layout/Section';
import { PostCard, UserCard, EventCard } from 'components/common/Cards';
import UserAvatar from 'components/common/UserAvatar';

import './styles.styl';

const dudePhoto = "https://1.bp.blogspot.com/-apCJGz2OWqc/WXGlbrzvWkI/AAAAAAAAAgI/ghZSGVd3RK8dkVSWZ-7ngiQLbU-KTgDJQCLcBGAs/s1600/yoon-ji-seong-wanna-one-02.jpg";

export default class Feed extends Component {
    render() {
        const baseClassName = this.constructor.name;

        return (
            <div className={baseClassName}>
                <Section title="Newcomers" layout={THREE_GRID}>
                    <UserCard
                        name="Johhny Sticks"
                        title="Designer @Sticks"
                        imageUrl={dudePhoto}
                    />
                </Section>
                <Section title="Community Connections" layout={FULL_WIDTH}>
                    <PostCard
                        text="James Victoire is looking for a creative professional with a lot of experience in UI to collaborate with"
                        category="Collaborate"
                        userAvatar={
                            <UserAvatar
                                name="James Victoire"
                                imageUrl={dudePhoto}
                                showImageOnly
                            />
                        }
                    />
                </Section>
                <Section title="Q&A" layout={FULL_WIDTH}>
                    <PostCard
                        text="I have a question about colors and was wondering if I could get an opinion from a designer"
                        category="2nd Opinion"
                        imageUrl="https://image.freepik.com/free-vector/colorful-watercolor-triangles-pattern_23-2147662863.jpg"
                        points="+10"
                        userAvatar={
                            <UserAvatar name="Kim G" title="Designer" imageUrl={dudePhoto} />
                        }
                    />
                </Section>
                <Section title="Upcoming Events" layout={THREE_GRID}>
                    <EventCard
                        date={new Date().toString()}
                        title="Talk on Design at Buzzfeed HQ"
                        host="Splash"
                        imageUrl={dudePhoto}
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
