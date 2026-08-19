import type { Meta } from '@storybook/react-vite';
import { Flex, Button, IconButton, DropdownMenu, ContextMenu, Text } from '@radix-ui/themes';

const meta = { title: 'Radix/Actions' } satisfies Meta;
export default meta;

const Gear = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden><circle cx="8" cy="8" r="2.5" /><path d="M8 0l1 2 2-1 .5 2 2 .5-1 2 2 1-2 1 1 2-2 .5-.5 2-2-1-1 2-1-2-2 1-.5-2-2-.5 1-2-2-1 2-1-1-2 2-.5L7 1z" opacity=".25" /></svg>
);

export const Buttons = {
  render: () => (
    <Flex direction="column" gap="3">
      <Flex gap="3" align="center">
        <Button variant="solid">Solid</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="surface">Surface</Button>
      </Flex>
      <Flex gap="3" align="center">
        <Button size="1">Size 1</Button>
        <Button size="2">Size 2</Button>
        <Button size="3">Size 3</Button>
        <Button color="red">Red</Button>
        <Button disabled>Disabled</Button>
      </Flex>
    </Flex>
  ),
};

export const IconButtons = {
  render: () => (
    <Flex gap="3" align="center">
      <IconButton variant="solid"><Gear /></IconButton>
      <IconButton variant="soft"><Gear /></IconButton>
      <IconButton variant="outline"><Gear /></IconButton>
      <IconButton variant="ghost"><Gear /></IconButton>
    </Flex>
  ),
};

export const DropdownMenuExample = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger><Button variant="soft">Actions <DropdownMenu.TriggerIcon /></Button></DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Edit</DropdownMenu.Item>
        <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item color="red">Delete</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
};

export const ContextMenuExample = {
  render: () => (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <Flex align="center" justify="center" style={{ width: 260, height: 120, border: '1px dashed var(--gray-6)', borderRadius: 'var(--radius-3)' }}>
          <Text size="2" color="gray">Right-click here</Text>
        </Flex>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>Cut</ContextMenu.Item>
        <ContextMenu.Item>Copy</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item color="red">Delete</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  ),
};
