import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from 'shared/ui/Modal/Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                Aliquid aperiam autem deleniti
                dolorem ducimus error impedit molestias nemo,
                perspiciatis quibusdam recusandae rem reprehenderit,
                saepe soluta tempore totam, ullam vel veritatis.`,
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                Aliquid aperiam autem deleniti
                dolorem ducimus error impedit molestias nemo,
                perspiciatis quibusdam recusandae rem reprehenderit,
                saepe soluta tempore totam, ullam vel veritatis.`,
};
