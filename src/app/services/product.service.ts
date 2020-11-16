import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { PRODUCTS } from '../product-mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private productApi: string = "http://localhost/ecommerce/api/";
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productApi + "products.php").pipe(
      map((response) => {
        console.log(response);
        return response['data'];
      }));
  };
  getProductById(id:number): Observable<Product[]> {
    return this.http.get<Product[]>(this.productApi + "products.php?id="+id).pipe(
      map((response) => {
        console.log(response);
        if(response['data'] && response['data'].length > 0 && response['data'][0].Comments){
          const comments:any = response['data'][0].Comments.split(',');
          response['data'][0].Comments = [];
          for (let index = 0; index < comments.length; index++) {
            const element = comments[index];
            let comment = new Comment();
            comment.Id = element.split('.')[0];
            comment.Comment = element.split('.')[1];
            response['data'][0].Comments.push(comment);
          }
        }
        return response['data'];
        //return this.products;
      }));
  };
}

