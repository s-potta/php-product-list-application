<?php

function getProducts($id){
    require 'dbconnection.php';
    if($id==0){
        $sql = "SELECT *, '' as comments FROM products";
    }
    else{
    $sql = "select * from (SELECT p.id, p.title, p.description, p.image, p.price, GROUP_CONCAT(c.id,'.',c.comment) as comments FROM `products` p LEFT JOIN `comments` c ON c.product_id = p.id where p.id={$id} GROUP BY p.id) a";
    }
    
    $products = [];
    $result = mysql_query($sql);
 
    
    if (mysql_num_rows($result) == 0) {
      echo "No rows found, nothing to print so am exiting";
      exit;
    }

    if($result)
    {
        $cr = 0;
        while($row = mysql_fetch_assoc($result))
        {
            $products[$cr]['Id']    = $row['id'];
            $products[$cr]['Title'] = $row['title'];
            $products[$cr]['Price'] = $row['price'];
            $products[$cr]['Image']    = $row['image'];
            $products[$cr]['Description'] = $row['description'];
            $products[$cr]['Comments'] = $row['comments'];
            $cr++;
        }
    }
    else 
    {
        return NULL;
    }
    return $products;
}

function init(){
    $id = $_GET != null && $_GET["id"] != null? (int) $_GET["id"] : 0; 
    //echo $id; 
    $products = getProducts($id);
    //$products = getProducts();
    //echo json_encode(['data'=>$_GET["id"]]);
    if($products != NULL){   
    echo json_encode(['data'=>$products]);
    }
    else
    {
    http_response_code(404);
    }
}
init();