import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList :any =[];
  public productList$ =new BehaviorSubject<any>([])
  public search = new BehaviorSubject<string>("");
  constructor(private httpClient: HttpClient) { }
 
  getProducts(){
    return this.productList$.asObservable();
  }
  public get total():number{
   return this.productList$.value.length;

  }
 
  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList$.next(product);
  }
  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList$.next(this.cartItemList);
  }
 

}
