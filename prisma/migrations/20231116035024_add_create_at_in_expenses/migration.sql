/*
  Warnings:

  - Added the required column `color` to the `Category_List` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Expenses_user_id_fkey` ON `expenses`;

-- DropIndex
DROP INDEX `Logs_user_id_fkey` ON `logs`;

-- AlterTable
ALTER TABLE `category_list` ADD COLUMN `color` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `icon` VARCHAR(191) NULL,
    ADD COLUMN `updated_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `expenses` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `image_url` TEXT NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE `Logs` ADD CONSTRAINT `Logs_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Expenses` ADD CONSTRAINT `Expenses_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
