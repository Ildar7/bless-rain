import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RainySpeenPage from './RainySpeenPage';

export default {
    title: 'shared/RainySpeenPage',
    component: RainySpeenPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RainySpeenPage>;

const Template: ComponentStory<typeof RainySpeenPage> = (args) => <RainySpeenPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
