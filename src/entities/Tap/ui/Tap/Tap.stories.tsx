import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tap } from './Tap';

export default {
    title: 'shared/Tap',
    component: Tap,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tap>;

const Template: ComponentStory<typeof Tap> = (args) => <Tap {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
