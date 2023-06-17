import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit{
@Input() fullWidthMode: boolean = false;
product: Product | undefined = {
  id: 1,
  title: 'Sneakers',
  price: 150,
  category: 'shoes',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  image: 'https://via.placeholder.com/150'
}
@Output() addToCart: any = new EventEmitter<Product>();



  constructor() { }


  ngOnInit(): void { }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}
