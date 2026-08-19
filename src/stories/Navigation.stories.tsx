import type { Meta } from '@storybook/react-vite';
import { Tabs, TabNav, Box, Text } from '@radix-ui/themes';

const meta = { title: 'Radix/Navigation' } satisfies Meta;
export default meta;

export const TabsExample = {
  render: () => (
    <Tabs.Root defaultValue="overview">
      <Tabs.List>
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>
      <Box pt="3">
        <Tabs.Content value="overview">
          <Text size="2">Overview panel.</Text>
        </Tabs.Content>
        <Tabs.Content value="activity">
          <Text size="2">Activity panel.</Text>
        </Tabs.Content>
        <Tabs.Content value="settings">
          <Text size="2">Settings panel.</Text>
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  ),
};

export const TabNavExample = {
  render: () => (
    <TabNav.Root>
      <TabNav.Link href="#" active>
        Home
      </TabNav.Link>
      <TabNav.Link href="#">Projects</TabNav.Link>
      <TabNav.Link href="#">Settings</TabNav.Link>
    </TabNav.Root>
  ),
};
