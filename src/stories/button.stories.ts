/** @format */

import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
	title: 'Example/Button',
	component: ButtonComponent,
	tags: ['autodocs'],
	render: (args: ButtonComponent) => ({
		props: {
			backgroundColor: null,
			...args
		}
	}),
	argTypes: {
		backgroundColor: {
			control: 'color'
		}
	}
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		primary: true,
		label: 'Button'
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/BzObiHbMTWwMpyQSEp7mKP/Litnet-%7C-Design-System?type=design&node-id=174%3A4377&mode=dev'
		}
	}
};

export const Secondary: Story = {
	args: {
		label: 'Button'
	}
};

export const Large: Story = {
	args: {
		size: 'large',
		label: 'Button'
	}
};

export const Small: Story = {
	args: {
		size: 'small',
		label: 'Button'
	}
};
