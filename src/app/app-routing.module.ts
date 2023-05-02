import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { ProductswithdiscountComponent } from './productswithdiscount/productswithdiscount.component';
import { ProductnodiscountComponent } from './productnodiscount/productnodiscount.component';
import { PostcommentsComponent } from './postcomments/postcomments.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: 'products-with-discount',
        component: ProductswithdiscountComponent,
      },
      {
        path: 'products-without-discount',
        component: ProductnodiscountComponent,
      },
    ],
  },
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  {
    path: 'posts/:id',
    component: PostcommentsComponent,
    children: [{ path: 'comments', component: CommentsComponent }],
  },
  { path: '**', component:PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
