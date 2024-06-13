import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PlinkoPage from './PlinkoPage';

export default {
    title: 'shared/PlinkoPage',
    component: PlinkoPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PlinkoPage>;

const Template: ComponentStory<typeof PlinkoPage> = (args) => <PlinkoPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
