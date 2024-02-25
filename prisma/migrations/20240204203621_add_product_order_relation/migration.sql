/*
  Warnings:

  - You are about to drop the column `model` on the `orderedproducts` table. All the data in the column will be lost.
  - Added the required column `carId` to the `OrderedProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orderedproducts` DROP COLUMN `model`,
    ADD COLUMN `carId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `OrderedProducts` ADD CONSTRAINT `OrderedProducts_carId_fkey` FOREIGN KEY (`carId`) REFERENCES `Car`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
