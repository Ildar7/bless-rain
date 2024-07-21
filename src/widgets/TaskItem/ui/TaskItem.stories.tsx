import React, { memo } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TaskItem } from './TaskItem';

export default {
    title: 'shared/TaskItem',
    component: TaskItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TaskItem>;

const Template: ComponentStory<typeof TaskItem> = (args) => <TaskItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
