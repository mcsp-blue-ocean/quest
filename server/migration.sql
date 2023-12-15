CREATE TABLE `commands`(
    `id` INT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `category_id` INT NOT NULL,
    `command_syntax` TEXT NOT NULL,
    `command_description` TEXT NOT NULL
);
CREATE TABLE `categories`(
    `id` INT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `category` TEXT NOT NULL
);
ALTER TABLE
    `commands` ADD CONSTRAINT `commands_category_id_foreign` FOREIGN KEY(`category_id`) REFERENCES `categories`(`id`);