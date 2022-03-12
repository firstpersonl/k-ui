import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Button} from '../../index';
import { ButtonProps } from '../../components/Button/Button';

export default {
    title: 'Button',
    component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button { ...args}/>

export const Default = Template.bind({});

Default.args = {
    label: 'Button',
}
