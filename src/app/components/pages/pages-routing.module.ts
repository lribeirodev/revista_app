import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: "Home",
    data: {
      title: "Revista - Encontre o que precisa",
      content: "/assets/content/pages/home/"
    },
    component: PagesComponent,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: "Categories/:id",
    data: {
      title: "Revista - Um pouco de tudo pertinho de você",
      content: "/assets/content/pages/categories/"
    },
    component: PagesComponent,
    loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule),
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/Home",
  },
  {
    path: "**",
    redirectTo: "/Home",
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
