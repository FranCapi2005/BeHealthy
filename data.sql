CREATE TABLE `user` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `lastname` VARCHAR(100) NOT NULL,
    `country` VARCHAR(80) DEFAULT NULL,
    `email` VARCHAR(125) NOT NULL UNIQUE,
    `password` VARCHAR(60) NOT NULL,
    `tokenC` TEXT DEFAULT NULL UNIQUE,
    `countryCode` VARCHAR(8) NOT NULL,
    `phoneNumber` int(11) NOT NULL,
    `avatarImg` TEXT DEFAULT NULL,
    `birthday` DATE DEFAULT NULL,
    `age` int(11) DEFAULT NULL,
    `weigth` int(11) NOT NULL,
    `height` int(11) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB;

CREATE TABLE `personal_goal` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `objetive` VARCHAR(100) NOT NULL,
    `mass_index` int(11) DEFAULT NULL,
    `protein_day` VARCHAR(10) DEFAULT NULL,
    `kcal_manteintment` int(11) NOT NULL,
    `corporal_percent` int(11) DEFAULT NULL, -- Missing comma fixed here
    PRIMARY KEY (`id`),
    UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB;

CREATE TABLE `goal_user` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `goal_id` int(11) DEFAULT NULL,
    `user_id` int(11) DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `fk_goal_id` (`goal_id`),
    KEY `fk_user_id` (`user_id`),
    CONSTRAINT `fk_goal_id` FOREIGN KEY (`goal_id`) REFERENCES `personal_goal` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB;
