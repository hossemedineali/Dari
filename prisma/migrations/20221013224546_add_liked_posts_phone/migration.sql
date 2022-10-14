/*
  Warnings:

  - You are about to drop the column `priceType` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `priceType`,
    ADD COLUMN `pricePer` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `phone` INTEGER NULL;
