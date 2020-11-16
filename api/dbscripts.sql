mysql -h mysql.wiu.edu -P 2521 -u root -p

mysql -h mysql.wiu.edu -P 2521 -u root -p

CREATE DATABASE ecommerce;
mysql --user=sathishpotta --password=Kalikrishna$9
CREATE USER 'ecomuser'@'10.16.240.%' IDENTIFIED BY 'ecom1@3$5';
CREATE USER 'ecomuser'@'10.50.202.11' IDENTIFIED BY 'ecom1@3$5';
CREATE USER 'ecomuser'@'10.50.202.15' IDENTIFIED BY 'ecom1@3$5';
CREATE USER 'ecomuser'@'143.43.222.%' IDENTIFIED BY 'ecom1@3$5';
GRANT ALL PRIVILEGES ON ecommerce . * TO 'ecomuser'@'10.16.240.%' ;
GRANT ALL PRIVILEGES ON ecommerce . * TO 'ecomuser'@'10.50.202.11'
GRANT ALL PRIVILEGES ON ecommerce . * TO 'ecomuser'@'10.50.202.15'
GRANT ALL PRIVILEGES ON ecommerce . * TO 'ecomuser'@'143.43.222.%'




USE ecommerce;

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `description` varchar(1000) NOT NULL DEFAULT '',
  `image` varchar(255) NOT NULL DEFAULT '',
  `price` int (10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

INSERT INTO products(id, title, image, description, price) values(1,'Basic-TShirt','assets/images/Item_1.jpg','Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero''s De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with',7.99);

INSERT INTO products(id, title, description, image, price) values(2,'Black Glasses','assets/images/Item_1.jpg','Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero''s De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with',8.99);