import { ArrowUpRight, Clock, FileText, MapPin, MessageSquare, Phone } from 'lucide-react';

const QUICK_CARDS = [
  {
    id: 'cairo',
    tag: 'Headquarters',
    title: 'Cairo Central Hub',
    description: 'Namaa Building, Ramsis Ext. St., Nasr City, Cairo, Egypt',
    phone: '+20 100 120 4191',
    phoneHref: 'tel:+201001204191',
    secondaryPhone: '02-2346120/1/2/3',
    email: 'info@khatersports.com',
    hours: 'Sun – Thu: 8:30 AM – 4:30 PM',
    actionText: 'View on Map',
    actionHref: '#locations',
    isExternal: false,
    icon: MapPin,
  },
  {
    id: 'jeddah',
    tag: 'Regional Office',
    title: 'Jeddah KSA Hub',
    description: '3729 Khalid Ibn Luai 7480, Jeddah, Saudi Arabia',
    phone: '+20 100 120 4191',
    phoneHref: 'tel:+201001204191',
    secondaryPhone: 'Sun – Thu: 8:30 AM – 4:30 PM',
    email: 'info@khatersports.com',
    hours: 'Sun – Thu: 8:30 AM – 4:30 PM',
    actionText: 'View on Map',
    actionHref: '#locations',
    isExternal: false,
    icon: MapPin,
  },
  {
    id: 'whatsapp',
    tag: 'Instant Channel',
    title: 'WhatsApp Concierge',
    description: 'Instant technical & commercial inquiry with our project management team.',
    phone: '+20 100 120 4191',
    phoneHref: 'https://wa.me/201001204191?text=Hello%20Khater%20Group,%20I%20would%20like%20to%20inquire%20about%20a%20project.',
    secondaryPhone: 'Sunday – Thursday: 8:30 – 4:30',
    email: 'info@khatersports.com',
    hours: 'Fast Response Time',
    actionText: 'Chat on WhatsApp',
    actionHref: 'https://wa.me/201001204191?text=Hello%20Khater%20Group,%20I%20would%20like%20to%20inquire%20about%20a%20project.',
    isExternal: true,
    icon: MessageSquare,
  },
  {
    id: 'tenders',
    tag: 'Tenders & RFPs',
    title: 'Commercial Bidding Desk',
    description: 'Direct submission of BoQs, tender drawings, and turnkey EPC inquiries.',
    phone: 'info@khatersports.com',
    phoneHref: 'mailto:info@khatersports.com',
    secondaryPhone: 'Technical Review Team',
    email: 'info@khatersports.com',
    hours: 'Dedicated Estimations Team',
    actionText: 'Submit RFP Below',
    actionHref: '#inquiry-form',
    isExternal: false,
    icon: FileText,
  },
];

export default function ContactQuickCards() {
  return (
    <section className="relative border-b border-black/10 bg-[#FAFAFA] py-12 text-brand-black sm:py-16">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-black/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-black/[0.06] pb-3.5">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-black/50">
                      {card.tag}
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-lg border border-black/10 bg-black/[0.03] text-black/70 transition-colors group-hover:border-black/30 group-hover:bg-black group-hover:text-white">
                      <Icon size={15} strokeWidth={1.8} />
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-brand-black">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-xs font-light leading-relaxed text-black/60">
                    {card.description}
                  </p>

                  <div className="mt-4 space-y-1.5 border-t border-black/[0.04] pt-3.5 text-xs">
                    <a
                      href={card.phoneHref}
                      target={card.isExternal ? '_blank' : undefined}
                      rel={card.isExternal ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-2 font-medium text-brand-black transition hover:text-black/60"
                    >
                      <Phone size={13} className="shrink-0 text-black/40" />
                      <span className="truncate">{card.phone}</span>
                    </a>

                    {card.secondaryPhone && (
                      <p className="flex items-center gap-2 text-[11px] text-black/50">
                        <Clock size={13} className="shrink-0 text-black/40" />
                        <span className="truncate">{card.secondaryPhone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5 border-t border-black/[0.06] pt-3.5">
                  <a
                    href={card.actionHref}
                    target={card.isExternal ? '_blank' : undefined}
                    rel={card.isExternal ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-black transition-colors group-hover:text-black/60"
                  >
                    <span>{card.actionText}</span>
                    <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
