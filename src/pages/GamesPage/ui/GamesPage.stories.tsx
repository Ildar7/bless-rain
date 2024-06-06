import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import GamesPage from './GamesPage';

export default {
    title: 'shared/GamesPage',
    component: GamesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof GamesPage>;

const Template: ComponentStory<typeof GamesPage> = (args) => <GamesPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
