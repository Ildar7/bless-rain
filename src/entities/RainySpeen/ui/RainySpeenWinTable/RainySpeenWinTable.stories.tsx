import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RainySpeenWinTable } from './RainySpeenWinTable';

export default {
    title: 'shared/RainySpeenWinTable',
    component: RainySpeenWinTable,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RainySpeenWinTable>;

const Template: ComponentStory<typeof RainySpeenWinTable> = (args) => <RainySpeenWinTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
