import React from "react";
import { Meta, Story } from "@storybook/react";
import ButtonUniversal, { ButtonSize, Palette, ButtonBorder, BorderColor, TxtColor } from "../components/Button";

export default {
  title: "Components/Button",
  component: ButtonUniversal,
  
} as Meta;

const Template: Story<{ size: ButtonSize; color: Palette; txt: TxtColor; border: ButtonBorder; borderColor: BorderColor; label: React.ReactNode }> = args => (
  <ButtonUniversal {...args} />
);

export const Button = Template.bind({})

Button.args = {
    size: ButtonSize.Md,
    color: Palette.Black,
    border: ButtonBorder.default,
    borderColor: BorderColor.DefaultBorder,
    txt: TxtColor.White,
    label: "Try it free",
}

