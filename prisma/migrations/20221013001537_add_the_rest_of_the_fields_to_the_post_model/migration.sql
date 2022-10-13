/*
  Warnings:

  - Added the required column `governorate` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isposition` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `municipality` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceType` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Post` ADD COLUMN `governorate` VARCHAR(191) NOT NULL,
    ADD COLUMN `images` VARCHAR(191) NULL,
    ADD COLUMN `isposition` BOOLEAN NOT NULL,
    ADD COLUMN `municipality` VARCHAR(191) NOT NULL,
    ADD COLUMN `priceType` VARCHAR(191) NOT NULL,
    MODIFY `lat` DOUBLE NULL,
    MODIFY `lng` DOUBLE NULL;
