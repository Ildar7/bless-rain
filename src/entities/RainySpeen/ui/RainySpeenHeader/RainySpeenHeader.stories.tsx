import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RainySpeenHeader } from './RainySpeenHeader';

export default {
    title: 'shared/RainySpeenHeader',
    component: RainySpeenHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RainySpeenHeader>;

const Template: ComponentStory<typeof RainySpeenHeader> = (args) => <RainySpeenHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
