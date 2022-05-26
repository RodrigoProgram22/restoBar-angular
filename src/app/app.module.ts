import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosDestacadosComponent } from './components/section/productos-destacados/productos-destacados.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HomeComponent, ProductosDestacadosComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
