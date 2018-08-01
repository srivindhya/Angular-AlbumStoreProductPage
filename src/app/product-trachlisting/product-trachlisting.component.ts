import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Album } from '../album';

@Component({
  selector: 'app-product-trachlisting',
  templateUrl: './product-trachlisting.component.html',
  styleUrls: ['./product-trachlisting.component.css']
})
export class ProductTrachlistingComponent implements OnInit {
  albumInfo:Album;
  constructor(private _productService:ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response=>
    this.albumInfo=response)
  }

}
