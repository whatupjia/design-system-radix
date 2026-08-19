import type { Meta } from '@storybook/react-vite';
import { ThemePanel, Flex, Card, Heading, Text, Button, Badge, TextField, Switch } from '@radix-ui/themes';

const meta = { title: 'Playground/Theme Panel' } satisfies Meta;
export default meta;

/**
 * ThemePanel is a dev tool: it floats on the right and lets you change the
 * Theme live — accent color, gray tint, radius, scaling, light/dark. Every
 * component reflows instantly. This is how you'd dial in a look before
 * committing the values to the <Theme> in main.tsx.
 */
export const Default = {
  render: () => (
    <>
      <Card style={{ maxWidth: 360 }}>
        <Flex direction="column" gap="3" p="2">
          <Flex justify="between" align="center">
            <Heading size="4">Sample card</Heading>
            <Badge color="green">Live</Badge>
          </Flex>
          <Text size="2" color="gray">Tweak the panel on the right — this updates instantly.</Text>
          <TextField.Root placeholder="Type something…" />
          <Text as="label" size="2"><Flex gap="2" align="center"><Switch defaultChecked /> Enabled</Flex></Text>
          <Flex gap="3" justify="end">
            <Button variant="soft" color="gray">Cancel</Button>
            <Button>Save</Button>
          </Flex>
        </Flex>
      </Card>
      <ThemePanel defaultOpen />
    </>
  ),
};
