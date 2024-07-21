import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TapMultitapBoostModal } from './TapMultitapBoostModal';

export default {
    title: 'shared/TapMultitapBoostModal',
    component: TapMultitapBoostModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TapMultitapBoostModal>;

const Template: ComponentStory<typeof TapMultitapBoostModal> = (args) => <TapMultitapBoostModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
