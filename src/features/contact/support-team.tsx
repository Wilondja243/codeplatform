const team = [
    {
        name: 'Wilondja',
        last: 'Ebuela',
        role: 'Responsable Support',
        image: '/images/1366.jpg',
    },
    {
        name: 'Blaise',
        last: 'Munyamihana',
        role: 'Responsable Communauté',
        image: '/images/4271.jpg',
    },
];

export default function SupportTeam() {
    return (
        <section className="py-20 bg-background-muted">
            <div className="w-[85%] m-auto sm:w-[70%]">
                <h2 className="text-2xl font-bold mb-8 ">
                    Rencontrez nos responsables support
                </h2>

                <div className="grid sm:grid-cols-2 gap-6 ">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="py-6 px-3 bg-background-light rounded-xl border text-center"
                        >
                            <img
                                src={member.image}
                                className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-[#fff8ec]"
                                alt={`Portrait de ${member.name} ${member.last}`}
                            />
                            <h4 className="font-bold">
                                {member.name} {member.last}
                            </h4>
                            <p className="text-text-muted text-sm">
                                {member.role}
                            </p>

                            <a
                                href=""
                                className="bg-[#fcf1e0] text-primary font-bold block mt-3 p-2 rounded-md hover:bg-primary hover:text-text-light"
                            >
                                Discuter avec {member.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
