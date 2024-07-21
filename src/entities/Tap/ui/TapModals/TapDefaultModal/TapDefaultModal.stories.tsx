import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TapDefaultModal } from './TapDefaultModal';

export default {
    title: 'shared/TapDefaultModal',
    component: TapDefaultModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TapDefaultModal>;

const Template: ComponentStory<typeof TapDefaultModal> = (args) => <TapDefaultModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
