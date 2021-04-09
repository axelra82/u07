import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { ListComponent, SingleComponent } from './components/recipe/recipe.component';

import { MealdbService } from './services/recipes.service';
import { TruncatePipe } from './pipes/truncate.pipe';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    ListComponent,
    SingleComponent,
    TruncatePipe,
    NavComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    MealdbService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
