import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart = { items: [
    {
    product: 'https://via.placeholder.com/150',
    name: 'sneackers',
    price: 150,
    quantity: 1,
    id:1
    },
    {
    product: 'https://via.placeholder.com/150',
    name: 'sneackers',
    price: 150,
    quantity: 2,
    id:2
    },
    {
    product: 'https://via.placeholder.com/150',
    name: 'sneackers',
    price: 150,
    quantity: 3,
    id:3
    }
]}
  dataSource:Array<CartItem> = []
  displayedColumns: string[] =
  [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
];

constructor(private cartService: CartService, private http: HttpClient){}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
    this.cart = _cart;
    this.dataSource = this.cart.items
    })
  }
  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onCheckout(): void {
    this.http.post('http://localhost:4242/checkout', {
      items: this.cart.items
    }).subscribe(async (res: any) => {
      let stripe = await loadStripe
      ('pk_test_51NL092FMt91sNjDp4ZI3v6DRulPsGwLUjGDXKnSf1CTro2B4z71GoxlhmBjHM6O6cNbJnODh263H6xt4iAof11Qn00R7JOzrpC')
      stripe?.redirectToCheckout({ sessionId: res.id })
    }
    )
}
}
