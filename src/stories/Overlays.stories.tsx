import type { Meta } from '@storybook/react-vite';
import { Flex, Button, Dialog, AlertDialog, Popover, HoverCard, Tooltip, Text, Link, TextField } from '@radix-ui/themes';

const meta = { title: 'Radix/Overlays' } satisfies Meta;
export default meta;

export const DialogExample = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger><Button>Edit profile</Button></Dialog.Trigger>
      <Dialog.Content maxWidth="440px">
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description size="2" mb="4">Update your display name.</Dialog.Description>
        <TextField.Root defaultValue="Jia Liu" mb="4" />
        <Flex gap="3" justify="end">
          <Dialog.Close><Button variant="soft" color="gray">Cancel</Button></Dialog.Close>
          <Dialog.Close><Button>Save</Button></Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  ),
};

export const AlertDialogExample = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger><Button color="red">Delete</Button></AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="440px">
        <AlertDialog.Title>Delete project?</AlertDialog.Title>
        <AlertDialog.Description size="2">This cannot be undone.</AlertDialog.Description>
        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel><Button variant="soft" color="gray">Cancel</Button></AlertDialog.Cancel>
          <AlertDialog.Action><Button color="red">Delete</Button></AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  ),
};

export const PopoverExample = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger><Button variant="soft">Open popover</Button></Popover.Trigger>
      <Popover.Content width="280px">
        <Text size="2">Anchored, non-modal content. Click outside or press Escape to close.</Text>
      </Popover.Content>
    </Popover.Root>
  ),
};

export const HoverCardExample = {
  render: () => (
    <Text>
      Hover over <HoverCard.Root><HoverCard.Trigger><Link href="#">this link</Link></HoverCard.Trigger>
      <HoverCard.Content maxWidth="280px"><Text size="2">Extra detail shown on hover — good for previews.</Text></HoverCard.Content></HoverCard.Root>.
    </Text>
  ),
};

export const TooltipExample = {
  render: () => (
    <Tooltip content="Saves without closing"><Button variant="soft">Hover me</Button></Tooltip>
  ),
};
