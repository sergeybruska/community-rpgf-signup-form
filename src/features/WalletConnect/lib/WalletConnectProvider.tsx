import { useSignIn } from '@walletconnect/modal-auth-react';
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { useCallback, useContext, useMemo, useState } from 'react';
import { createContext, type FC, type PropsWithChildren } from 'react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, mainnet, polygon } from 'wagmi/chains';

type WalletConnectContext = {
  onSignIn: () => void;
  disabled: boolean;
  projectId: string;
};

const WalletConnectContextDefault: WalletConnectContext = {
  onSignIn: () => [],
  disabled: false,
  projectId: '',
};

const WalletConnectContext = createContext<WalletConnectContext>(
  WalletConnectContextDefault,
);

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || '';

const chains = [arbitrum, mainnet, polygon];

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export const WalletConnectProvider: FC<PropsWithChildren<unknown>> = (
  props,
) => {
  const { children } = props;

  const [disabled, setDisabled] = useState(false);
  const { signIn } = useSignIn({ statement: 'Sign In to My Dapp' });

  const onSignIn = useCallback(async () => {
    try {
      setDisabled(true);
      const data = await signIn();
      console.info(data);
    } catch (err) {
      console.error(err);
    } finally {
      setDisabled(false);
    }
  }, []);

  if (!projectId) {
    throw new Error('You need to provide NEXT_PUBLIC_PROJECT_ID env variable');
  }

  const context = useMemo(() => {
    return {
      onSignIn,
      projectId,
      disabled,
    };
  }, [onSignIn, disabled]);

  return (
    <WalletConnectContext.Provider value={context}>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </WalletConnectContext.Provider>
  );
};

export const useWalletConnect = () => useContext(WalletConnectContext);
