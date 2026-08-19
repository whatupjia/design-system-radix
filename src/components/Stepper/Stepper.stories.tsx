import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stepper } from './Stepper';

const meta = {
  title: 'Custom/Stepper',
  component: Stepper,
  args: { steps: ['Upload', 'Map columns', 'Review', 'Import'] },
  argTypes: {
    currentStep: { control: { type: 'range', min: 0, max: 3, step: 1 } },
    size: { control: 'inline-radio', options: ['1', '2'] },
  },
} satisfies Meta<typeof Stepper>;
export default meta;
type Story = StoryObj<typeof meta>;

export const FirstStep: Story = { args: { currentStep: 0 } };
export const MidFlow: Story = { args: { currentStep: 2 } };
export const Done: Story = { args: { currentStep: 4 } };
