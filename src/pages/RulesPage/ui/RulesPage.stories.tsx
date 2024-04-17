import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RulesPage from './RulesPage';

export default {
    title: 'pages/AccountPage',
    component: RulesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RulesPage>;

const Template: ComponentStory<typeof RulesPage> = (args) => <RulesPage {...(args as object)} />;

export const Primary = Template.bind({});
Primary.args = {};
