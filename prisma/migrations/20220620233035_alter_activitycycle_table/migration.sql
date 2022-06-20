-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Activity" ADD VALUE 'imersao';
ALTER TYPE "Activity" ADD VALUE 'umidificacao';
ALTER TYPE "Activity" ADD VALUE 'transplante';

-- AlterTable
ALTER TABLE "activities_cycle" ADD COLUMN     "notes" TEXT;
