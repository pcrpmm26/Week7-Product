import { Injectable } from '@angular/core';
import { Product } from './components/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() : Product[]{
    return [
      new Product(1,"Fried Chicken",100,0,"https://www.kfc.co.th/Content/BrandSite/category/tile/desk/th-TH_tile-lg-2.jpg"),
      new Product(2,"Nugget",100,20,"https://imgsrv2.voi.id/_bWYFKgHILFn9fnTwAk2AQOk128mtDosiL3J1gej9z4/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy85MDk1LzIwMjAwNzIwMTkwNC1tYWluLmpwZWc.jpg"),
      new Product(3,"Mashed Potato",100,0,"https://secretmenusource.com/wp-content/uploads/2014/01/kfc-mashed-potatoes.jpg"),
      new Product(4,"Egg Tart",100,20,"http://www.thaiall.com/blogacla/wp-content/uploads/2012/05/kfc-egg-tart.jpg"),
      new Product(5,"Chicken Burger",100,20,"https://img.taste.com.au/QboTdhiL/taste/2020/06/kfc-burger-america-162713-2.jpg"),
    ];
  }
}
