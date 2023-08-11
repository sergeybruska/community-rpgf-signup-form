import { createEmotionCache, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';

import '@/app/styles/globals.css';

import { ModalProvider } from '@/app/providers/ModalProvider';
import { mantineTheme } from '@/app/theme/mantineTheme';
import {
  AuthChecker,
  SessionProvider,
} from '@/features/Authentication/AuthChecker';

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
    <SessionProvider>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={myCache}
        theme={mantineTheme}
      >
        <QueryClientProvider client={queryClient}>
          <ModalProvider>
            <AuthChecker>
              <Component {...pageProps} />
              <Notifications position='top-right' zIndex={2077} />
            </AuthChecker>
          </ModalProvider>
        </QueryClientProvider>
      </MantineProvider>
    </SessionProvider>
  );
}
