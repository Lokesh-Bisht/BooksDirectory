CREATE TABLE `BooksDB`.`books` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(250) NOT NULL,
  `coverImage` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`));