import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosDestacadosComponent } from './components/section/productos-destacados/productos-destacados.component';
import { SobreNosotrosComponent } from './components/section/sobre-nosotros/sobre-nosotros.component';
import { ProductosComponent } from './components/section/productos/productos.component';
import { NoticiasComponent } from './components/section/noticias/noticias.component';
import { DeliveryComponent } from './components/section/delivery/delivery.component';
import { ContactoComponent } from './components/section/contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'nosotros', component: SobreNosotrosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'contactos', component: ContactoComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ProductosDestacadosComponent,
    SobreNosotrosComponent,
    ProductosComponent,
    NoticiasComponent,
    DeliveryComponent,
    ContactoComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
