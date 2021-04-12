// NG
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Root and route
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Components
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { ListComponent, SingleComponent } from './components/recipe/recipe.component';
import { TagsComponent } from './components/tags/tags.component';
// Services
import { MealdbService } from './services/recipes.service';
// Pipes
import { TruncatePipe } from './pipes/truncate.pipe';
import { TagsPipe } from './pipes/tags.pipe';
import { UnhashPipe } from './pipes/unhash.pipe';
// Pages
import { HomeComponent } from './pages/home/home.component';
import { SavedComponent } from './pages/saved/saved.component';
// Store (a.k.a state)
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
    TagsComponent,
    SavedComponent,
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
