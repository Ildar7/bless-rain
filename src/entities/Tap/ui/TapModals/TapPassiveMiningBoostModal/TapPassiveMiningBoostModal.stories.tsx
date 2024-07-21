import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TapPassiveMiningBoostModal } from './TapPassiveMiningBoostModal';

export default {
    title: 'shared/TapPassiveMiningBoostModal',
    component: TapPassiveMiningBoostModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TapPassiveMiningBoostModal>;

const Template: ComponentStory<typeof TapPassiveMiningBoostModal> = (args) => <TapPassiveMiningBoostModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
