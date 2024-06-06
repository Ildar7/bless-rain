import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RainySpeen } from './RainySpeen';

export default {
    title: 'shared/RainySpeen',
    component: RainySpeen,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RainySpeen>;

const Template: ComponentStory<typeof RainySpeen> = (args) => <RainySpeen {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
