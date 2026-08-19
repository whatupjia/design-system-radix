import type { Meta } from '@storybook/react-vite';
import {
  Flex,
  Text,
  TextField,
  TextArea,
  Select,
  Checkbox,
  CheckboxGroup,
  CheckboxCards,
  RadioGroup,
  RadioCards,
  Switch,
  Slider,
  SegmentedControl,
  Box,
} from '@radix-ui/themes';

const meta = { title: 'Radix/Forms' } satisfies Meta;
export default meta;

export const TextInputs = {
  render: () => (
    <Flex direction="column" gap="3" width="300px">
      <TextField.Root placeholder="Single-line input" />
      <TextField.Root placeholder="Disabled" disabled />
      <TextArea placeholder="Multi-line text area" />
    </Flex>
  ),
};

export const Dropdown = {
  render: () => (
    <Select.Root defaultValue="team">
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="private">Private</Select.Item>
        <Select.Item value="team">Team</Select.Item>
        <Select.Item value="org">Organization</Select.Item>
      </Select.Content>
    </Select.Root>
  ),
};

export const CheckboxesAndRadios = {
  render: () => (
    <Flex gap="6">
      <CheckboxGroup.Root defaultValue={['1']}>
        <CheckboxGroup.Item value="1">Email</CheckboxGroup.Item>
        <CheckboxGroup.Item value="2">SMS</CheckboxGroup.Item>
        <CheckboxGroup.Item value="3">Push</CheckboxGroup.Item>
      </CheckboxGroup.Root>
      <RadioGroup.Root defaultValue="1">
        <RadioGroup.Item value="1">Standard</RadioGroup.Item>
        <RadioGroup.Item value="2">Pro</RadioGroup.Item>
        <RadioGroup.Item value="3">Enterprise</RadioGroup.Item>
      </RadioGroup.Root>
    </Flex>
  ),
};

export const SelectableCards = {
  render: () => (
    <Flex direction="column" gap="4" width="420px">
      <CheckboxCards.Root defaultValue={['1']} columns="2">
        <CheckboxCards.Item value="1">
          <Text weight="bold">Analytics</Text>
        </CheckboxCards.Item>
        <CheckboxCards.Item value="2">
          <Text weight="bold">Billing</Text>
        </CheckboxCards.Item>
      </CheckboxCards.Root>
      <RadioCards.Root defaultValue="1" columns="2">
        <RadioCards.Item value="1">
          <Text weight="bold">Monthly</Text>
        </RadioCards.Item>
        <RadioCards.Item value="2">
          <Text weight="bold">Annual</Text>
        </RadioCards.Item>
      </RadioCards.Root>
    </Flex>
  ),
};

export const TogglesAndSliders = {
  render: () => (
    <Flex direction="column" gap="4" width="300px">
      <Text as="label" size="2">
        <Flex gap="2" align="center">
          <Switch defaultChecked /> Notifications
        </Flex>
      </Text>
      <Text as="label" size="2">
        <Flex gap="2" align="center">
          <Checkbox defaultChecked /> I agree
        </Flex>
      </Text>
      <Box>
        <Slider defaultValue={[40]} />
      </Box>
      <SegmentedControl.Root defaultValue="list">
        <SegmentedControl.Item value="list">List</SegmentedControl.Item>
        <SegmentedControl.Item value="grid">Grid</SegmentedControl.Item>
        <SegmentedControl.Item value="board">Board</SegmentedControl.Item>
      </SegmentedControl.Root>
    </Flex>
  ),
};
