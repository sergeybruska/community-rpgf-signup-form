import { type MantineThemeOverride } from '@mantine/core';

export const mantineTheme: MantineThemeOverride = {
  colorScheme: 'light',
  fontFamily: 'Open Sans, sans-serif',
  focusRingStyles: {
    inputStyles: (theme) => ({
      outline: 0,
      borderColor: theme.colors.gray[5],
    }),
  },
  colors: {
    green: [
      '#DDFDF3',
      '#B7FAE6',
      '#74F6CF',
      '#2CF2B6',
      '#0CC58D',
      '#087F5B',
      '#51cf66',
      '#40c057',
      '#37b24d',
      '#2f9e44',
    ],
    red: [
      '#fff5f5',
      '#ffe3e3',
      '#ffc9c9',
      '#ffa8a8',
      '#ff8787',
      '#ff6b6b',
      '#fa5252',
      '#f03e3e',
      '#e03131',
      '#c92a2a',
    ],
  },
};
