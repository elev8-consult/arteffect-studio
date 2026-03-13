import {createClient} from '@sanity/client'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
const apiVersion = process.env.SANITY_STUDIO_API_VERSION || '2026-03-01'
const token = process.env.SANITY_STUDIO_API_TOKEN

if (!projectId || !token) {
  throw new Error('Missing SANITY_STUDIO_PROJECT_ID or SANITY_STUDIO_API_TOKEN in .env')
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
})

const ref = (_ref) => ({_type: 'reference', _ref})
const slug = (current) => ({_type: 'slug', current})
const toBlocks = (text) => [
  {
    _type: 'block',
    style: 'normal',
    markDefs: [],
    children: [{_type: 'span', text, marks: []}],
  },
]

const ids = {
  ngoCccl: 'ngo.cccl',
  ngoBcri: 'ngo.bcri',
  artistMira: 'artist.mira-haddad',
  artistKarim: 'artist.karim-nassar',
  batch01: 'batch.01',
  batch02: 'batch.02',
  designSunflower: 'design.sunflower-faces',
  designSoftGeometry: 'design.soft-geometry',
  designMemoryBloom: 'design.memory-bloom',
  designEchoBlocks: 'design.echo-blocks',
}

const ngos = [
  {
    _id: ids.ngoCccl,
    _type: 'ngo',
    name: 'Children Cancer Center Lebanon',
    slug: slug('children-cancer-center-lebanon'),
    shortDescription:
      'A pediatric cancer center providing treatment, psychosocial care, and family support across Lebanon.',
    fullStory: toBlocks(
      'Children Cancer Center Lebanon ensures that no child is denied treatment because of financial hardship. The center provides advanced care, counseling, and long-term family support.',
    ),
    mission:
      'To provide every child with cancer in Lebanon access to quality treatment and dignity-centered support.',
    impactStats: [
      {_type: 'impactStat', label: 'Children Supported', value: '3,200+'},
      {_type: 'impactStat', label: 'Treatment Programs', value: '18'},
      {_type: 'impactStat', label: 'Volunteer Network', value: '640+'},
    ],
    website: 'https://www.cccl.org.lb',
    instagram: 'https://www.instagram.com/ccclebanon',
  },
  {
    _id: ids.ngoBcri,
    _type: 'ngo',
    name: 'Beirut Community Relief Initiative',
    slug: slug('beirut-community-relief-initiative'),
    shortDescription:
      'A grassroots NGO focused on neighborhood recovery, housing repair, and community resilience.',
    fullStory: toBlocks(
      'Beirut Community Relief Initiative coordinates local rebuilding through transparent aid, direct family support, and long-term neighborhood programs.',
    ),
    mission:
      'To rebuild communities with accountable aid and practical recovery programs for families and local businesses.',
    impactStats: [
      {_type: 'impactStat', label: 'Homes Repaired', value: '1,150+'},
      {_type: 'impactStat', label: 'Families Assisted', value: '4,800+'},
      {_type: 'impactStat', label: 'Community Hubs', value: '12'},
    ],
    website: 'https://www.bcri.org',
    instagram: 'https://www.instagram.com/beirutrelief',
  },
]

const artists = [
  {
    _id: ids.artistMira,
    _type: 'artist',
    name: 'Mira Haddad',
    slug: slug('mira-haddad'),
    shortBio: 'Lebanese visual artist exploring identity, resilience, and memory.',
    fullBio: toBlocks(
      'Mira Haddad is a Beirut-based visual artist whose work combines portrait abstraction and organic symbolism to explore emotional recovery.',
    ),
    instagram: 'https://www.instagram.com/mirahaddadstudio',
    portfolioUrl: 'https://www.mirahaddadstudio.com',
    featuredQuote:
      'Art can hold contradiction: grief and optimism, rupture and continuity, one face and many selves.',
  },
  {
    _id: ids.artistKarim,
    _type: 'artist',
    name: 'Karim Nassar',
    slug: slug('karim-nassar'),
    shortBio: 'Multidisciplinary artist working with geometry, urban emotion, and abstraction.',
    fullBio: toBlocks(
      'Karim Nassar uses geometric systems and textured surfaces to translate urban emotion into wearable visual language.',
    ),
    instagram: 'https://www.instagram.com/karimnassar.art',
    portfolioUrl: 'https://www.karimnassar.art',
    featuredQuote: 'Geometry is structure, and structure is resilience under pressure.',
  },
]

const batches = [
  {
    _id: ids.batch01,
    _type: 'batch',
    title: 'Batch 01',
    slug: slug('batch-01-hope-through-healing'),
    batchNumber: '01',
    causeTitle: 'Hope Through Healing',
    ngo: ref(ids.ngoCccl),
    releaseDate: '2026-01-22',
    status: 'live',
    overview:
      'A release focused on healing, emotional growth, and visible hope through collaborative artwear.',
    whyThisBatchExists: toBlocks(
      'This batch supports pediatric cancer care continuity and family support programs through one clear cause/NGO/release narrative.',
    ),
    artists: [ref(ids.artistMira), ref(ids.artistKarim)],
    designs: [ref(ids.designSunflower), ref(ids.designMemoryBloom)],
  },
  {
    _id: ids.batch02,
    _type: 'batch',
    title: 'Batch 02',
    slug: slug('batch-02-community-rebuilding'),
    batchNumber: '02',
    causeTitle: 'Community Rebuilding',
    ngo: ref(ids.ngoBcri),
    releaseDate: '2026-05-16',
    status: 'upcoming',
    overview: 'A release centered on collective rebuilding, continuity, and social resilience.',
    whyThisBatchExists: toBlocks(
      'This batch was created to support long-term neighborhood recovery and direct household stabilization programs.',
    ),
    artists: [ref(ids.artistMira), ref(ids.artistKarim)],
    designs: [ref(ids.designSoftGeometry), ref(ids.designEchoBlocks)],
  },
]

