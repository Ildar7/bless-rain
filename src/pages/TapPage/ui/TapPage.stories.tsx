import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TapPage from './TapPage';

export default {
    title: 'shared/TapPage',
    component: TapPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TapPage>;

const Template: ComponentStory<typeof TapPage> = (args) => <TapPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
