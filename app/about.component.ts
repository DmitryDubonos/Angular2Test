import { Component } from "@angular/core";
import { ComponentCanDeactivate } from './exit.about.guard';
import { Observable } from "rxjs/Rx";

@Component({
  selector: "about-app",
  template: `<h3>About</h3>
             <button class="btn btn-default" (click)="save()">Save</button>
             <a routerLink="">On main page</a>`
})

export class AboutComponent implements ComponentCanDeactivate {
  saved: boolean = false;
  save() {
    this.saved = true;
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved) {
      return confirm('Do you want to leave this page?')
    } else {
      return true;
    }
  }
}
