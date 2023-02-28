import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

// Latest sousId = 17
const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.migo,
    earningToken: tokens.migo,
    contractAddress: {
      1115: '0xA3BbEb6836d161DBc4a9605072fC387a079D5976',
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x496Cc0609D749216Bb2a999b683468649759D338',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  // {
  //   sousId: 24,
  //   stakingToken: tokens.arco,
  //   earningToken: tokens.ice,
  //   contractAddress: {
  //     1115: '0xD47063A092C33af5213596fb85a480B9c48caF27',
  //     97: '',
  //     56: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.00028',
  // },
  
]

export default pools
