import type { Meta } from '@storybook/react-vite';
import {
  Flex,
  Box,
  Card,
  Table,
  DataList,
  Avatar,
  Badge,
  Callout,
  Progress,
  Spinner,
  Skeleton,
  Text,
  Heading,
  Inset,
  Code,
} from '@radix-ui/themes';

const meta = { title: 'Radix/Data Display' } satisfies Meta;
export default meta;

export const Cards = {
  render: () => (
    <Flex gap="3" wrap="wrap">
      <Card style={{ width: 240 }}>
        <Flex direction="column" gap="1" p="2">
          <Heading size="3">Assay run #4821</Heading>
          <Text size="2" color="gray">
            96 samples, no anomalies.
          </Text>
        </Flex>
      </Card>
      <Card style={{ width: 240 }}>
        <Inset side="top" pb="current">
          <Box style={{ height: 100, background: 'var(--accent-4)' }} />
        </Inset>
        <Text size="2">Card with an Inset image area above the content.</Text>
      </Card>
    </Flex>
  ),
};

export const TableExample = {
  render: () => (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Run</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Samples</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.RowHeaderCell>Bioanalytical A</Table.RowHeaderCell>
          <Table.Cell>96</Table.Cell>
          <Table.Cell>
            <Badge color="green">Approved</Badge>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>Cytometry B</Table.RowHeaderCell>
          <Table.Cell>48</Table.Cell>
          <Table.Cell>
            <Badge color="blue">In review</Badge>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>Assay C</Table.RowHeaderCell>
          <Table.Cell>12</Table.Cell>
          <Table.Cell>
            <Badge color="red">Failed</Badge>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
};

export const DataListExample = {
  render: () => (
    <DataList.Root>
      <DataList.Item>
        <DataList.Label>Status</DataList.Label>
        <DataList.Value>
          <Badge color="green">Approved</Badge>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label>Run ID</DataList.Label>
        <DataList.Value>
          <Code>#4821</Code>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label>Samples</DataList.Label>
        <DataList.Value>96</DataList.Value>
      </DataList.Item>
    </DataList.Root>
  ),
};

export const AvatarsAndBadges = {
  render: () => (
    <Flex direction="column" gap="4">
      <Flex gap="3" align="center">
        <Avatar fallback="JL" />
        <Avatar fallback="JL" color="teal" />
        <Avatar size="4" fallback="AB" radius="full" />
      </Flex>
      <Flex gap="2">
        <Badge color="gray">Draft</Badge>
        <Badge color="blue">In review</Badge>
        <Badge color="green">Approved</Badge>
        <Badge color="red">Failed</Badge>
      </Flex>
    </Flex>
  ),
};

export const Callouts = {
  render: () => (
    <Flex direction="column" gap="3" width="420px">
      <Callout.Root color="blue">
        <Callout.Text>Heads up — resets nightly.</Callout.Text>
      </Callout.Root>
      <Callout.Root color="green">
        <Callout.Text>Your changes were published.</Callout.Text>
      </Callout.Root>
      <Callout.Root color="red">
        <Callout.Text>Upload failed — file too large.</Callout.Text>
      </Callout.Root>
    </Flex>
  ),
};

export const ProgressAndLoading = {
  render: () => (
    <Flex direction="column" gap="4" width="300px">
      <Progress value={25} />
      <Progress value={70} color="green" />
      <Flex gap="3" align="center">
        <Spinner /> <Text size="2">Loading…</Text>
      </Flex>
      <Flex direction="column" gap="2">
        <Skeleton width="100%" height="14px" />
        <Skeleton width="80%" height="14px" />
        <Skeleton width="60%" height="14px" />
      </Flex>
    </Flex>
  ),
};
