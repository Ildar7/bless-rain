import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PlinkoWinTable } from './PlinkoWinTable';

export default {
    title: 'shared/PlinkoWinTable',
    component: PlinkoWinTable,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PlinkoWinTable>;

const Template: ComponentStory<typeof PlinkoWinTable> = (args) => <PlinkoWinTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
