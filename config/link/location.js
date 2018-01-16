import lazy from './lazy'

export default [
  {
    path: '/index',
    component: lazy('components/index')
  },
  {
    path: '/order',
    component: lazy('components/order')
  },
]
