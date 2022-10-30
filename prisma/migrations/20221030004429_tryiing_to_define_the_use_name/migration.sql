/*
  Warnings:

  - A unique constraint covering the columns `[id,name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authname` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_name_id_key` ON `User`;

-- DropIndex
DROP INDEX `User_name_key` ON `User`;

-- AlterTable
ALTER TABLE `Post` ADD COLUMN `authname` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_id_name_key` ON `User`(`id`, `name`);
