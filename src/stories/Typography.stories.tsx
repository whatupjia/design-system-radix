import type { Meta } from '@storybook/react-vite';
import { Flex, Heading, Text, Blockquote, Code, Quote, Em, Strong, Kbd, Link } from '@radix-ui/themes';

const meta = { title: 'Radix/Typography' } satisfies Meta;
export default meta;

export const Headings = {
  render: () => (
    <Flex direction="column" gap="2">
      {(['9','8','7','6','5','4','3','2','1'] as const).map((s) => (
        <Heading key={s} size={s}>Heading size {s}</Heading>
      ))}
    </Flex>
  ),
};

export const BodyText = {
  render: () => (
    <Flex direction="column" gap="3" style={{ maxWidth: 480 }}>
      <Text size="3">Regular body text with <Strong>strong</Strong>, <Em>emphasis</Em>, a <Link href="#">link</Link>, and inline <Code>code</Code>.</Text>
      <Blockquote>Design is not just what it looks like and feels like. Design is how it works.</Blockquote>
      <Text>Press <Kbd>⌘ K</Kbd> to search. <Quote>Quoted text</Quote> renders inline.</Text>
    </Flex>
  ),
};
