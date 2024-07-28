import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TapAnimation } from './TapAnimation';

export default {
    title: 'shared/TapAnimation',
    component: TapAnimation,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TapAnimation>;

const Template: ComponentStory<typeof TapAnimation> = (args) => <TapAnimation {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
