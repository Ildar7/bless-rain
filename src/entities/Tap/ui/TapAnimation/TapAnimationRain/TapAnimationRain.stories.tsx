import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TapAnimationRain } from './TapAnimationRain';

export default {
    title: 'shared/TapAnimationRain',
    component: TapAnimationRain,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TapAnimationRain>;

const Template: ComponentStory<typeof TapAnimationRain> = (args) => <TapAnimationRain {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
