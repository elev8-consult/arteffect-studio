import {artistType} from './documents/artist'
import {batchType} from './documents/batch'
import {designType} from './documents/design'
import {ngoType} from './documents/ngo'
import {productType} from './documents/product'
import {blockContentType} from './objects/blockContent'
import {impactStatType} from './objects/impactStat'

export const schemaTypes = [
  ngoType,
  artistType,
  batchType,
  designType,
  productType,
  blockContentType,
  impactStatType,
]
