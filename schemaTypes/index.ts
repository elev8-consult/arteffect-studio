import {artistType} from './documents/artist.ts'
import {batchType} from './documents/batch.ts'
import {designType} from './documents/design.ts'
import {ngoType} from './documents/ngo.ts'
import {productType} from './documents/product.ts'
import {blockContentType} from './objects/blockContent.ts'
import {impactStatType} from './objects/impactStat.ts'

export const schemaTypes = [
  ngoType,
  artistType,
  batchType,
  designType,
  productType,
  blockContentType,
  impactStatType,
]
