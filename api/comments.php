<?php
require 'dbconnection.php';

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{

  $request = json_decode($postdata);
  
  if(trim($request->data->Comment) === '' || (int)$request->data->ProductId < 1)
  {
    return http_response_code(400);
  }
  
  $comment = mysql_real_escape_string(trim($request->data->Comment));
  $prodcutId = mysql_real_escape_string((int)$request->data->ProductId);
   

  $sql = "INSERT INTO `comments`(`comment`, `product_id`) values('{$comment}', {$prodcutId})";
   mysql_query($sql);
  if(mysql_insert_id())
  {
    http_response_code(201);
    $commentObj = [
      'Comment' => $comment,
      'ProdcutId' => $prodcutId,
      'Id'    => mysql_insert_id()
    ];
    echo json_encode(['data'=>$commentObj]);
  }

}
