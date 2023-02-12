-- CreateTable
CREATE TABLE "search" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "departureDate" TEXT NOT NULL,

    CONSTRAINT "search_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "search_title_key" ON "search"("title");

-- CreateIndex
CREATE UNIQUE INDEX "search_departureDate_key" ON "search"("departureDate");
