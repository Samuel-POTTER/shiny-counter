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
