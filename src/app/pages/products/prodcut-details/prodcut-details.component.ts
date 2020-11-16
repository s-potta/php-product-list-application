import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { Comment } from 'src/app/models/Comment';
import { CommentsService } from 'src/app/services/comments.service';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-prodcut-details',
  templateUrl: './prodcut-details.component.html',
  styleUrls: ['./prodcut-details.component.css']
})
export class ProdcutDetailsComponent implements OnInit {
  commentForm;
  public productDetails: Product;
  public comment: string;
  private productId: number;
  constructor( private formBuilder: FormBuilder, private productService: ProductService, private commentService: CommentsService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.productId = params.id;
    });
    this.commentForm = new FormGroup({
      Comment: new FormControl()
   });
  }

  ngOnInit(): void {
    this.productService.getProductById(this.productId).subscribe(response => {
      console.log(response);
      this.productDetails = response.filter(x => x.Id == this.productId)[0];
      console.log(this.productDetails);
    });
  }
  
  onDeleteBtnClick(id:number){
    this.commentService.deleteComment(id).subscribe(response => {
      console.log(response);
      const index = this.productDetails.Comments.findIndex(x=>x.Id== id);
      this.productDetails.Comments.splice(index,1);
    });
  }

  onAddCommentBtnClick(commentData:any): void {
    console.log(commentData);
    let comment = new Comment();
    comment["ProductId"] = this.productId;
    comment["Comment"] = commentData["Comment"];
    console.log(comment);
    this.commentService.postComment(comment).subscribe(
      response => {
        console.log(response);
        if(!this.productDetails.Comments)
          this.productDetails.Comments = [];
        this.productDetails.Comments.push(response);
        this.commentForm.reset();
      }
    );
  }

}
