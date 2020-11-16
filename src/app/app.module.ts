import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdcutsListComponent } from './pages/products/prodcuts-list/prodcuts-list.component';
import { ProdcutDetailsComponent } from './pages/products/prodcut-details/prodcut-details.component';
import { HeaderComponent } from './pages/common/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProdcutsListComponent,
    ProdcutDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
