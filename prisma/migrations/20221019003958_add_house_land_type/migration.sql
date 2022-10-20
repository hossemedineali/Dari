/*
  Warnings:

  - Added the required column `houseLand` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Post` ADD COLUMN `houseLand` VARCHAR(191) NOT NULL;
