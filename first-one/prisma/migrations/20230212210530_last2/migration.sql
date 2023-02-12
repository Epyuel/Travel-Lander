/*
  Warnings:

  - You are about to drop the column `departureDate` on the `Search` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[DepartureDate]` on the table `Search` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `DepartureDate` to the `Search` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Search_departureDate_key";

-- AlterTable
ALTER TABLE "Search" DROP COLUMN "departureDate",
ADD COLUMN     "DepartureDate" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Search_DepartureDate_key" ON "Search"("DepartureDate");
