/*
  Warnings:

  - You are about to drop the column `lessonCount` on the `course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "course" DROP COLUMN "lessonCount",
ADD COLUMN     "lesson_count" INTEGER NOT NULL DEFAULT 0;
