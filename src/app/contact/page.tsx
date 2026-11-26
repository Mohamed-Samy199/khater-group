import type { Metadata } from 'next';
import contactBanner from '@/assets/banners/contact.jpg';
import JsonLd from '@/components/atoms/JsonLd';
import PageBanner from '@/components/molecules/PageBanner';
import ContactFaq from '@/components/organisms/contact/ContactFaq';
import ContactFormSection from '@/components/organisms/contact/ContactFormSection';
import ContactLocations from '@/components/organisms/contact/ContactLocations';
import ContactQuickCards from '@/components/organisms/contact/ContactQuickCards';
import { CONTACT_FAQS } from '@/constants/contactData';
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Contact Khater Group in Cairo or Jeddah to discuss RFPs, turnkey sports stadiums, playgrounds, landscape masterplans, arena electronics, or Olympic swimming pools.',
  path: '/contact',
  keywords: [
    'Contact Khater Group',
    'Khater Group Cairo Nasr City',
    'Khater Group Jeddah',
    'RFP sports infrastructure Egypt',
  ],
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/eg' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <JsonLd data={faqJsonLd(CONTACT_FAQS)} />

      <PageBanner
        image={contactBanner}
        eyebrow="Get in Touch"
        title="Start a Conversation with Khater Group"
        description="Whether planning an Olympic sports arena, municipal park, commercial aquatic center, or turnkey landscape, our engineering leadership is ready to collaborate."
        breadcrumbs={[{ label: 'Home', to: '/eg' }, { label: 'Contact' }]}
        height="md"
        grayscale={false}
      />

      <ContactQuickCards />
      <ContactFormSection />
      <ContactLocations />
      <ContactFaq />
    </div>
  );
}
