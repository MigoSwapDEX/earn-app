import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'MIGO',
    lpAddresses: {
      1115: '0xB76b0Eac05C94b7d5467399F2E193b0f8077ABD7',
      97: '',
      56: '',
    },
    lpDecimals: 18,
    isLpToken: false,
    token: tokens.ichigo,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'CORE-CTT LP',
    lpAddresses: {
      1115: '0xa03acc22cb496c4b0c0d9189286d50ca62320f33',
      97: '',
      56: '',
    },
    lpDecimals: 18,
    isLpToken: true,
    token: tokens.wbnb,
    quoteToken: tokens.ctt,
  },
  {
    pid: 2,
    lpSymbol: 'CORE-MIGO LP',
    lpAddresses: {
      1115: '0x3ada4d9ca69309409ca7c3df27cdacccd397376f',
      97: '',
      56: '',
    },
    lpDecimals: 18,
    isLpToken: true,
    token: tokens.wbnb,
    quoteToken: tokens.migo,
  },
  // {
  //   pid: 3,
  //   lpSymbol: 'BPAD TOKEN',
  //   lpAddresses: {
  //     1115: '0x71946a5C9dA7C95ee804a9BE561EC15A3F286A7D',
  //     97: '',
  //     56: '0xCCA18B47A0Ec8579B53a084b96e3416deFE14574',
  //   },
  //   lpDecimals: 8,
  //   isLpToken: false,
  //   token: tokens.bpad,
  //   quoteToken: tokens.wbnb,
  // },

]

export default farms
