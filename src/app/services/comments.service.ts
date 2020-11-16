import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Comment } from 'src/app/models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private currentComment: Comment;
  private productApi: string = "http://localhost/ecommerce/api/";
  constructor(private http: HttpClient) { }

  postComment(comment: Comment): Observable<Comment> {
    console.log(comment);
    return this.http.post(this.productApi + "comments.php", { data: comment }).pipe(map((response) => {
      this.currentComment = response["data"];
      return this.currentComment;
    }));
  }

  deleteComment(id: number): Observable<any> {
    return this.http.delete(this.productApi + "deleteComment.php?id="+id).pipe(map((response) => {
      return response;
    }));
  }
}
