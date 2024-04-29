import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Account } from './Account';

export default {
    title: 'shared/Account',
    component: Account,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Account>;

const Template: ComponentStory<typeof Account> = (args) => <Account {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
