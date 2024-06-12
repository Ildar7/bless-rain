import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RainySpeenRules } from './RainySpeenRules';

export default {
    title: 'shared/RainySpeenRules',
    component: RainySpeenRules,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RainySpeenRules>;

const Template: ComponentStory<typeof RainySpeenRules> = (args) => <RainySpeenRules {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
