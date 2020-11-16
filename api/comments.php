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
	
  $comment = mysqli_real_escape_string($con, trim($request->data->Comment));
  $prodcutId = mysqli_real_escape_string($con, (int)$request->data->ProductId);
    

  $sql = "INSERT INTO `comments`(`comment`, `product_id`) values('{$comment}', {$prodcutId})";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $commentObj = [
      'Comment' => $comment,
      'ProdcutId' => $prodcutId,
      'Id'    => mysqli_insert_id($con)
    ];
    echo json_encode(['data'=>$commentObj]);
  }
  else
  {
    http_response_code(422);
  }
}
