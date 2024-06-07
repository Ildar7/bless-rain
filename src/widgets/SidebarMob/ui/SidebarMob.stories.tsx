import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SidebarMob } from './SidebarMob';

export default {
    title: 'shared/SidebarMob',
    component: SidebarMob,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SidebarMob>;

const Template: ComponentStory<typeof SidebarMob> = (args) => <SidebarMob {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
