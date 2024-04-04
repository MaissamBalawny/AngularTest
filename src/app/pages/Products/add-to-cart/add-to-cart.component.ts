import { ProductService } from 'src/app/pages/services/products.service';
import { CartService } from './../../services/carts.service';
import { Component } from '@angular/core';
import { NgbActiveModal, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent {
  currentDate:any  ;
  quantity:any ;
  date:any ;
  private count :number =0;
  number:any
  userId:number =0;
  productList:any[]=[]
  selectedProductId:any
  constructor( private activeModal: NgbActiveModal,
    private cartService :CartService ,
    public formatter: NgbDateParserFormatter,
    private spinner :NgxSpinnerService ,
    private toastr:ToastrService ,
    private ProductService :ProductService ,
    )  {  var date = new Date();
      var firstDay = new Date(date.getFullYear(), date.getMonth(), 1, 8, 0, 0);
  
      this.date = { from: firstDay, to: new Date() };
  }
  ngOnInit(): void {
 this.getProducts()
  }
  getProducts(){
    this.ProductService.getProducts().subscribe({
      next: (result:any) => {
    this.productList =result;

        this.spinner.hide();
      },
      error: (error:any) => {
        var message = error.error.message;
        if (!message) message = "Unknown error occurred, Contact The System Administrator";

        this.toastr.error(message, "Oops :(");
      },
    });
  }
  // Add(){
  //   this.cartService.addToCart(this.userId ,this.currentDate,this.selectedProductId ,this.quantity).subscribe({
  //     next:(result)=>{
  //         this.toastr.success('Product Added To The Cart' ,'Done Sucessfully');
  //         this.count += 1 ;
  //         this.activeModal.dismiss(this.count)
      
  //     },
  //     error: (error:any) => {
  //       var message = error.error.message;
  //       if (!message) message = "Unknown error occurred, Contact The System Administrator";

  //       this.toastr.error(message, "Oops :(");
  //     }
  // })

  // }
  dismiss() {
    this.activeModal.dismiss();
  }
}
