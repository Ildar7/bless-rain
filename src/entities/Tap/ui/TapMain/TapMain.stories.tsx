import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TapMain } from './TapMain';

export default {
    title: 'shared/TapMain',
    component: TapMain,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TapMain>;

const Template: ComponentStory<typeof TapMain> = (args) => <TapMain {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
