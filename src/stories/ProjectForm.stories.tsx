import type { Meta } from '@storybook/react-vite';
import {
  Card,
  Flex,
  Heading,
  Text,
  TextField,
  Select,
  Switch,
  Button,
  Separator,
} from '@radix-ui/themes';

const meta = { title: 'Patterns/Project Form' } satisfies Meta;
export default meta;

// Shows how the pieces compose into a real screen — the prototyping payoff.
export const Default = {
  render: () => (
    <Card style={{ maxWidth: 420 }}>
      <Flex direction="column" gap="4" p="2">
        <Heading size="4">New project</Heading>
        <Flex direction="column" gap="1">
          <Text as="label" size="2" weight="medium">
            Project name
          </Text>
          <TextField.Root placeholder="Bioanalytical platform" />
        </Flex>
        <Flex direction="column" gap="1">
          <Text as="label" size="2" weight="medium">
            Visibility
          </Text>
          <Select.Root defaultValue="team">
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="private">Private</Select.Item>
              <Select.Item value="team">Team</Select.Item>
              <Select.Item value="org">Organization</Select.Item>
            </Select.Content>
          </Select.Root>
        </Flex>
        <Text as="label" size="2">
          <Flex gap="2" align="center">
            <Switch defaultChecked /> Notify collaborators
          </Flex>
        </Text>
        <Separator size="4" />
        <Flex gap="3" justify="end">
          <Button variant="soft" color="gray">
            Cancel
          </Button>
          <Button>Create project</Button>
        </Flex>
      </Flex>
    </Card>
  ),
};
