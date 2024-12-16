// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Site
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
interface SiteConfig {
  name: string
  title: string
  emoji: string
  description: string
  localeDefault: string
  links: {
    docs: string
    discord: string
    twitter: string
    github: string
  }
}

export const SITE_CANONICAL = "https://turboeth.xyz"

export const siteConfig: SiteConfig = {
  name: "OTCGasGetter",
  title: "OTCGasGetter - The simplest and cheapest decentralized application for\n" +
      "obtaining Ethereum ETH gas, based on optimism and fraud detection.",
  emoji: "⚡",
  description:
    "The safest, cheapest, and fastest ETH Gas acquisition DApp.",
  localeDefault: "en",
  links: {
    docs: "https://github.com/jeasonzhang-eth/otc_gas_getter_frontend",
    discord: "https://discord.gg/GqBauEjR",
    twitter: "https://x.com/jeason52",
    github: "https://github.com/jeasonzhang-eth/otc_gas_getter_frontend",
  },
}

export const DEPLOY_URL =
  "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fturbo-eth%2Ftemplate-web3-app&project-name=TurboETH&repository-name=turbo-eth&demo-title=TurboETH&env=NEXTAUTH_SECRET,DATABASE_URL&envDescription=How%20to%20get%20these%20env%20variables%3A&envLink=https%3A%2F%2Fgithub.com%2Fturbo-eth%2Ftemplate-web3-app%2Fblob%2Fintegrations%2F.env.example"
