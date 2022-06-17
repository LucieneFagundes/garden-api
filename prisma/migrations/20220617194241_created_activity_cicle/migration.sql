/*
  Warnings:

  - You are about to drop the column `authorId` on the `plants` table. All the data in the column will be lost.
  - Added the required column `userId` to the `plants` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Activity" AS ENUM ('regar', 'fertilizar');

-- CreateEnum
CREATE TYPE "Period" AS ENUM ('dia', 'semana', 'mes');

-- DropForeignKey
ALTER TABLE "plants" DROP CONSTRAINT "plants_authorId_fkey";

-- AlterTable
ALTER TABLE "plants" DROP COLUMN "authorId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "activities_cycle" (
    "id" TEXT NOT NULL,
    "plantId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activity" "Activity" NOT NULL,
    "period" "Period" NOT NULL,
    "period_qd" INTEGER NOT NULL,

    CONSTRAINT "activities_cycle_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "plants" ADD CONSTRAINT "plants_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities_cycle" ADD CONSTRAINT "activities_cycle_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "plants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
