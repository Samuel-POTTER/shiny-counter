/*
  Warnings:

  - Made the column `encounter` on table `PokemonCard` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "PokemonCard" ALTER COLUMN "encounter" SET NOT NULL;
