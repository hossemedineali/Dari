/*
  Warnings:

  - You are about to drop the column `userId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `_PostToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX `User_name_id_key` ON `User`;

-- DropIndex
DROP INDEX `User_name_key` ON `User`;

-- AlterTable
ALTER TABLE `Post` DROP COLUMN `userId`;

-- DropTable
DROP TABLE `_PostToUser`;
