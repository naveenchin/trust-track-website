export type BlockType =
  | 'paragraph'
  | 'heading2'
  | 'heading3'
  | 'quote'
  | 'divider'
  | 'bullet-list';

export interface ArticleBlock {
  type: BlockType;
  content?: string;
  items?: string[];
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  description: string;
  tags: string[];
  blocks: ArticleBlock[];
}

export const articles: Article[] = [
  {
    slug: 'interoperability-main-challenge-digital-product-passport',
    title: 'Interoperability: The Main Challenge for a Digital Product Passport System',
    subtitle: 'How Europe has solved this kind of challenge before — and what it means for DPP.',
    date: 'February 15, 2026',
    readTime: '5 min read',
    description: 'Interoperability rarely gets the spotlight. But it sits beneath every regulation, technology stack, and industry collaboration effort. Here is why it is the central challenge for Digital Product Passports — and how Europe has navigated similar terrain before.',
    tags: ['Digital Product Passport', 'Battery Passport', 'Interoperability', 'DPP'],
    blocks: [
      {
        type: 'paragraph',
        content: 'Interoperability rarely gets the spotlight.'
      },
      {
        type: 'paragraph',
        content: 'It sits beneath regulation, technology, and industry collaboration. When it works, ecosystems scale quietly. When it does not, fragmentation becomes visible very quickly.'
      },
      {
        type: 'paragraph',
        content: 'Europe has already lived through one large interoperability journey with traffic data. Today, it is entering another one with Digital Product Passports and Digital Battery Passports.'
      },
      {
        type: 'paragraph',
        content: 'The regulations are advancing. The pilots are running. The standards are being written. The central question is how interoperability will take shape.'
      },
      { type: 'divider' },
      {
        type: 'heading2',
        content: 'Europe Has Solved Interoperability Before'
      },
      {
        type: 'paragraph',
        content: 'Before intelligent transport systems became reliable across borders, traffic data in Europe was fragmented. An accident described in one country\'s system might not look the same in another. Location formats differed. Message structures were inconsistent.'
      },
      {
        type: 'paragraph',
        content: 'Over time, Europe converged on a shared framework: DATEX II. Standardized under the EN 16157 series within CEN, DATEX II provides a common information model and structured exchange formats for traffic and travel information.'
      },
      {
        type: 'paragraph',
        content: 'What made DATEX II effective was not only XML. It was shared semantics. The standard defined what an incident is, how validity periods work, how updates are handled, and how locations are referenced. National Access Points under the EU ITS framework rely heavily on DATEX II to ensure harmonized data exchange.'
      },
      {
        type: 'quote',
        content: 'Europe did not remove complexity. It organized it into a common language.'
      },
      { type: 'divider' },
      {
        type: 'heading2',
        content: 'A New Layer of Regulation: Digital Product Passports'
      },
      {
        type: 'paragraph',
        content: 'Today, Europe is building a similar digital foundation for products. The Ecodesign for Sustainable Products Regulation (EU 2024/1781) introduces the concept of a Digital Product Passport — a structured digital record containing relevant product information to support sustainability, circularity, and compliance. Detailed requirements will be specified through delegated acts for different product groups.'
      },
      {
        type: 'paragraph',
        content: 'For batteries, the EU Battery Regulation (EU 2023/1542) introduces sustainability, carbon footprint, due diligence, and performance requirements, including a battery passport for certain categories.'
      },
      {
        type: 'paragraph',
        content: 'Unlike traffic, which is a single domain, product passports will span multiple industries. Each product group brings different data attributes, lifecycle stages, actors, and compliance requirements. Interoperability therefore becomes central from the beginning.'
      },
      { type: 'divider' },
      {
        type: 'heading2',
        content: 'Standardization Is Underway'
      },
      {
        type: 'paragraph',
        content: 'To support harmonization, the European Commission issued a standardization request to CEN, CENELEC, and ETSI. CEN and CENELEC have established Joint Technical Committee 24 (JTC 24) dedicated to Digital Product Passport standards. This committee is developing the framework and system standards intended to support interoperability across product categories — mirroring how DATEX II was anchored within European standardization structures.'
      },
      { type: 'divider' },
      {
        type: 'heading2',
        content: 'The CIRPASS Architecture: A Federated Model'
      },
      {
        type: 'paragraph',
        content: 'In parallel with formal standards work, the EU-funded CIRPASS project has developed a reference architecture for Digital Product Passports. The architecture does not describe a single centralized passport database. Instead, it outlines a distributed model where data may reside across different actors while remaining discoverable and accessible through standardized interfaces.'
      },
      {
        type: 'paragraph',
        content: 'This layered structure reflects technical interoperability, semantic interoperability, and governance layers working together — echoing the architectural discipline that underpinned DATEX II.'
      },
      { type: 'divider' },
      {
        type: 'heading2',
        content: 'Identity and Resolution'
      },
      {
        type: 'paragraph',
        content: 'Reliable product identification is foundational. GS1 standards, particularly GS1 Digital Link, provide mechanisms for encoding globally unique product identifiers into web-compatible formats, typically represented via QR codes.'
      },
      {
        type: 'paragraph',
        content: 'Within the DPP architecture, the Product UID connects physical products to digital records via resolvers and registries. In traffic systems, location referencing was one of the most complex interoperability challenges. In product passports, identity resolution plays a similarly foundational role.'
      },
      { type: 'divider' },
      {
        type: 'heading2',
        content: 'Battery-Specific Developments'
      },
      {
        type: 'paragraph',
        content: 'Battery passports add sector-specific complexity. The Battery Pass initiative has published technical and content guidance aligned with the EU Battery Regulation. At a global level, the Global Battery Alliance has developed rulebooks addressing greenhouse gas accounting and sustainability metrics for batteries.'
      },
      {
        type: 'paragraph',
        content: 'Industry ecosystems such as Catena-X are also building interoperable data exchange frameworks that include Digital Product Passport use cases within automotive and battery supply chains. These initiatives contribute to semantic consistency and implementation experience across industries.'
      },
      { type: 'divider' },
      {
        type: 'heading2',
        content: 'Two European Interoperability Journeys'
      },
      {
        type: 'paragraph',
        content: 'Looking at the DATEX II architecture alongside the CIRPASS DPP architecture reveals something interesting. Both show clearly defined modeling methodologies, layered architectures, defined roles and actors, structured data formats, exchange mechanisms, and governance embedded into technical design.'
      },
      {
        type: 'paragraph',
        content: 'One ecosystem is mature and operational across Member States. The other is regulated, architected, and actively being standardized. In both cases, interoperability is not an afterthought — it is the enabling layer.'
      },
      { type: 'divider' },
      {
        type: 'heading2',
        content: 'An Ongoing European Standardization Story'
      },
      {
        type: 'paragraph',
        content: 'Digital Product Passports and Battery Passports are entering implementation phases across industries. Regulation is in place. Standardization is progressing. Architecture frameworks exist. Industry consortia are building complementary infrastructure.'
      },
      {
        type: 'paragraph',
        content: 'What remains to be shaped is how coherently these layers converge into a seamless interoperability framework across the European market. Europe\'s experience with DATEX II demonstrates that shared semantics and structured architecture can enable cross-border digital ecosystems.'
      },
      {
        type: 'quote',
        content: 'Interoperability is once again at the center of it. The foundation is being laid. The evolution is underway.'
      }
    ]
  },
  {
    slug: 'what-actually-goes-into-a-digital-product-passport',
    title: 'What Actually Goes Into a Digital Product Passport?',
    subtitle: 'Moving beyond the simplified picture — a look at the real data structure of a DPP.',
    date: 'April 3, 2026',
    readTime: '5 min read',
    description: 'When people talk about the Digital Product Passport, the image is usually simple. But a DPP is not a flat dataset — it is a multi-layered structure with different audiences and levels of access. Here is what it actually contains.',
    tags: ['Digital Product Passport', 'Battery Passport', 'ESPR', 'Circular Economy'],
    blocks: [
      {
        type: 'paragraph',
        content: 'When people talk about the Digital Product Passport, the image is usually simple.'
      },
      {
        type: 'paragraph',
        content: 'A QR code on a product. Scan it, get information. Clean, straightforward, solved.'
      },
      {
        type: 'paragraph',
        content: 'But once you start looking at what the EU Battery Regulation actually requires — and what the ESPR delegated acts are beginning to specify for other product categories — the picture becomes more complex. And more interesting.'
      },
      { type: 'divider' },
      {
        type: 'heading2',
        content: 'A Concept Defined, but Not Fully Filled'
      },
      {
        type: 'paragraph',
        content: 'The Ecodesign for Sustainable Products Regulation (EU 2024/1781) introduces the Digital Product Passport as a concept. It defines what a DPP must be at a high level — a structured digital record carrying information relevant to sustainability, circularity, and compliance across a product\'s lifecycle.'
      },
      {
        type: 'paragraph',
        content: 'But the detailed data requirements — what specific attributes must be included, in what format, with what verification level — are left to delegated acts. These are product-category-specific regulations that the European Commission issues over time.'
      },
      {
        type: 'paragraph',
        content: 'Batteries are the most advanced. The EU Battery Regulation (EU 2023/1542) specifies concrete data requirements across several dimensions: carbon footprint, state of health, material composition, supply chain due diligence, and more.'
      },
      { type: 'divider' },
      {
        type: 'heading2',
        content: 'From Concept to Structure: How Data Is Organized'
      },
      {
        type: 'paragraph',
        content: 'The battery passport shows that a DPP is not a single flat dataset. It is a multi-layered structure with different audiences and levels of access.'
      },
      {
        type: 'paragraph',
        content: 'Think of it in three tiers. Public data — available to any consumer who scans the QR code — covers basic product information, general sustainability indicators, and carbon footprint declarations. This layer is designed for transparency.'
      },
      {
        type: 'paragraph',
        content: 'The second tier is accessible to parties with legitimate interest: recyclers, repairers, authorized service providers. This layer contains more detailed technical data — material composition, disassembly instructions, component-level information that supports circular economy activities.'
      },
      {
        type: 'paragraph',
        content: 'The third tier is reserved for regulatory authorities. It includes the full audit trail, verification records, and sensitive supply chain data that regulators need for enforcement but that should not be publicly exposed.'
      },
      { type: 'divider' },
      {
        type: 'heading2',
        content: 'Why This Architecture Matters'
      },
      {
        type: 'paragraph',
        content: 'This tiered structure is not an implementation detail. It is a fundamental design requirement that shapes how DPP systems must be built.'
      },
      {
        type: 'paragraph',
        content: 'A system that treats all DPP data as equally public defeats the purpose. A system that locks everything behind authority access makes transparency impossible. The architecture has to hold these tensions in balance.'
      },
      {
        type: 'paragraph',
        content: 'This is why identity and access management, cryptographic verification, and data residency decisions are not peripheral concerns for DPP implementation. They are central to whether the system actually works as intended.'
      },
      { type: 'divider' },
      {
        type: 'heading2',
        content: 'What Changes as More Product Categories Are Added'
      },
      {
        type: 'paragraph',
        content: 'As delegated acts are issued for textiles, electronics, furniture, and other product categories, the same structural logic applies — but the specific data attributes differ significantly per category.'
      },
      {
        type: 'paragraph',
        content: 'A textile passport has different lifecycle stages, different actors with legitimate interest, and different sustainability metrics than a battery passport. The framework is consistent; the content is not.'
      },
      {
        type: 'paragraph',
        content: 'This is the challenge that interoperability frameworks, semantic standards, and common data models are trying to address. The goal is a system where the underlying architecture is shared, even as the data payloads vary by product type.'
      },
      { type: 'divider' },
      {
        type: 'heading2',
        content: 'From Data Requirements to Implementation'
      },
      {
        type: 'paragraph',
        content: 'For companies preparing for DPP compliance, the immediate practical question is: what data do we need to collect, verify, and store — and in what form?'
      },
      {
        type: 'paragraph',
        content: 'The answer requires working backwards from the regulatory requirements to the data sources: ERP systems, supply chain partners, testing labs, certification bodies. Each data attribute in the passport has to come from somewhere, with some level of verification.'
      },
      {
        type: 'quote',
        content: 'A DPP is not a document you produce once. It is a living record that evolves across the product\'s lifecycle — updated at manufacture, at sale, at repair, at end of life.'
      },
      {
        type: 'paragraph',
        content: 'That is what makes it genuinely different from a compliance report. And it is what makes getting the architecture right so important from the start.'
      }
    ]
  },
  {
    slug: 'from-human-passports-to-product-passports',
    title: 'From Human Passports to Product Passports: Understanding DPP and Battery Passports',
    subtitle: 'A familiar object helps explain an unfamiliar concept.',
    date: 'April 8, 2026',
    readTime: '4 min read',
    description: 'A passport does two things. It establishes identity and carries verified information about the holder. The same logic underpins the Digital Product Passport — and understanding that analogy makes the regulation much easier to grasp.',
    tags: ['Digital Product Passport', 'Battery Passport', 'ESPR', 'EU Regulation'],
    blocks: [
      {
        type: 'paragraph',
        content: 'A passport does two things.'
      },
      {
        type: 'paragraph',
        content: 'It establishes identity. And it carries verified information about the holder — nationality, travel history, biometrics — information that different authorities can read and trust.'
      },
      {
        type: 'paragraph',
        content: 'That analogy is a useful starting point for understanding what Europe is building with Digital Product Passports and Digital Battery Passports.'
      },
      { type: 'divider' },
      {
        type: 'heading2',
        content: 'The Identity Layer'
      },
      {
        type: 'paragraph',
        content: 'Every product that requires a Digital Product Passport needs a unique identifier — the equivalent of a passport number. This identifier connects the physical object to its digital record.'
      },
      {
        type: 'paragraph',
        content: 'In practice, this is often a QR code or RFID tag carrying a globally unique product identifier, typically built on GS1 Digital Link standards. Scan the code, and you are connected to the product\'s digital record.'
      },
      {
        type: 'paragraph',
        content: 'The identifier has to be durable, globally unique, and resolvable — meaning the system can find the right digital record from the identifier, wherever that record is stored. This is the identity resolution challenge, and it is not trivial at scale.'
      },
      { type: 'divider' },
      {
        type: 'heading2',
        content: 'The Information Layer'
      },
      {
        type: 'paragraph',
        content: 'A human passport carries information that different actors read for different purposes. Border control checks nationality and validity. Banks verify identity. Employers confirm right to work.'
      },
      {
        type: 'paragraph',
        content: 'A Digital Product Passport works similarly. Consumers scan to see sustainability information. Recyclers access detailed material composition. Regulators audit the full compliance trail. Each actor has a defined level of access to different parts of the record.'
      },
      {
        type: 'paragraph',
        content: 'This tiered access model is built into the regulation. The EU Battery Regulation (EU 2023/1542) explicitly distinguishes between data available to the public, data available to parties with legitimate interest, and data available to market surveillance authorities.'
      },
      { type: 'divider' },
      {
        type: 'heading2',
        content: 'Two Regulations, Two Scopes'
      },
      {
        type: 'paragraph',
        content: 'It is worth being clear about the two regulatory frameworks in play, because they are often conflated.'
      },
      {
        type: 'paragraph',
        content: 'The Ecodesign for Sustainable Products Regulation (EU 2024/1781) — ESPR — establishes the Digital Product Passport concept and framework. It applies to a broad range of product categories. The specific data requirements for each category will be defined through delegated acts issued over time.'
      },
      {
        type: 'paragraph',
        content: 'The EU Battery Regulation (EU 2023/1542) is more specific. It introduces the Digital Battery Passport for electric vehicle batteries, light transport batteries, and industrial batteries above certain capacity thresholds. The data requirements are already defined in detail — carbon footprint, state of health, material composition, supply chain due diligence, and more.'
      },
      {
        type: 'quote',
        content: 'The Battery Regulation is the most concrete implementation of the DPP concept to date. It is the clearest picture of what the ESPR framework will look like once delegated acts are issued for other product categories.'
      },
      { type: 'divider' },
      {
        type: 'heading2',
        content: 'What This Means for Companies'
      },
      {
        type: 'paragraph',
        content: 'For companies in battery manufacturing, electric vehicles, or battery supply chains, the Digital Battery Passport is a live compliance requirement with defined timelines. For companies in other sectors, the ESPR delegated acts process is the relevant thing to track.'
      },
      {
        type: 'paragraph',
        content: 'In both cases, the preparation is similar: understanding what data attributes will be required, mapping those requirements to existing data sources, and building the systems to collect, verify, and maintain that data across the product lifecycle.'
      },
      {
        type: 'paragraph',
        content: 'The passport analogy holds throughout. A passport is not a one-time document. It gets updated, renewed, stamped with new information. A Digital Product Passport is the same — a living record, not a static compliance report.'
      },
      { type: 'divider' },
      {
        type: 'heading2',
        content: 'A Foundation Worth Building Properly'
      },
      {
        type: 'paragraph',
        content: 'The Digital Product Passport concept is straightforward. The implementation is not. Identity resolution, tiered access control, data verification, lifecycle updates, system integration — these are substantial engineering and operational challenges.'
      },
      {
        type: 'paragraph',
        content: 'But the analogy to a human passport is more than illustrative. It captures something true about what these systems need to do: establish trustworthy identity, carry verified information, and serve different actors with different needs — reliably, at scale, across borders.'
      },
      {
        type: 'quote',
        content: 'Getting the foundation right matters. Because once products start carrying passports, the systems that issue, store, and resolve them become critical infrastructure.'
      }
    ]
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}
