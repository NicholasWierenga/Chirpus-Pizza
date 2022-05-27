import { Component } from '@angular/core';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: MenuItem[] = [
    {item: `Grilled Chicken`, category: `dinner`, price: 11.99},
    {item: `Pizza`, category: `dinner`, price: 11.99},
    {item: `Wings`, category: `sides`, price: 8.99},
    {item: `Fries`, category: `sides`, price: 2.99},
    {item: `Ceasar Salad`, category: `salads`, price: 5.99},
    {item: `Cinnamon Roll`, category: `dessert`, price: 8.99}
  ];
}
