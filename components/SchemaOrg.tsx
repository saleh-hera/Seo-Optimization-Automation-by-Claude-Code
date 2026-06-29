import { Agent } from '@/lib/types';

interface ProductSchemaProps {
  agent: Agent;
}

export function ProductSchema({ agent }: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: agent.title,
    description: agent.long_description ?? agent.description,
    url: `https://aiagentsvault.tech/marketplace/${agent.slug ?? agent.id}`,
    image: agent.thumbnail_url ?? undefined,
    brand: {
      '@type': 'Brand',
      name: 'AI Agents Vault',
    },
    offers: {
      '@type': 'Offer',
      price: agent.subscription_price ?? agent.price,
      priceCurrency: 'USD',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      url: agent.payment_url ?? `https://aiagentsvault.tech/marketplace/${agent.slug ?? agent.id}`,
    },
    aggregateRating: agent.review_count > 0
      ? {
          '@type': 'AggregateRating',
          ratingValue: agent.rating,
          reviewCount: agent.review_count,
          bestRating: 5,
          worstRating: 1,
        }
      : undefined,
    dateModified: agent.updated_at,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AI Agents Vault',
    url: 'https://aiagentsvault.tech',
    logo: 'https://aiagentsvault.tech/logo.png',
    description:
      'AI Agents Vault is a marketplace where businesses can browse, demo, and subscribe to ready-made AI voice agents. Each agent handles real phone calls 24/7, powered by GPT-4o and built on Vapi.',
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      url: 'https://aiagentsvault.tech',
    },
    sameAs: ['https://github.com/saleh-hera/aiagentsvaultwebsite'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AI Agents Vault',
    url: 'https://aiagentsvault.tech',
    description: 'The marketplace for ready-made AI voice agents. Browse, demo, and subscribe starting at $179/month.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://aiagentsvault.tech/marketplace?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
