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
import { TagsPipe } from './pipes/tags.pipe';
import { UnhashPipe } from './pipes/unhash.pipe';
import { HomeComponent } from './pages/home/home.component';

import { StoreModule } from '@ngrx/store';
import { postReducer } from './reducers/post.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    ListComponent,
    SingleComponent,
    TruncatePipe,
    TagsPipe,
    UnhashPipe,
    NavComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ recipes: postReducer }),
  ],
  providers: [
    MealdbService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
