import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Plinko } from './Plinko';

export default {
    title: 'shared/Plinko',
    component: Plinko,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Plinko>;

const Template: ComponentStory<typeof Plinko> = (args) => <Plinko {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
