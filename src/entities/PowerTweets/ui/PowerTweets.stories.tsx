import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PowerTweets } from './PowerTweets';

export default {
    title: 'shared/PowerTweets',
    component: PowerTweets,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PowerTweets>;

const Template: ComponentStory<typeof PowerTweets> = (args) => <PowerTweets {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
