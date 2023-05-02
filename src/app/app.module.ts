import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcompComponent } from './firstcomp/firstcomp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { ProductswithdiscountComponent } from './productswithdiscount/productswithdiscount.component';
import { ProductnodiscountComponent } from './productnodiscount/productnodiscount.component';
import { CommentsComponent } from './comments/comments.component';
import { PostcommentsComponent } from './postcomments/postcomments.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstcompComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    UsersComponent,
    PostsComponent,
    HomeComponent,
    ProductswithdiscountComponent,
    ProductnodiscountComponent,
    CommentsComponent,
    PostcommentsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
