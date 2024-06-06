import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RainySpeenWinModal } from './RainySpeenWinModal';

export default {
    title: 'shared/RainySpeenWinModal',
    component: RainySpeenWinModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RainySpeenWinModal>;

const Template: ComponentStory<typeof RainySpeenWinModal> = (args) => <RainySpeenWinModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
