import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductCardComponent } from './components/cards/product-card/product-card.component';
import { AuditoriaPageComponent } from './components/pages/auditoria-page/auditoria-page.component';
import { ConsultoriaPageComponent } from './components/pages/consultoria-page/consultoria-page.component';
import { OutsourcingPageComponent } from './components/pages/outsourcing-page/outsourcing-page.component';
import { InventarioPageComponent } from './components/pages/inventario-page/inventario-page.component';
import { ProductServiceCardComponent } from './components/cards/product-service-card/product-service-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductPageComponent,
    ContactPageComponent,
    NavBarComponent,
    ProductCardComponent,
    AuditoriaPageComponent,
    ConsultoriaPageComponent,
    OutsourcingPageComponent,
    InventarioPageComponent,
    ProductServiceCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
