import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@radix-ui/themes';
import { FileDropper } from './FileDropper';

const meta = {
  title: 'Custom/FileDropper',
  component: FileDropper,
  argTypes: { size: { control: 'inline-radio', options: ['1', '2', '3'] } },
  decorators: [(Story) => <Box width="420px"><Story /></Box>],
} satisfies Meta<typeof FileDropper>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { accept: '.csv', size: '2' } };
export const Small: Story = { args: { accept: '.csv', size: '1' } };
export const Large: Story = { args: { accept: '.csv', size: '3' } };
export const Disabled: Story = { args: { disabled: true } };
