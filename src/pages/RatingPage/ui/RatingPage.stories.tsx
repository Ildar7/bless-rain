import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RatingPage from './RatingPage';

export default {
    title: 'pages/AccountPage',
    component: RatingPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingPage>;

const Template: ComponentStory<typeof RatingPage> = (args) => <RatingPage {...(args as object)} />;

export const Primary = Template.bind({});
Primary.args = {};
