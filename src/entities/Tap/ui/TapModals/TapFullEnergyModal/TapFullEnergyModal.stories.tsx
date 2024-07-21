import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TapFullEnergyModal } from './TapFullEnergyModal';

export default {
    title: 'shared/TapFullEnergyModal',
    component: TapFullEnergyModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TapFullEnergyModal>;

const Template: ComponentStory<typeof TapFullEnergyModal> = (args) => <TapFullEnergyModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
