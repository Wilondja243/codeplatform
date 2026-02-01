-- AlterTable
ALTER TABLE "lesson" ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "lessoncontent" ALTER COLUMN "value" DROP NOT NULL;
