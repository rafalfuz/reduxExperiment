import React from 'react';
import Paragraph from './Paragraph'

export default {
    title: 'Paragraph',
    component: Paragraph,
    argTypes: {
        text: '',

        
    }
}

const Template = (args) => <Paragraph {...args}/>

export const Secondary = Template.bind({})
Secondary.args ={
    text: 'Oto nagle cos działa'
}

export const Secondary2 = Template.bind({})
Secondary2.args ={
    text: 'Cos tam idzie do rzodu'
} 

export const Zielony = Template.bind({})
Zielony.args ={
    text: 'Cos tam idzie do przodu',
    color: {control: 'color'}
} 