const designs = [
  {
    _id: ids.designSunflower,
    _type: 'design',
    name: 'Sunflower Faces',
    slug: slug('sunflower-faces'),
    batch: ref(ids.batch01),
    artist: ref(ids.artistMira),
    meaning: 'Healing, identity, and emotional growth through layered portrait symbolism.',
    symbolism: 'Sunflowers rising from fragmented faces signal hope through pain.',
    availableColors: ['Black', 'White', 'Charcoal'],
    products: [],
  },
  {
    _id: ids.designSoftGeometry,
    _type: 'design',
    name: 'Soft Geometry',
    slug: slug('soft-geometry'),
    batch: ref(ids.batch02),
    artist: ref(ids.artistKarim),
    meaning: 'Structure within chaos and continuity under pressure.',
    symbolism: 'Connected forms represent social and emotional resilience.',
    availableColors: ['Black', 'Stone', 'Off-white'],
    products: [],
  },
  {
    _id: ids.designMemoryBloom,
    _type: 'design',
    name: 'Memory Bloom',
    slug: slug('memory-bloom'),
    batch: ref(ids.batch01),
    artist: ref(ids.artistMira),
    meaning: 'Memory as an act of rebuilding identity from fragments.',
    symbolism: 'Blooming forms emerge from fractured layers as recovery unfolds.',
    availableColors: ['Black', 'Sand', 'White'],
    products: [],
  },
  {
    _id: ids.designEchoBlocks,
    _type: 'design',
    name: 'Echo Blocks',
    slug: slug('echo-blocks'),
    batch: ref(ids.batch02),
    artist: ref(ids.artistKarim),
    meaning: 'Collective rebuilding expressed as repeating structural rhythm.',
    symbolism: 'Blocks and echoes represent shared effort and social momentum.',
    availableColors: ['Black', 'Concrete', 'Night Blue'],
    products: [],
  },
]

const buildProducts = (designId, designSlug, designName, skuPrefix) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  return [
    {
      _id: `product.${designSlug}.tee.black`,
      _type: 'product',
      title: `${designName} Tee`,
      slug: slug(`${designSlug}-tee-black`),
      design: ref(designId),
      productType: 'tee',
      color: 'Black',
      sizes,
      price: 48,
      sku: `${skuPrefix}-TEE-BLK`,
      stock: 120,
      status: 'active',
    },
    {
      _id: `product.${designSlug}.tee.white`,
      _type: 'product',
      title: `${designName} Tee`,
      slug: slug(`${designSlug}-tee-white`),
      design: ref(designId),
      productType: 'tee',
      color: 'White',
      sizes,
      price: 48,
      sku: `${skuPrefix}-TEE-WHT`,
      stock: 0,
      status: 'sold-out',
    },
    {
      _id: `product.${designSlug}.hoodie.black`,
      _type: 'product',
      title: `${designName} Hoodie`,
      slug: slug(`${designSlug}-hoodie-black`),
      design: ref(designId),
      productType: 'hoodie',
      color: 'Black',
      sizes,
      price: 96,
      sku: `${skuPrefix}-HD-BLK`,
      stock: 62,
      status: 'active',
    },
    {
      _id: `product.${designSlug}.sweatshirt.black`,
      _type: 'product',
      title: `${designName} Sweatshirt`,
      slug: slug(`${designSlug}-sweatshirt-black`),
      design: ref(designId),
      productType: 'sweatshirt',
      color: 'Black',
      sizes,
      price: 82,
      sku: `${skuPrefix}-SWT-BLK`,
      stock: 90,
      status: 'coming-soon',
    },
  ]
}

const products = [
  ...buildProducts(ids.designSunflower, 'sunflower-faces', 'Sunflower Faces', 'SF'),
  ...buildProducts(ids.designSoftGeometry, 'soft-geometry', 'Soft Geometry', 'SG'),
  ...buildProducts(ids.designMemoryBloom, 'memory-bloom', 'Memory Bloom', 'MB'),
  ...buildProducts(ids.designEchoBlocks, 'echo-blocks', 'Echo Blocks', 'EB'),
]

const allDocuments = [...ngos, ...artists, ...batches, ...designs, ...products]

const designToProducts = {
  [ids.designSunflower]: products
    .filter((p) => p.design._ref === ids.designSunflower)
    .map((p) => ref(p._id)),
  [ids.designSoftGeometry]: products
    .filter((p) => p.design._ref === ids.designSoftGeometry)
    .map((p) => ref(p._id)),
  [ids.designMemoryBloom]: products
    .filter((p) => p.design._ref === ids.designMemoryBloom)
    .map((p) => ref(p._id)),
  [ids.designEchoBlocks]: products
    .filter((p) => p.design._ref === ids.designEchoBlocks)
    .map((p) => ref(p._id)),
}

async function seed() {
  process.stdout.write(`Seeding ${allDocuments.length} docs to ${projectId}/${dataset}\n`)

  let tx = client.transaction()
  for (const doc of allDocuments) {
    tx = tx.createOrReplace(doc)
  }
  await tx.commit()

  for (const [designId, productRefs] of Object.entries(designToProducts)) {
    await client.patch(designId).set({products: productRefs}).commit()
  }

  process.stdout.write('Seed completed successfully\n')
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
