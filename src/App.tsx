import {
  Container, Section, Flex, Heading, Text, Card, Button, TextField,
  Select, Switch, Badge, Callout, Separator,
} from '@radix-ui/themes';

/**
 * Demo screen — everything here is imported from @radix-ui/themes and
 * styled by the Theme provider in main.tsx. No custom CSS, no tokens to
 * maintain. This is the "just import and prototype" workflow.
 */
export default function App() {
  return (
    <Container size="2" px="4">
      <Section>
        <Flex direction="column" gap="5">
          <Flex justify="between" align="center">
            <Heading size="6">New project</Heading>
            <Badge color="green">Draft</Badge>
          </Flex>

          <Callout.Root color="blue">
            <Callout.Text>
              This whole screen is Radix Themes components — no hand-written CSS.
            </Callout.Text>
          </Callout.Root>

          <Card>
            <Flex direction="column" gap="4" p="2">
              <Flex direction="column" gap="1">
                <Text as="label" size="2" weight="medium">Project name</Text>
                <TextField.Root placeholder="Bioanalytical platform" />
              </Flex>

              <Flex direction="column" gap="1">
                <Text as="label" size="2" weight="medium">Visibility</Text>
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
                <Button variant="soft" color="gray">Cancel</Button>
                <Button>Create project</Button>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </Section>
    </Container>
  );
}
