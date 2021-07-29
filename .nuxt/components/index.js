import { wrapFunctional } from './utils'

export { default as Froms } from '../../components/Froms.vue'
export { default as Inspire } from '../../components/Inspire.vue'
export { default as Pokemon } from '../../components/Pokemon.vue'
export { default as PokemonList } from '../../components/PokemonList.vue'
export { default as Shop } from '../../components/Shop.vue'

export const LazyFroms = import('../../components/Froms.vue' /* webpackChunkName: "components/froms" */).then(c => wrapFunctional(c.default || c))
export const LazyInspire = import('../../components/Inspire.vue' /* webpackChunkName: "components/inspire" */).then(c => wrapFunctional(c.default || c))
export const LazyPokemon = import('../../components/Pokemon.vue' /* webpackChunkName: "components/pokemon" */).then(c => wrapFunctional(c.default || c))
export const LazyPokemonList = import('../../components/PokemonList.vue' /* webpackChunkName: "components/pokemon-list" */).then(c => wrapFunctional(c.default || c))
export const LazyShop = import('../../components/Shop.vue' /* webpackChunkName: "components/shop" */).then(c => wrapFunctional(c.default || c))
