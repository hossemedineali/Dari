/*
  Warnings:

  - Added the required column `Parking` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `backyard` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bednum` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Made the column `first_name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Post` ADD COLUMN `Parking` BOOLEAN NOT NULL,
    ADD COLUMN `backyard` BOOLEAN NOT NULL,
    ADD COLUMN `bednum` INTEGER NOT NULL,
    ADD COLUMN `location` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` DOUBLE NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `first_name` VARCHAR(191) NOT NULL;
