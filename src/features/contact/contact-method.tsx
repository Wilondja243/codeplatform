const methods = [
    {
        icon: 'mail',
        title: 'Email',
        description:
            'Notre équipe amicale est là pour vous aider avec toute question.',
        contact: 'monalinacampany@gmail.com',
        href: 'mailto:monalinacampany@gmail.com',
        blank: false,
    },
    {
        icon: 'chat_bubble',
        title: 'WhatsApp',
        description:
            'Contactez-nous directement via WhatsApp pour une réponse rapide.',
        contact: '+257 123 456 789',
        href: 'https://wa.me/62109522',
        blank: true,
    },
    {
        icon: 'location_on',
        title: 'LinkedIn',
        description:
            'Connectez-vous avec nous sur LinkedIn pour des partenariats et opportunités.',
        contact: 'Monalina Company',
        href: 'https://www.linkedin.com/in/wilondja',
        blank: true,
    },
];

export default function ContactMethods() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-20 w-[85%] mx-auto">
            {methods.map((m) => (
                <div
                    key={m.title}
                    className="bg-background-light p-8 rounded-md shadow-sm hover:shadow-md transition-shadow border border-card-light-border group"
                >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-3xl">
                            {m.icon}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{m.title}</h3>
                    <p className="text-text-muted text-sm mb-4">
                        {m.description}
                    </p>
                    {m.href ? (
                        <a
                            href={m.href}
                            target={`${m.blank ? '_blank' : ''}`}
                            className="text-primary font-semibold hover:underline"
                        >
                            {m.contact}
                        </a>
                    ) : (
                        <p className="text-text-dark dark:text-white font-medium">
                            {m.contact}
                        </p>
                    )}
                </div>
            ))}
        </section>
    );
}
