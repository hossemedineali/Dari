/*
  Warnings:

  - You are about to drop the column `Outdoor` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `Swimming` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `Undercover` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `Outdoor`,
    DROP COLUMN `Swimming`,
    DROP COLUMN `Undercover`,
    ADD COLUMN `OutdoorArea` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `SwimmingPool` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `UndercoverParking` BOOLEAN NOT NULL DEFAULT false;
