<?php

// db credentials
define('DB_HOST', 'mysql.wiu.edu:2521');
define('DB_USER', 'ecomuser');
define('DB_PASS', 'ecom1@3$5');
define('DB_NAME', 'ecommerce');

$conn = mysql_connect("localhost", "ecomuser", "ecom1@3$5");
if (!$conn) {
  echo "Unable to connect to DB: " . mysql_error();
  exit;
}

if (!mysql_select_db("ecommerce")) {
  echo "Unable to select mydbname: " . mysql_error();
  exit;
}
