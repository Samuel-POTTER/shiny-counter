import { PrismaClient } from '@prisma/client';

class Prisma {
    private static instance: Prisma;
    private prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = new PrismaClient();
    }

    public static getInstance(): PrismaClient {
        if (!Prisma.instance) {
            Prisma.instance = new Prisma();
        }
        return Prisma.instance.prismaClient;
    }
}

export default Prisma;

// thomas

// Server oauth terminé GRPC, statistique commencé et bien entamé
// Prochain API role
// Test auth suur la majorité des Routes, certaines manquantes mais les testés fonctionnent

// Raph
// API pour les sessions app'iness, création de route plus spécifique pour récupérer plusieurs tyype de data
// Un peu galéré knex + SQL (en avait jamais fait)
// Reste à connecter avec alan (risque de prendre du temps car tout alan doit être restructuré pour fit ~2-3 Jours)

// Steph
// Try to faire marcher google analytics sur l'app. Il arrive pas à lire le site mais continue ses recherches.
// Doit ping fabien pour voir le fonctionnement de l'integration de l'assistant virtuel car tout doit être refactoré.

// Abdillah
// Doit fixe les api car bug enormement impossible de load une page, prend 5min minimum pour load. Detection de fichier suspect dans les requetes

// Donovan
// nada
