import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TapDailyRewardItem } from './TapDailyRewardItem';

export default {
    title: 'shared/TapDailyRewardItem',
    component: TapDailyRewardItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TapDailyRewardItem>;

const Template: ComponentStory<typeof TapDailyRewardItem> = (args) => <TapDailyRewardItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
