import { Component } from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';
import { ICategory } from '../Shared Classes and types/ICategory';
import { DiscountOffers } from '../Shared Classes and types/DiscountOffers';
import { ProductServiceService } from '../services/product-service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  discount: DiscountOffers;
  storeName: string;
  storeLogo:string;
  productList:IProduct[];
  clientName:string;
  isPurchased:boolean;
  categoryList: ICategory[];
  errorMessage:any;




  constructor(  private productService: ProductServiceService)   {
    this.discount=DiscountOffers.tenpercent;
    this.storeName='Meow Store';
    this.storeLogo='./assets/img.jpg';
    this.categoryList=[
      {
        id:1,
        name:"Electronics"
      },
      {
        id:2,
        name:"Cloths"
      },
      {
        id:3,
        name:"Food"
      }

    ];
    this.clientName="nada";
    this.isPurchased=false;

  }
  buy() {
    this.isPurchased = true;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.renderValues();
    console.log(this.productList);

  }
  renderValues() {
    this.productService.getAllProducts().subscribe(
{  next:data=>this.productList=data,
  error:error=>this.errorMessage=error}
    );
  }

}
