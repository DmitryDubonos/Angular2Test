import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AppComponent }   from './app.component';
import { AboutComponent }   from './about.component';
import { AboutGuard }   from './about.guard';
import { HomeComponent }   from './home.component';
import { NotFoundComponent }   from './not-found.component';
import { ItemComponent } from './item.component';
import { ItemStatComponent }   from './item.stat.component';
import { ItemDetailsComponent }   from './item.details.component';
import { ExitAboutGuard } from './exit.about.guard';

const itemRoutes: Routes = [
  { path: 'details', component: ItemDetailsComponent },
  { path: 'stat', component: ItemStatComponent }
];

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent, canActivate: [ AboutGuard ], canDeactivate: [ExitAboutGuard] },
  { path: 'item/:id', component: ItemComponent },
  { path: 'item/:id', component: ItemComponent, children: itemRoutes },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot(appRoutes), FormsModule ],
  declarations: [ AppComponent, HomeComponent, AboutComponent, NotFoundComponent, ItemComponent, ItemDetailsComponent, ItemStatComponent ],
  providers: [ AboutGuard, ExitAboutGuard ],
  bootstrap: [ AppComponent ]
})

export class AppModule {};
