/*
  Warnings:

  - Added the required column `gif` to the `PokemonCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `PokemonCard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PokemonCard" ADD COLUMN     "gif" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;
