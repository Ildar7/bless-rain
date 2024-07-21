import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TapBoosts } from './TapBoosts';

export default {
    title: 'shared/TapBoosts',
    component: TapBoosts,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TapBoosts>;

const Template: ComponentStory<typeof TapBoosts> = (args) => <TapBoosts {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
