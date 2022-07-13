-- AlterTable
ALTER TABLE "PokemonCard" ALTER COLUMN "encounter" DROP NOT NULL,
ALTER COLUMN "encounter" SET DEFAULT 0;
