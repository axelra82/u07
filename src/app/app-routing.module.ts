import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SingleComponent } from './components/recipe/recipe.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'recipe/:id',
    component: SingleComponent
  },
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
