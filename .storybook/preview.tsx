import type { Preview, Decorator } from '@storybook/react-vite';
import { Theme } from '@radix-ui/themes';
// Radix Themes' own stylesheet — this is the "batteries included" styling.
import '@radix-ui/themes/styles.css';

const withTheme: Decorator = (Story, context) => {
  const appearance = context.globals.appearance ?? 'light';
  return (
    <Theme accentColor="teal" grayColor="slate" radius="medium" appearance={appearance}>
      <Story />
    </Theme>
  );
};

const preview: Preview = {
  decorators: [withTheme],
  globalTypes: {
    appearance: {
      description: 'Light / dark mode',
      defaultValue: 'light',
      toolbar: {
        title: 'Appearance',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
};

export default preview;
