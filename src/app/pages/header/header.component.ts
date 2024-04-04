import { CartService } from '../services/carts.service';
import { Component, OnInit, EventEmitter, Output, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { ProductService } from 'src/app/pages/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 totalItem :number =0 ;
  constructor(@Inject(DOCUMENT) private document: any,
    public cartService :CartService ,
   ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(()=>{
            this.totalItem =this.cartService.total
    })


  }
 
}
