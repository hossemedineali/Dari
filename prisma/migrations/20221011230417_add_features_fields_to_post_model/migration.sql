/*
  Warnings:

  - You are about to drop the column `Parking` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `backyard` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `bednum` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Post` table. All the data in the column will be lost.
  - Added the required column `lat` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lng` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rooms` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `Parking`,
    DROP COLUMN `backyard`,
    DROP COLUMN `bednum`,
    DROP COLUMN `location`,
    ADD COLUMN `Balcony` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `Garage` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `Outdoor` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `SolarHotwater` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `Swimming` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `Undercover` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `airConditioning` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `lat` DOUBLE NOT NULL,
    ADD COLUMN `lng` DOUBLE NOT NULL,
    ADD COLUMN `rooms` INTEGER NOT NULL,
    ADD COLUMN `size` DOUBLE NOT NULL,
    ADD COLUMN `solarPanels` BOOLEAN NOT NULL DEFAULT false;
