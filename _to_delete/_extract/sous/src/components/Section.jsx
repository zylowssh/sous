/* Section simple : rythme vertical régulier, pas d'empilement collant.
   Le scroll doit rester prévisible — c'est une page qui demande de la confiance. */
export default function Section({ id, bg = 'bg-cream', className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-20 ${bg} ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">{children}</div>
    </section>
  );
}

/* En-tête de section : label + titre + chapô, toujours dans le même ordre. */
export function SectionHead({ label, title, lead, className = '', align = 'left' }) {
  return (
    <div className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {label && <p className="label">{label}</p>}
      <h2 className="mt-4 text-[2rem] font-semibold leading-[1.12] md:text-[2.9rem]">{title}</h2>
      {lead && <p className="mt-5 text-base leading-relaxed text-ink/70 md:text-lg">{lead}</p>}
    </div>
  );
}
