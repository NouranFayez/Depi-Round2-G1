import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products = [
    {title : 'title product 1' , body : 'body product1'} , 
    {title : 'title product 2' , body : 'body product2'} , 
    {title : 'title product 3' , body : 'body product3'} , 
    {title : 'title product 4' , body : 'body product4'} , 
    {title : 'title product 5' , body : 'body product5'} , 
  ]

}
