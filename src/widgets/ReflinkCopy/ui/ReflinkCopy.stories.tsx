import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReflinkCopy } from './ReflinkCopy';

export default {
    title: 'shared/ReflinkCopy',
    component: ReflinkCopy,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ReflinkCopy>;

const Template: ComponentStory<typeof ReflinkCopy> = (args) => <ReflinkCopy {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
