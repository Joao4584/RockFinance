/*
  Warnings:

  - Added the required column `user_id` to the `Logs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `logs` ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `image_url` TEXT NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE `Logs` ADD CONSTRAINT `Logs_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
