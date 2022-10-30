/*
  Warnings:

  - You are about to drop the column `userId` on the `Post` table. All the data in the column will be lost.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `User` MODIFY `name` VARCHAR(191) NOT NULL DEFAULT 'User';
