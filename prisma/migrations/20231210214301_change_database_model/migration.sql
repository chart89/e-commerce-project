-- CreateTable
CREATE TABLE `Car` (
    `id` VARCHAR(191) NOT NULL,
    `mark` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `engine` VARCHAR(191) NOT NULL,
    `HP` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `picture` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
