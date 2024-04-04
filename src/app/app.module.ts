import { NgSelectModule } from '@ng-select/ng-select';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './pages/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModule, NgbToastModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './pages/Products/products.component';
import { ProductDetalisComponent } from './pages/Products/product-detalis/product-detalis.component';
import { AddToCartComponent } from './pages/Products/add-to-cart/add-to-cart.component';
import { DataTablesModule } from 'angular-datatables';
import { HeaderComponent } from './pages/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent ,
    ProductsComponent ,
    ProductDetalisComponent,
    AddToCartComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    DataTablesModule,
    FormsModule,
    NgbToastModule,
    NgbDropdownModule ,
    FlatpickrModule.forRoot(),
    NgbDropdownModule,
    NgbTypeaheadModule, 
    SharedModule,
    NgbModule,
    NgSelectModule ,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
