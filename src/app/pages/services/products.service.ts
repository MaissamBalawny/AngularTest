import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponent } from 'src/app/global-component';
import { products } from '../Products/models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }
  getProducts()  {
    return this.httpClient.get<products[]>(GlobalComponent.API_URL + `/products`);
  }
  getProductById(id:any){
    return this.httpClient.get<products[]>(GlobalComponent.API_URL + `/products/${id}`); 
  }
  getAllCategories(){
    return this.httpClient.get<products[]>(GlobalComponent.API_URL + `/products/categories`)
  }
  addProduct(title:any,price:any,description:any,image:any,category:any){
    var reuestModel={
      title,
      price,
      description,
      image,
      category
    }
    return this.httpClient.post<products[]>(GlobalComponent.API_URL + `/products` , reuestModel )
  }
  deleteProduct(id:any){
    return this.httpClient.delete<products[]>(GlobalComponent.API_URL +`/products/${id}` )
  }

 

}
