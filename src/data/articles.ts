export type BlockType =
  | 'paragraph'
  | 'heading2'
  | 'heading3'
  | 'quote'
  | 'divider'
  | 'bullet-list'
  | 'image'
  | 'link-ref';

export interface InlineLink {
  text: string;
  url: string;
}

export interface ArticleBlock {
  type: BlockType;
  content?: string;
  items?: string[];
  src?: string;
  caption?: string;
  label?: string;
  url?: string;
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  description: string;
  tags: string[];
  heroImage?: string;
  blocks: ArticleBlock[];
}

export const articles: Article[] = [
  {
    slug: 'from-human-passports-to-product-passports',
    title: 'From Human Passports to Product Passports: Understanding DPP and Battery Passports',
    subtitle: 'Not a metaphor, but a structure — how identity, validation, lifecycle, and access translate from people to products.',
    date: 'April 8, 2026',
    readTime: '5 min read',
    description: 'A passport does two things — it proves identity and connects that identity to rules, checks, and records over time. That makes it a useful way to understand what Europe is building with Digital Product Passports and battery passports.',
    tags: ['Digital Product Passport', 'Battery Passport', 'ESPR', 'EU Regulation'],
    heroImage: 'https://cdn-images-1.medium.com/max/1024/1*2HF_6lmphxKJU2DzevIjqg.png',
    blocks: [
      { type: 'paragraph', content: 'A passport does two things.' },
      { type: 'paragraph', content: 'It proves identity, and it connects that identity to a system of rules, checks, and records over time.' },
      { type: 'paragraph', content: 'That makes it a useful way to understand what Europe is building with Digital Product Passports and battery passports.' },
      {
        type: 'image',
        src: 'https://cdn-images-1.medium.com/max/1024/1*2HF_6lmphxKJU2DzevIjqg.png',
        caption: 'Human Passport vs Digital Product Passport — A simplified comparison showing how identity, validation, lifecycle, and access concepts translate from people to products.'
      },
      { type: 'paragraph', content: 'Not as a metaphor, but as a structure.' },
      { type: 'paragraph', content: 'Because what is emerging is not just a digital label. It is a system for identity, validation, access, and lifecycle information.' },
      { type: 'heading3', content: 'Identity: Where It Starts' },
      { type: 'paragraph', content: 'A human passport begins with identity.' },
      { type: 'paragraph', content: 'Name, nationality, date of birth, and a passport number create a unique reference.' },
      { type: 'paragraph', content: 'In the DPP framework, this role is played by a unique product identifier.' },
      { type: 'paragraph', content: 'Under the Ecodesign for Sustainable Products Regulation (EU 2024/1781), each passport is linked to a persistent identifier, accessible through a data carrier such as a QR code.' },
      { type: 'paragraph', content: 'This identifier is what allows product information to be:' },
      { type: 'bullet-list', items: ['connected across systems', 'accessed by different actors', 'reused over time'] },
      { type: 'paragraph', content: 'Without it, there is no passport.' },
      { type: 'heading3', content: 'Issuance: Not a Document, but a Framework' },
      { type: 'paragraph', content: 'A human passport is issued by a state.' },
      { type: 'paragraph', content: 'A Digital Product Passport is created within a framework.' },
      { type: 'paragraph', content: 'The regulation defines the structure. Product-specific rules define the content.' },
      { type: 'paragraph', content: 'There is no single template for all products. Instead, the passport is defined progressively, depending on the product group and its requirements.' },
      { type: 'paragraph', content: 'What looks like a simple QR code is backed by:' },
      { type: 'bullet-list', items: ['identifiers', 'structured data', 'system components such as registries and access layers'] },
      { type: 'heading3', content: 'Validation: Trust Is Built Into the System' },
      { type: 'paragraph', content: 'A passport only works if it can be trusted.' },
      { type: 'paragraph', content: 'That same requirement appears in the DPP framework.' },
      { type: 'paragraph', content: 'The regulation requires passport data to be:' },
      { type: 'bullet-list', items: ['accurate', 'complete', 'up to date', 'machine-readable'] },
      { type: 'paragraph', content: 'The methodology developed by the European Commission\u2019s Joint Research Centre adds another dimension.' },
      { type: 'paragraph', content: 'Data is not selected arbitrarily. It is derived from:' },
      { type: 'bullet-list', items: ['policy objectives', 'use cases', 'feasibility', 'access rules'] },
      { type: 'paragraph', content: 'This creates a structured way to decide what belongs in a passport.' },
      { type: 'heading3', content: 'Lifecycle: More Than a Static Record' },
      { type: 'paragraph', content: 'A passport is issued once, but used over time.' },
      { type: 'paragraph', content: 'The same applies here.' },
      { type: 'paragraph', content: 'A Digital Product Passport is not a fixed snapshot. It is connected to the product lifecycle, including:' },
      { type: 'bullet-list', items: ['manufacturing', 'use', 'maintenance', 'repair', 'end-of-life handling'] },
      { type: 'paragraph', content: 'The JRC framework explicitly considers when data is updated, who updates it, and how it remains usable over time.' },
      { type: 'heading3', content: 'The Battery Passport: A Concrete Example' },
      { type: 'paragraph', content: 'The battery passport under Regulation (EU) 2023/1542 is the clearest implementation so far.' },
      { type: 'paragraph', content: 'From 2027, certain batteries must carry a digital passport with defined data categories.' },
      { type: 'paragraph', content: 'These include:' },
      { type: 'bullet-list', items: ['material composition', 'carbon footprint', 'recycled content', 'performance and durability', 'safety and compliance'] },
      { type: 'paragraph', content: 'It also introduces layered access.' },
      { type: 'paragraph', content: 'Some data is public. Some is restricted to authorities and specific actors.' },
      { type: 'paragraph', content: 'This makes the passport a structured record, not just a label.' },
      { type: 'heading3', content: 'Access and Granularity' },
      { type: 'paragraph', content: 'A human passport belongs to one person.' },
      { type: 'paragraph', content: 'A product passport can apply at different levels.' },
      { type: 'paragraph', content: 'The regulation allows data to be linked to:' },
      { type: 'bullet-list', items: ['a product model', 'a batch', 'or an individual item'] },
      { type: 'paragraph', content: 'The battery passport combines these levels, linking general product data with individual lifecycle information.' },
      { type: 'paragraph', content: 'Access is also controlled.' },
      { type: 'paragraph', content: 'Different actors see different parts of the passport, depending on their role.' },
      { type: 'heading3', content: 'End of Life: Still Within Scope' },
      { type: 'paragraph', content: 'A passport expires.' },
      { type: 'paragraph', content: 'A product passport does not expire in the same way, but it remains relevant beyond use.' },
      { type: 'paragraph', content: 'Both the DPP framework and the battery regulation connect passport data to:' },
      { type: 'bullet-list', items: ['reuse', 'recycling', 'material recovery'] },
      { type: 'paragraph', content: 'The passport continues to function even when the product reaches the end of its lifecycle.' },
      { type: 'heading3', content: 'A System, Not a Label' },
      { type: 'paragraph', content: 'Seen this way, the term \u201Cpassport\u201D becomes more precise.' },
      { type: 'paragraph', content: 'It is not just a way to display information.' },
      { type: 'paragraph', content: 'It is a way to:' },
      { type: 'bullet-list', items: ['identify a product', 'structure its data', 'control access', 'maintain information over time'] },
      { type: 'paragraph', content: 'The battery passport shows how detailed this can become. The broader DPP framework is still being defined.' },
      { type: 'paragraph', content: 'But the structure is already visible.' }
    ]
  },
  {
    slug: 'what-actually-goes-into-a-digital-product-passport',
    title: 'What Actually Goes Into a Digital Product Passport?',
    subtitle: 'The real question is not the QR code. The real question is what sits behind it.',
    date: 'April 3, 2026',
    readTime: '6 min read',
    description: 'When people talk about the Digital Product Passport, the image is usually simple — a QR code, a scan, some information on a screen. But a DPP is a structured, validated, multi-layered dataset. Here is what actually goes into it.',
    tags: ['Digital Product Passport', 'Digital Battery Passport', 'ESPR', 'CIRPASS', 'JRC'],
    heroImage: 'https://cdn-images-1.medium.com/max/1024/1*w00IwG6upKB7Mt48LxD9GQ.png',
    blocks: [
      { type: 'paragraph', content: 'When people talk about the Digital Product Passport, the image is usually simple.' },
      { type: 'paragraph', content: 'A QR code on a product. A scan. Some information on a screen.' },
      { type: 'paragraph', content: 'But the real question is not the QR code. The real question is what sits behind it.' },
      { type: 'heading3', content: 'A Concept Defined, but Not Fully Filled' },
      { type: 'paragraph', content: 'The Digital Product Passport (DPP) is introduced under the Ecodesign for Sustainable Products Regulation (EU 2024/1781).' },
      { type: 'link-ref', label: 'EU Regulation 2024/1781 (ESPR)', url: 'https://eur-lex.europa.eu/eli/reg/2024/1781/oj' },
      { type: 'paragraph', content: 'The regulation defines the DPP as a structured digital record containing relevant product information to support sustainability, circularity, and compliance.' },
      { type: 'paragraph', content: 'But it does not define a fixed dataset.' },
      { type: 'paragraph', content: 'Instead, it sets principles:' },
      {
        type: 'bullet-list',
        items: [
          'Data must be accurate, complete, and up to date',
          'It must be linked to a unique product identifier',
          'It must be accessible via a data carrier (for example, a QR code)',
          'It must use open, interoperable formats',
          'It may apply at model, batch, or item level'
        ]
      },
      { type: 'paragraph', content: 'What goes into the passport is not defined once, but determined later for each product group.' },
      { type: 'heading3', content: 'From Concept to Structure: How Data Is Organized' },
      { type: 'paragraph', content: 'To understand how this information might be structured, the CIRPASS project provides a useful reference.' },
      {
        type: 'image',
        src: 'https://cdn-images-1.medium.com/max/1024/1*w00IwG6upKB7Mt48LxD9GQ.png',
        caption: 'CIRPASS architecture diagram'
      },
      { type: 'link-ref', label: 'CIRPASS Project', url: 'https://cirpassproject.eu/' },
      { type: 'link-ref', label: 'CIRPASS DPP System Architecture (D3.2)', url: 'https://cirpassproject.eu/wp-content/uploads/2024/04/D3.2-DPP-System-Architecture.pdf' },
      { type: 'paragraph', content: 'CIRPASS describes the DPP as:' },
      {
        type: 'bullet-list',
        items: [
          'A structured dataset',
          'Linked to a product through a unique identifier',
          'Accessible via digital resolution mechanisms',
          'Managed across distributed systems'
        ]
      },
      { type: 'paragraph', content: 'Its architecture introduces several key elements:' },
      {
        type: 'bullet-list',
        items: [
          'Product UID and URI transformation',
          'Registry and resolver layers',
          'Decentralized data repositories',
          'Validation mechanisms',
          'Structured data representation using JSON-LD'
        ]
      },
      { type: 'paragraph', content: 'The architecture also introduces validation concepts such as SHACL, allowing data to be checked against predefined rules.' },
      { type: 'paragraph', content: 'This shows that the passport is not just a collection of fields. It is a structured, validated, and interoperable dataset.' },
      { type: 'heading3', content: 'Deciding What Data Belongs: The JRC Methodology' },
      {
        type: 'image',
        src: 'https://cdn-images-1.medium.com/max/1024/1*w2VpUB12xjapsT0jdlznNQ.png',
        caption: 'JRC methodology'
      },
      { type: 'paragraph', content: 'A key development in 2026 came from the European Commission\u2019s Joint Research Centre (JRC).' },
      { type: 'link-ref', label: 'JRC Methodology for DPP Data Requirements', url: 'https://publications.jrc.ec.europa.eu/repository/handle/JRC145830' },
      { type: 'paragraph', content: 'Instead of starting with predefined fields, the methodology proposes a structured way to decide what data should be included.' },
      { type: 'paragraph', content: 'It suggests that DPP data should be selected based on:' },
      {
        type: 'bullet-list',
        items: ['Policy objectives', 'Use cases', 'Data availability', 'Feasibility', 'Access rights']
      },
      { type: 'paragraph', content: 'It also introduces categorization such as:' },
      { type: 'bullet-list', items: ['Essential data', 'Recommended data', 'Optional data'] },
      { type: 'paragraph', content: 'This adds an important layer to the DPP discussion.' },
      { type: 'paragraph', content: 'The passport is not only about structure. It is also about how data is selected and justified.' },
      { type: 'heading3', content: 'A Concrete Example: The Battery Passport' },
      { type: 'paragraph', content: 'The most detailed example available today comes from the EU Battery Regulation (EU 2023/1542).' },
      { type: 'link-ref', label: 'Regulation - 2023/1542 - EN - EUR-Lex', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1542' },
      {
        type: 'image',
        src: 'https://cdn-images-1.medium.com/max/1024/1*r5BJS8PVP22wSHN1XVV8Fw.png',
        caption: 'Battery Passport model'
      },
      { type: 'paragraph', content: 'From 2027, certain batteries placed on the EU market must have a battery passport.' },
      { type: 'paragraph', content: 'The regulation defines specific data categories, including:' },
      {
        type: 'bullet-list',
        items: [
          'Material composition and chemistry',
          'Carbon footprint',
          'Recycled content',
          'Performance and durability metrics',
          'Responsible sourcing information',
          'Safety and compliance data'
        ]
      },
      { type: 'paragraph', content: 'It also introduces a layered access model:' },
      {
        type: 'bullet-list',
        items: [
          'Publicly accessible information',
          'Restricted data for authorities and operators',
          'Detailed lifecycle and performance data'
        ]
      },
      { type: 'paragraph', content: 'The battery passport shows that a DPP is not a single flat dataset. It is a multi-layered structure with different audiences and levels of detail.' },
      { type: 'heading3', content: 'Multiple Layers, Not One Definition' },
      { type: 'paragraph', content: 'Across these sources, a consistent pattern appears.' },
      { type: 'paragraph', content: 'Different actors define different parts of the passport:' },
      {
        type: 'bullet-list',
        items: [
          'The regulation defines the framework and principles',
          'Product-specific rules define required data categories',
          'The JRC defines how data should be selected',
          'CIRPASS defines how data is structured and validated',
          'Sector regulations like the battery passport show how it works in practice'
        ]
      },
      { type: 'paragraph', content: 'Each layer contributes to the overall shape of the DPP.' },
      { type: 'heading3', content: 'A Structured but Evolving System' },
      { type: 'paragraph', content: 'The Digital Product Passport is often described as a single concept.' },
      { type: 'paragraph', content: 'In practice, it is a combination of:' },
      {
        type: 'bullet-list',
        items: [
          'Legal requirements',
          'Data selection methodologies',
          'Structured data models',
          'Validation mechanisms',
          'Access control rules',
          'Product-specific implementations'
        ]
      },
      { type: 'paragraph', content: 'The battery passport provides one of the first detailed examples.' },
      { type: 'paragraph', content: 'Other product groups will follow with their own specifications.' },
      { type: 'heading3', content: 'Sources' },
      { type: 'link-ref', label: 'Ecodesign for Sustainable Products Regulation (EU 2024/1781)', url: 'https://eur-lex.europa.eu/eli/reg/2024/1781/oj' },
      { type: 'link-ref', label: 'JRC Methodology for DPP Data Requirements', url: 'https://publications.jrc.ec.europa.eu/repository/handle/JRC145830' },
      { type: 'link-ref', label: 'CIRPASS DPP System Architecture (D3.2)', url: 'https://cirpassproject.eu/wp-content/uploads/2024/04/D3.2-DPP-System-Architecture.pdf' },
      { type: 'link-ref', label: 'EU Battery Regulation (EU 2023/1542)', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1542' }
    ]
  },
  {
    slug: 'interoperability-main-challenge-digital-product-passport',
    title: 'Interoperability: The Main Challenge for a Digital Product Passport System',
    subtitle: 'How Europe has solved this kind of challenge before \u2014 and what it means for DPP.',
    date: 'February 15, 2026',
    readTime: '6 min read',
    description: 'Interoperability rarely gets the spotlight. But it sits beneath regulation, technology, and industry collaboration. Europe has already solved this once with traffic data. Today, it is entering another interoperability journey with Digital Product Passports.',
    tags: ['Digital Product Passport', 'Battery Passport', 'Interoperability', 'DBP', 'DPP 4 Industry'],
    heroImage: 'https://cdn-images-1.medium.com/max/1024/1*NKomuOY9AcloykIbMJxNfA.png',
    blocks: [
      { type: 'paragraph', content: 'Interoperability rarely gets the spotlight.' },
      { type: 'paragraph', content: 'It sits beneath regulation, technology, and industry collaboration. When it works, ecosystems scale quietly. When it does not, fragmentation becomes visible very quickly.' },
      { type: 'paragraph', content: 'Europe has already lived through one large interoperability journey with traffic data. Today, it is entering another one with Digital Product Passports and Digital Battery Passports.' },
      { type: 'paragraph', content: 'The regulations are advancing. The pilots are running. The standards are being written.' },
      { type: 'paragraph', content: 'The central question is how interoperability will take shape.' },
      { type: 'heading3', content: 'Europe Has Solved Interoperability Before' },
      { type: 'paragraph', content: 'Before intelligent transport systems became reliable across borders, traffic data in Europe was fragmented. An accident described in one country\u2019s system might not look the same in another. Location formats differed. Message structures were inconsistent.' },
      { type: 'paragraph', content: 'Over time, Europe converged on a shared framework: DATEX II.' },
      { type: 'link-ref', label: 'DATEX II', url: 'https://datex2.eu/' },
      { type: 'paragraph', content: 'DATEX II, standardized under the EN 16157 series within CEN, provides a common information model and structured exchange formats for traffic and travel information.' },
      {
        type: 'image',
        src: 'https://cdn-images-1.medium.com/max/1024/1*NKomuOY9AcloykIbMJxNfA.png',
        caption: 'A layered architecture of reusable components'
      },
      { type: 'paragraph', content: 'What made DATEX II effective was not only XML. It was shared semantics. The standard defined what an incident is, how validity periods work, how updates are handled, and how locations are referenced.' },
      { type: 'paragraph', content: 'National Access Points under the EU ITS framework rely heavily on DATEX II to ensure harmonized data exchange:' },
      {
        type: 'image',
        src: 'https://cdn-images-1.medium.com/max/1024/1*NN7hRhxhg54N788uZP6Eiw.png'
      },
      { type: 'link-ref', label: 'EU ITS Directive and Action Plan', url: 'https://transport.ec.europa.eu/transport-themes/smart-mobility/road/its-directive-and-action-plan_en' },
      { type: 'quote', content: 'Europe did not remove complexity. It organized it into a common language.' },
      { type: 'heading3', content: 'A New Layer of Regulation: Digital Product Passports' },
      { type: 'paragraph', content: 'Today, Europe is building a similar digital foundation for products.' },
      { type: 'paragraph', content: 'The Ecodesign for Sustainable Products Regulation (EU 2024/1781) introduces the concept of a Digital Product Passport.' },
      { type: 'link-ref', label: 'Official regulation text (EU 2024/1781)', url: 'https://eur-lex.europa.eu/eli/reg/2024/1781/oj' },
      { type: 'paragraph', content: 'The DPP is defined as a structured digital record containing relevant product information to support sustainability, circularity, and compliance. Detailed requirements will be specified through delegated acts for different product groups.' },
      { type: 'paragraph', content: 'For batteries, the EU Battery Regulation (EU 2023/1542) introduces sustainability, carbon footprint, due diligence, and performance requirements, including a battery passport for certain categories.' },
      { type: 'link-ref', label: 'Official Battery Regulation (EU 2023/1542)', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1542' },
      { type: 'paragraph', content: 'Unlike traffic, which is a single domain, product passports will span multiple industries. Each product group brings different data attributes, lifecycle stages, actors, and compliance requirements.' },
      { type: 'paragraph', content: 'Interoperability therefore becomes central from the beginning.' },
      { type: 'heading3', content: 'Standardization Is Underway' },
      { type: 'paragraph', content: 'To support harmonization, the European Commission issued a standardization request to CEN, CENELEC, and ETSI.' },
      { type: 'paragraph', content: 'CEN and CENELEC have established Joint Technical Committee 24 dedicated to Digital Product Passport standards.' },
      { type: 'link-ref', label: 'CEN-CENELEC JTC 24 overview', url: 'https://www.cencenelec.eu/areas-of-work/cen-cenelec-topics/digital-product-passport/' },
      { type: 'paragraph', content: 'This committee is developing the framework and system standards intended to support interoperability across product categories.' },
      { type: 'paragraph', content: 'This mirrors how DATEX II was anchored within European standardization structures.' },
      { type: 'heading3', content: 'The CIRPASS Architecture: A Federated Model' },
      { type: 'paragraph', content: 'In parallel with formal standards work, the EU-funded CIRPASS project has developed a reference architecture for Digital Product Passports.' },
      { type: 'link-ref', label: 'CIRPASS project site', url: 'https://cirpassproject.eu/' },
      { type: 'link-ref', label: 'System Architecture Deliverable (D3.2)', url: 'https://cirpassproject.eu/wp-content/uploads/2024/04/D3.2-DPP-System-Architecture.pdf' },
      {
        type: 'image',
        src: 'https://cdn-images-1.medium.com/max/1024/1*lsgrZ3eUp-FLxZP1U_toOw.png',
        caption: 'A Product UID serving as the anchor of identity'
      },
      {
        type: 'image',
        src: 'https://cdn-images-1.medium.com/max/1024/1*XvS-YWJ4Ha2e-tf81fQaVQ.png'
      },
      { type: 'paragraph', content: 'The architecture does not describe a single centralized passport database. Instead, it outlines a distributed model where data may reside across different actors while remaining discoverable and accessible through standardized interfaces.' },
      { type: 'paragraph', content: 'This layered structure reflects technical interoperability, semantic interoperability, and governance layers working together.' },
      { type: 'paragraph', content: 'In that sense, it echoes the architectural discipline that underpinned DATEX II.' },
      { type: 'heading3', content: 'Identity and Resolution' },
      { type: 'paragraph', content: 'Reliable product identification is foundational.' },
      { type: 'paragraph', content: 'GS1 standards, particularly GS1 Digital Link, provide mechanisms for encoding globally unique product identifiers into web-compatible formats, typically represented via QR codes.' },
      { type: 'link-ref', label: 'GS1 Digital Link overview', url: 'https://www.gs1.org/standards/gs1-digital-link' },
      { type: 'paragraph', content: 'Within the DPP architecture, the Product UID connects physical products to digital records via resolvers and registries.' },
      { type: 'paragraph', content: 'In traffic systems, location referencing was one of the most complex interoperability challenges. In product passports, identity resolution plays a similarly foundational role.' },
      { type: 'heading3', content: 'Battery-Specific Developments' },
      { type: 'paragraph', content: 'Battery passports add sector-specific complexity.' },
      { type: 'paragraph', content: 'The Battery Pass initiative has published technical and content guidance aligned with the EU Battery Regulation.' },
      { type: 'link-ref', label: 'Battery Pass', url: 'https://thebatterypass.eu/' },
      { type: 'paragraph', content: 'At a global level, the Global Battery Alliance has developed rulebooks addressing greenhouse gas accounting and sustainability metrics for batteries.' },
      { type: 'link-ref', label: 'Global Battery Alliance publications', url: 'https://www.globalbattery.org/publications/' },
      { type: 'paragraph', content: 'Industry ecosystems such as Catena-X are also building interoperable data exchange frameworks that include Digital Product Passport use cases within automotive and battery supply chains.' },
      { type: 'link-ref', label: 'Catena-X Digital Product Passport use case', url: 'https://catena-x.net/en/use-cases/digital-product-passport' },
      { type: 'paragraph', content: 'These initiatives contribute to semantic consistency and implementation experience across industries.' },
      { type: 'heading3', content: 'Two European Interoperability Journeys' },
      { type: 'paragraph', content: 'Looking at the DATEX II diagrams alongside the CIRPASS DPP architecture diagrams reveals something interesting.' },
      { type: 'paragraph', content: 'Both show:' },
      {
        type: 'bullet-list',
        items: [
          'Clearly defined modeling methodologies',
          'Layered architectures',
          'Defined roles and actors',
          'Structured data formats',
          'Exchange mechanisms',
          'Governance embedded into technical design'
        ]
      },
      { type: 'paragraph', content: 'One ecosystem is mature and operational across Member States.' },
      { type: 'paragraph', content: 'The other is regulated, architected, and actively being standardized.' },
      { type: 'paragraph', content: 'In both cases, interoperability is not an afterthought. It is the enabling layer.' },
      { type: 'heading3', content: 'An Ongoing European Standardization Story' },
      { type: 'paragraph', content: 'Digital Product Passports and Battery Passports are entering implementation phases across industries. Regulation is in place. Standardization is progressing. Architecture frameworks exist. Industry consortia are building complementary infrastructure.' },
      { type: 'paragraph', content: 'What remains to be shaped is how coherently these layers converge into a seamless interoperability framework across the European market.' },
      { type: 'paragraph', content: 'Europe\u2019s experience with DATEX II demonstrates that shared semantics and structured architecture can enable cross-border digital ecosystems.' },
      { type: 'paragraph', content: 'The current DPP and DBP developments represent the next chapter in that broader European journey toward interoperable digital infrastructure.' },
      { type: 'paragraph', content: 'The foundation is being laid. The evolution is underway.' },
      { type: 'quote', content: 'Interoperability is once again at the center of it.' }
    ]
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}
