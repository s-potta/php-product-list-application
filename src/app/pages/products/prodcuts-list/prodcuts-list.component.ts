import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {Product} from '../../../models/Product';

@Component({
  selector: 'app-prodcuts-list',
  templateUrl: './prodcuts-list.component.html',
  styleUrls: ['./prodcuts-list.component.css']
})
export class ProdcutsListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  public products:Product[]=[];
  ngOnInit(): void {
    console.log(1234);
  this.getProducts();
  }
  
  getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }

}
