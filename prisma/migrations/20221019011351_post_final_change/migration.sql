/*
  Warnings:

  - You are about to drop the column `houseLand` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Post` table. All the data in the column will be lost.
  - Added the required column `announcementtype` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyType` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `houseLand`,
    DROP COLUMN `type`,
    ADD COLUMN `announcementtype` VARCHAR(191) NOT NULL,
    ADD COLUMN `landtype` VARCHAR(191) NULL,
    ADD COLUMN `propertyType` VARCHAR(191) NOT NULL;
