<?php

// db credentials
define('DB_HOST', '127.0.0.1');
define('DB_USER', 'sp201');
define('DB_PASS', 'Sathish@123');
define('DB_NAME', 'ecommerce');

function connect()
{
  $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();