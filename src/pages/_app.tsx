import { createEmotionCache, MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';

import '@/app/styles/globals.css';

import { WalletConnectProvider } from '@/features/WalletConnect';

// createEmotionCache({ key: 'mantine', prepend: false });
const myCache = createEmotionCache({ key: 'mantine', prepend: true });

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60,
        },
      },
    }),
  );

  return (
    <WalletConnectProvider>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={myCache}
        theme={{
          colorScheme: 'light',
          fontFamily: 'Open Sans, sans-serif',
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
        }}
      >
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </MantineProvider>
    </WalletConnectProvider>
  );
}
