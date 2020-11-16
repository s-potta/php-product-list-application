<?php

require 'dbconnection.php';

$id = $_GET != null && $_GET["id"] != null? (int) $_GET["id"] : 0; 

if(!$id)
{
  return http_response_code(400);
}

// Delete.
$sql = "DELETE FROM `comments` WHERE `id` ='{$id}' LIMIT 1";

if(mysqli_query($con, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}
