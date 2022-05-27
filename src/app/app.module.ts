import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosDestacadosComponent } from './components/section/productos-destacados/productos-destacados.component';
import { SobreNosotrosComponent } from './components/section/sobre-nosotros/sobre-nosotros.component';
import { ProductosComponent } from './components/section/productos/productos.component';
import { NoticiasComponent } from './components/section/noticias/noticias.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HomeComponent, ProductosDestacadosComponent, SobreNosotrosComponent, ProductosComponent, NoticiasComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
