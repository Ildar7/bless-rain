import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PlinkoRules } from './PlinkoRules';

export default {
    title: 'shared/PlinkoRules',
    component: PlinkoRules,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PlinkoRules>;

const Template: ComponentStory<typeof PlinkoRules> = (args) => <PlinkoRules {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
