import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditoriaPageComponent } from './components/pages/auditoria-page/auditoria-page.component';
import { ConsultoriaPageComponent } from './components/pages/consultoria-page/consultoria-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { InventarioPageComponent } from './components/pages/inventario-page/inventario-page.component';
import { OutsourcingPageComponent } from './components/pages/outsourcing-page/outsourcing-page.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"home"
  },
  {
    path:"home",
    component:HomePageComponent
  },
  {
    path:"product",
    component:ProductPageComponent
  },
  {
    path:"contact",
    component:ContactPageComponent
  },
  {
    path:"auditoria",
    component:AuditoriaPageComponent,
  },
  {
    path:"consultoria",
    component:ConsultoriaPageComponent
  },
  {
    path:"outsourcing",
    component: OutsourcingPageComponent
  },
  {
    path:"inventariado",
    component: InventarioPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{anchorScrolling:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
