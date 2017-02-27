import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'item-info',
  template: `<h3>Model {{id}}</h3>
             <router-outlet></router-outlet>`
})

export class ItemComponent implements OnDestroy {
  private id: number;
  private routeSubscription: Subscription;

  constructor(private activeRoute: ActivatedRoute) {
    this.routeSubscription = activeRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
