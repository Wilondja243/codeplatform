/*
  Warnings:

  - The `lesson` column on the `Course` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "lesson",
ADD COLUMN     "lesson" INTEGER NOT NULL DEFAULT 0;
