import '../styles/globals.css'
import { AppProvider } from '../context/context'

import '@rainbow-me/rainbowkit/styles.css'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

const { chains, provider } = configureChains(
  [chain.goerli, chain.localhost],
  [
    alchemyProvider({ apiKey: process.env.Alchemy_API_KEY, priority: 1 }),
    jsonRpcProvider({
      priority: 2,
      rpc: chain => ({
        http: `HTTP://127.0.0.1:7545`,
      }),
    }),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'StreamNft',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme()} coolMode>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp