// Modules
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from './bootstrap.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation';

// ROUTES
import { ROUTES } from './app.routes';

// Commom Components
import { NotFoundComponent } from './commom/not-found/not-found.component';
import { ApplicationErrorHandler } from './commom/errors/app-error-handler';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './product-form/product-form.component';

// Services
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BootstrapModule,
    HttpClientModule,
    CustomFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ProductService,
    {provide: ErrorHandler, useClass: ApplicationErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
