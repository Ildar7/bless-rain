import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AnimatedText } from './AnimatedText';

export default {
    title: 'shared/AnimatedText',
    component: AnimatedText,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AnimatedText>;

const Template: ComponentStory<typeof AnimatedText> = (args) => <AnimatedText {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
