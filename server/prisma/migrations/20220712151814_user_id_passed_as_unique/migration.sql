/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `PokemonCard` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PokemonCard_userId_key" ON "PokemonCard"("userId");
