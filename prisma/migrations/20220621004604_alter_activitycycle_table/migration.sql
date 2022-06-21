/*
  Warnings:

  - Added the required column `initial_event` to the `activities_cycle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `next_event` to the `activities_cycle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "activities_cycle" ADD COLUMN     "initial_event" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "next_event" TIMESTAMP(3) NOT NULL;
