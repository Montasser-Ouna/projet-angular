
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { AnnonceRoutingModule } from './annonce/annonce-routing.module';
import { ShopComponent } from './shop/shop.component';




const routes: Routes = [

 // {path: "annonce/add", loadChildren: () => import('./annonce/annonce.module').then(m => m.AnnonceModule) },
  {path:"home", component: HomeComponent}, 
  {path:"Product", component: ProductComponent},
  {path :" ", redirectTo:'home', pathMatch:"full"},
  {path: "annonce",component: AnnonceComponent},
  {path:"shop",component: ShopComponent},
  {path:"**",component:NotfoundComponent},
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,AnnonceRoutingModule]
})
export class AppRoutingModule { }
