-- DropIndex
DROP INDEX `User_id_name_key` ON `User`;

-- AlterTable
ALTER TABLE `Post` MODIFY `authname` VARCHAR(191) NOT NULL DEFAULT 'User';
