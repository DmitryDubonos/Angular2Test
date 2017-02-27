import { Component } from "@angular/core";
import { Router } from "@angular/router";

class Item {
  id: number;
  price: number;
  product: string;
}

@Component({
  selector: "my-app",
  styles: [ `.active {color:red}` ],
  template: `<div>
              <nav>
                <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Main page</a>
                 |
                <a routerLink="/item/5/details" routerLinkActive="active">Product info</a>
                 |
                <a routerLink="/item/5/stat" routerLinkActive="active">Product stat</a>
                 |
                <a routerLink="/about" routerLinkActive="active">About</a>
              </nav>
              <router-outlet></router-outlet>
             </div>`
})

export class AppComponent {
  item: Item = new Item();

  constructor(private router: Router) {}

  goToItem(myItem: Item) {
    this.router.navigate(['/item', myItem.id], { queryParams:{'product': myItem.product, 'price': myItem.price}});
  }
}
