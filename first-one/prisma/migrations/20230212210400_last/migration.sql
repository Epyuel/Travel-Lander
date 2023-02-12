/*
  Warnings:

  - You are about to drop the `search` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "search";

-- CreateTable
CREATE TABLE "Search" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "departureDate" TEXT NOT NULL,

    CONSTRAINT "Search_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Search_title_key" ON "Search"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Search_departureDate_key" ON "Search"("departureDate");
