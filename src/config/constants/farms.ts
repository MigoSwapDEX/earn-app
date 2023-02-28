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
    lpSymbol: 'MIGO-CORE LP',
    lpAddresses: {
      1115: '0xD4B79Bf75fE455e11C07d08521681883d94b80ee',
      97: '',
      56: '',
    },
    lpDecimals: 18,
    isLpToken: true,
    token: tokens.migo,
    quoteToken: tokens.wbnb,
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
