import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TapDailyRewardsModal } from './TapDailyRewardsModal';

export default {
    title: 'shared/TapDailyRewardsModal',
    component: TapDailyRewardsModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TapDailyRewardsModal>;

const Template: ComponentStory<typeof TapDailyRewardsModal> = (args) => <TapDailyRewardsModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
