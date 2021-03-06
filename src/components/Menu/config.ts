import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'HomeN',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'TradeN',
    icon: 'TradeIcon',
    items: [
      {
        label: 'ExchangeN',
        href: 'https://exchange.goosedefi.com/',
      },
      {
        label: 'LiquidityN',
        href: 'https://exchange.goosedefi.com/#/pool',
      },
    ],
  },
  {
    label: 'FarmsN',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'NestsN',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'InfoN',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwapN',
        href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/goose-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/goose-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      },
    ],
  },
  {
    label: 'MoreN',
    icon: 'MoreIcon',
    items: [
      {
        label: 'GithubN',
        href: 'https://github.com/goosedefi/',
      },
      {
        label: 'DocsN',
        href: 'https://goosedefi.gitbook.io/goose-finance/',
      },
      {
        label: 'Blog',
        href: 'https://goosefinance.medium.com/',
      },
    ],
  },
  {
    label: 'Partnerships/IFO',
    icon: 'GooseIcon',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  },
  {
    label: 'Audit by HackenN',
    icon: 'AuditIcon',
    href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  },
  {
    label: 'Audit by CertiKN',
    icon: 'AuditIcon',
    href: 'https://certik.org/projects/goose-finance',
  },
]

export default config
