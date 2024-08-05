import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TapAnimationGrass } from './TapAnimationGrass';

export default {
    title: 'shared/TapAnimationGrass',
    component: TapAnimationGrass,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TapAnimationGrass>;

const Template: ComponentStory<typeof TapAnimationGrass> = (args) => <TapAnimationGrass {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
