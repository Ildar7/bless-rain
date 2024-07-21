import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TapEnergyLimitModal } from './TapEnergyLimitModal';

export default {
    title: 'shared/TapEnergyLimitModal',
    component: TapEnergyLimitModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TapEnergyLimitModal>;

const Template: ComponentStory<typeof TapEnergyLimitModal> = (args) => <TapEnergyLimitModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
