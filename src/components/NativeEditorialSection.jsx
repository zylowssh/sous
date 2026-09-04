import { Link } from 'react-router-dom';
import RestaurantSiteMockup from './RestaurantSiteMockup';

function SectionAction({ action }) {
  if (!action) return null;
  const className = `inline-flex min-h-11 items-center justify-center border px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.12em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
        action.primary
          ? 'border-flame bg-flame text-cream hover:border-ink hover:bg-ink focus-visible:outline-ink'
          : 'border-current hover:bg-ink hover:text-cream focus-visible:outline-flame'
      }`;
  const content = <>{action.label}&nbsp; →</>;

  return action.href.startsWith('#')
    ? <a href={action.href} className={className}>{content}</a>
    : <Link to={action.href} className={className}>{content}</Link>;
}

function Pricing({ plans }) {
  return (
    <div className="grid gap-px border border-ink/25 bg-ink/25 md:grid-cols-3">
      {plans.map((plan) => (
        <article key={plan.name} className="bg-cream p-6 text-ink">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink/55">{plan.name}</p>
          <p className="mt-3 font-display text-4xl uppercase">{plan.price}</p>
          <ul className="mt-5 space-y-3 text-sm text-ink/70">
            {plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}
          </ul>
          <SectionAction action={plan.action} />
        </article>
      ))}
    </div>
  );
}

function Faq({ items }) {
  return (
    <div className="divide-y divide-ink/20 border-y border-ink/20">
      {items.map(([question, answer]) => (
        <details key={question} className="group py-1">
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 font-bold">
            {question}<span aria-hidden="true" className="text-flame group-open:rotate-45">+</span>
          </summary>
          <p className="max-w-2xl pb-5 text-sm leading-relaxed text-ink/65">{answer}</p>
        </details>
      ))}
    </div>
  );
}

export default function NativeEditorialSection({ id, index, mobile, background, dark = false }) {
  const reverse = index % 2 === 1;
  const style = { background };

  return (
    <section id={id} style={style} className={`relative px-5 py-20 sm:px-8 md:py-24 ${dark ? 'text-cream' : 'text-ink'}`}>
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-flame">
          {String(index + 1).padStart(2, '0')} / {mobile.eyebrow}
        </p>
        <div className={`mt-5 grid items-center gap-10 md:grid-cols-2 ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
          <div>
            <h2 className="max-w-2xl font-display text-[clamp(2.75rem,11vw,6.5rem)] uppercase leading-none tracking-[-0.025em]">
              {mobile.title}
            </h2>
            {mobile.copy && <p className={`mt-6 max-w-xl text-base leading-relaxed ${dark ? 'text-cream/65' : 'text-ink/65'}`}>{mobile.copy}</p>}
            {mobile.items && mobile.kind !== 'faq' && mobile.kind !== 'pricing' && (
              <ul className={`mt-7 grid gap-3 border-t pt-5 text-sm ${dark ? 'border-cream/20 text-cream/70' : 'border-ink/20 text-ink/70'}`}>
                {mobile.items.map((item) => <li key={item} className="flex gap-3"><span className="text-flame">✦</span>{item}</li>)}
              </ul>
            )}
            <div className="mt-8"><SectionAction action={mobile.action} /></div>
          </div>
          {mobile.image && (
            <div className={`relative overflow-hidden border ${dark ? 'border-cream/20' : 'border-ink/20'} ${reverse ? '-rotate-1' : 'rotate-1'}`}>
              <img
                src={mobile.image}
                alt={mobile.imageAlt ?? ''}
                width="900"
                height="700"
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchpriority={index === 0 ? 'high' : 'auto'}
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
               />
            </div>
          )}
          {mobile.mockup === 'identity' && <RestaurantSiteMockup placeholder className={reverse ? '-rotate-1' : 'rotate-1'} />}
        </div>
        {mobile.kind === 'faq' && <div className="mt-10"><Faq items={mobile.items} /></div>}
        {mobile.kind === 'pricing' && <div className="mt-10"><Pricing plans={mobile.plans} /></div>}
      </div>
    </section>
  );
}
