-- DropIndex
DROP INDEX `Logs_user_id_fkey` ON `logs`;

-- AlterTable
ALTER TABLE `users` MODIFY `image_url` TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE `Expenses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `parent_id` INTEGER NULL,
    `user_id` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `category_id` INTEGER NOT NULL,
    `date_payment` DATETIME(3) NOT NULL,
    `finished` BOOLEAN NOT NULL DEFAULT false,
    `date_finished` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category_List` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Logs` ADD CONSTRAINT `Logs_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Expenses` ADD CONSTRAINT `Expenses_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
