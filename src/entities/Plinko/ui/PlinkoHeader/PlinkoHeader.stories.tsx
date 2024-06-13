import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PlinkoHeader } from './PlinkoHeader';

export default {
    title: 'shared/PlinkoHeader',
    component: PlinkoHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PlinkoHeader>;

const Template: ComponentStory<typeof PlinkoHeader> = (args) => <PlinkoHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
