import type { Meta } from '@storybook/react-vite';
import { Flex, Grid, Box, Separator, AspectRatio, ScrollArea, Text, Card } from '@radix-ui/themes';

const meta = { title: 'Radix/Layout' } satisfies Meta;
export default meta;

const Tile = ({ children }: { children: React.ReactNode }) => (
  <Box
    p="4"
    style={{ background: 'var(--accent-3)', borderRadius: 'var(--radius-2)', textAlign: 'center' }}
  >
    <Text size="2">{children}</Text>
  </Box>
);

export const FlexRow = {
  render: () => (
    <Flex gap="3">
      <Tile>One</Tile>
      <Tile>Two</Tile>
      <Tile>Three</Tile>
    </Flex>
  ),
};

export const GridLayout = {
  render: () => (
    <Grid columns="3" gap="3" width="auto">
      <Tile>1</Tile>
      <Tile>2</Tile>
      <Tile>3</Tile>
      <Tile>4</Tile>
      <Tile>5</Tile>
      <Tile>6</Tile>
    </Grid>
  ),
};

export const SeparatorExample = {
  render: () => (
    <Flex direction="column" gap="3">
      <Text>Above</Text>
      <Separator size="4" />
      <Text>Below</Text>
    </Flex>
  ),
};

export const AspectRatioExample = {
  render: () => (
    <Box width="300px">
      <AspectRatio ratio={16 / 9}>
        <Box
          style={{ height: '100%', background: 'var(--accent-4)', borderRadius: 'var(--radius-2)' }}
        />
      </AspectRatio>
    </Box>
  ),
};

export const ScrollAreaExample = {
  render: () => (
    <ScrollArea type="always" scrollbars="vertical" style={{ height: 120, maxWidth: 300 }}>
      <Card>
        <Flex direction="column" gap="2" p="2">
          {Array.from({ length: 12 }, (_, i) => (
            <Text key={i} size="2">
              Scrollable row {i + 1}
            </Text>
          ))}
        </Flex>
      </Card>
    </ScrollArea>
  ),
};
