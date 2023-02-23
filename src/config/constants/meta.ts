import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MigoSwap',
  description:
    'The AMM you can trust on the CoreDao network. Bringing you the true meaning of DeFi. Trade and farm tokens, passively, on our platform.',
  image: 'https://migoswap.org/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MigoSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MigoSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MigoSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MigoSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MigoSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MigoSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('MigoSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MigoSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MigoSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('MigoSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('MigoSwap')}`,
      }
    default:
      return null
  }
}
