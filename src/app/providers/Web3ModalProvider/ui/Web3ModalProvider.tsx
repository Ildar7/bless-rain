import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';

import { WagmiProvider } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

const queryClient = new QueryClient();

const projectId = process.env.REACT_APP_WEB3_MODAL_PROJECT_ID!;

const metadata = {
    name: 'Bless Rain',
    description: 'Bless Rain',
    url: 'https://rain.bless.bet/',
    icons: [],
};

const chains = [mainnet] as const;
const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
});

createWeb3Modal({
    wagmiConfig: config,
    projectId,
});

export function Web3ModalProvider({ children }: {children: ReactNode}) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    );
}
