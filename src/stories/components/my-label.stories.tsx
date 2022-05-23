
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabelComponent } from '../../components/my-label.component';
export default {
    title: 'UI/MyLabel',
    component: MyLabelComponent,
    argTypes:{
        size:{
            control:'select'
        },
        color:{
            control:'select'
        },
        fontColor:{
            control:'color'
        }
    }
} as ComponentMeta<typeof MyLabelComponent>

const Template:ComponentStory<typeof MyLabelComponent> = (args) => <MyLabelComponent {...args}/>;

export const Basic = Template.bind({});
Basic.args={
    size:"normal",
    allCaps:false
}
export const AllCaps = Template.bind({});
AllCaps.args={
    size:"normal",
    allCaps:true
}

export const Secondary = Template.bind({});
Secondary.args={
    size:"normal",
    color:'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args={
    size:"normal",
    color:"tertiary"
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args={
    size:"h1",
    fontColor:"#35fd14"
}