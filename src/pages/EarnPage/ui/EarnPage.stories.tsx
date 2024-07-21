import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import EarnPage from './EarnPage';

export default {
    title: 'shared/EarnPage',
    component: EarnPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EarnPage>;

const Template: ComponentStory<typeof EarnPage> = (args) => <EarnPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
