import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PlinkoWinModal } from './PlinkoWinModal';

export default {
    title: 'shared/PlinkoWinModal',
    component: PlinkoWinModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PlinkoWinModal>;

const Template: ComponentStory<typeof PlinkoWinModal> = (args) => <PlinkoWinModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
