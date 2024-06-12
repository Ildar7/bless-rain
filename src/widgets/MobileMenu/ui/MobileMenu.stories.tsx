import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MobileMenu } from './MobileMenu';

export default {
    title: 'shared/MobileMenu',
    component: MobileMenu,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MobileMenu>;

const Template: ComponentStory<typeof MobileMenu> = (args) => <MobileMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
