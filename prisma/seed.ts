const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    const hashedPassword = await bcrypt.hash('luckson243', 10);

    await prisma.user.upsert({
        where: { email: 'lucksonpremier@gmail.com' },
        update: {},
        create: {
            email: 'lucksonpremier@gmail.com',
            name: 'Luckson Premier',
            password: hashedPassword,
            role: 'ADMIN',
            is_active: true,
        },
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
