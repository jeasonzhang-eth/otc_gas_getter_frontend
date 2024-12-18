// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Networks
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { http } from "wagmi"
import {
  arbitrum,
  arbitrumSepolia,
  base,
  baseSepolia,
  gnosis,
  gnosisChiado,
  hardhat,
  mainnet,
  optimism,
  optimismSepolia,
  polygon,
  polygonMumbai,
  sepolia,
  mantle
} from "wagmi/chains"

export const chains = [
  mainnet,
  optimism,
  arbitrum,
  polygon,
  gnosis,
  hardhat,
  base,
  baseSepolia,
  polygonMumbai,
  mainnet,
  sepolia,
  polygonMumbai,
  gnosisChiado,
  optimismSepolia,
  arbitrumSepolia,
  {
    ...mantle,
    // 添加自定义图标配置
    iconUrl: '/integrations/aave/logos/mantle.png',
    iconBackground: '#000000',
  },
] as const

export const transports = {
  [mainnet.id]: http(),
  [mantle.id]: http(),
  [sepolia.id]: http(),
  [polygonMumbai.id]: http(),
  [gnosisChiado.id]: http(),
  [hardhat.id]: http(),
  [optimism.id]: http(),
  [arbitrum.id]: http(),
  [polygon.id]: http(),
  [gnosis.id]: http(),
  [base.id]: http(),
} as const
