-- DropIndex
DROP INDEX `Expenses_user_id_fkey` ON `expenses`;

-- DropIndex
DROP INDEX `Logs_user_id_fkey` ON `logs`;

-- AlterTable
ALTER TABLE `logs` MODIFY `link_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `image_url` TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE `Feedback_List` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `action` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `image_url` TEXT NOT NULL,
    `ip_client` VARCHAR(45) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Logs` ADD CONSTRAINT `Logs_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Expenses` ADD CONSTRAINT `Expenses_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Feedback_List` ADD CONSTRAINT `Feedback_List_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
