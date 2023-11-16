/*
  Warnings:

  - You are about to alter the column `verify_code` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(13)`.
  - You are about to alter the column `ip_acess` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(45)`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `name` VARCHAR(240) NOT NULL,
    MODIFY `password` TEXT NOT NULL,
    MODIFY `verify_code` VARCHAR(13) NOT NULL,
    MODIFY `ip_acess` VARCHAR(45) NOT NULL,
    MODIFY `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);
