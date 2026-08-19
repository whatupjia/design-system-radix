import type { Meta } from '@storybook/react-vite';
import { useState } from 'react';
import {
  Card, Flex, Text, Heading, Button, Select, Table, Badge, Callout,
  Separator, Progress,
} from '@radix-ui/themes';
// The two components Radix doesn't ship — now real, reusable, and theme-aware.
import { Stepper } from '../components/Stepper/Stepper';
import { FileDropper } from '../components/FileDropper/FileDropper';

const meta = { title: 'Patterns/CSV Import' } satisfies Meta;
export default meta;

/* A composed, working 4-step wizard. Everything is stock Radix Themes
   except Stepper and FileDropper — our two custom components filling
   Radix's gaps. State lives here in the wizard, the one place that sees
   every step. */

const STEPS = ['Upload', 'Map columns', 'Review', 'Done'];

// Fake parsed rows for the review step.
const ROWS = [
  { id: 1, name: 'Ada Lovelace', email: 'ada@example.com', ok: true },
  { id: 2, name: 'Alan Turing', email: 'alan@example', ok: false },
  { id: 3, name: 'Grace Hopper', email: 'grace@example.com', ok: true },
  { id: 4, name: 'Katherine Johnson', email: '', ok: false },
];

export const Wizard = {
  render: () => {
    const [step, setStep] = useState(0);
    const [hasFile, setHasFile] = useState(false);
    const errorCount = ROWS.filter((r) => !r.ok).length;

    return (
      <Card style={{ maxWidth: 560 }}>
        <Flex direction="column" gap="4" p="2">
          <Stepper steps={STEPS} currentStep={step} onStepClick={setStep} />
          <Separator size="4" />

          {step === 0 && (
            <Flex direction="column" gap="3">
              <Heading size="3">Upload a CSV</Heading>
              <FileDropper accept=".csv" onFilesSelected={() => setHasFile(true)} />
            </Flex>
          )}

          {step === 1 && (
            <Flex direction="column" gap="3">
              <Heading size="3">Map columns</Heading>
              <Text size="2" color="gray">Match each CSV column to a field.</Text>
              {['cust_name', 'cust_email'].map((col) => (
                <Flex key={col} align="center" justify="between" gap="3">
                  <Text size="2"><code>{col}</code></Text>
                  <Select.Root defaultValue={col === 'cust_email' ? 'email' : 'name'}>
                    <Select.Trigger />
                    <Select.Content>
                      <Select.Item value="name">Full name</Select.Item>
                      <Select.Item value="email">Email</Select.Item>
                      <Select.Item value="skip">Don't import</Select.Item>
                    </Select.Content>
                  </Select.Root>
                </Flex>
              ))}
            </Flex>
          )}

          {step === 2 && (
            <Flex direction="column" gap="3">
              <Heading size="3">Review</Heading>
              {errorCount > 0 && (
                <Callout.Root color="red">
                  <Callout.Text>{errorCount} of {ROWS.length} rows have errors and will be skipped.</Callout.Text>
                </Callout.Root>
              )}
              <Table.Root variant="surface">
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {ROWS.map((r) => (
                    <Table.Row key={r.id}>
                      <Table.Cell>{r.name}</Table.Cell>
                      <Table.Cell>{r.email || <Text color="gray">—</Text>}</Table.Cell>
                      <Table.Cell>{r.ok ? <Badge color="green">OK</Badge> : <Badge color="red">Invalid email</Badge>}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </Flex>
          )}

          {step === 3 && (
            <Flex direction="column" gap="3" align="center" py="4">
              <Progress value={100} color="green" />
              <Heading size="4">Import complete</Heading>
              <Text size="2" color="gray">{ROWS.length - errorCount} rows imported, {errorCount} skipped.</Text>
            </Flex>
          )}

          <Separator size="4" />
          <Flex justify="between">
            <Button variant="soft" color="gray" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>Back</Button>
            {step < STEPS.length - 1 ? (
              <Button disabled={step === 0 && !hasFile} onClick={() => setStep((s) => s + 1)}>
                {step === 2 ? `Import ${ROWS.length - errorCount} rows` : 'Next'}
              </Button>
            ) : (
              <Button onClick={() => setStep(0)}>Start over</Button>
            )}
          </Flex>
        </Flex>
      </Card>
    );
  },
};
