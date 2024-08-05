import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TapAnimationToad } from './TapAnimationToad';

export default {
    title: 'shared/TapAnimationToad',
    component: TapAnimationToad,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TapAnimationToad>;

const Template: ComponentStory<typeof TapAnimationToad> = (args) => <TapAnimationToad {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
