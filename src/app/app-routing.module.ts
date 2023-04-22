
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { AnnonceComponent } from './annonce/annonce.component';




const routes: Routes = [

 // {path: "annonce/add", loadChildren: () => import('./annonce/annonce.module').then(m => m.AnnonceModule) },
  {path:"home", component: HomeComponent}, 
  {path:"Product", component: ProductComponent},
  {path :" ", redirectTo:'home', pathMatch:"full"},
  {path:"**",component:NotfoundComponent},
  {path: "annonce",component: AnnonceComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
