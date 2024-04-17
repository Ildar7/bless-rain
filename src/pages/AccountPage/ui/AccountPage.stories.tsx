import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AccountPage from './AccountPage';

export default {
    title: 'pages/AccountPage',
    component: AccountPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AccountPage>;

const Template: ComponentStory<typeof AccountPage> = (args) => <AccountPage {...(args as object)} />;

export const Primary = Template.bind({});
Primary.args = {};
