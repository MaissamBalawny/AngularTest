
import { CartService } from './../services/carts.service';
import { Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { Subject } from "rxjs";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { DataTableDirective } from "angular-datatables";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ProductService } from "../services/products.service";
import { ProductDetalisComponent } from "./product-detalis/product-detalis.component";
import { ConfirmationMessageComponent } from "src/app/shared/confirmation-message/confirmation-message.component";



@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements  OnInit {
 @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective | undefined;
  dtOptions: any = {};
  productList:any[] =[];
  count:any ;
  @Input() productId: number = 0;
  @Input() inputValue: any;
  @Input () totalItem :any
  dtTrigger: Subject<any> = new Subject<any>();
  constructor( private toastr: ToastrService,
    private spinner: NgxSpinnerService, 
    private productService :ProductService ,
    private cartService:CartService,
    private modalService: NgbModal) {}
  ngOnInit(): void {
     this.spinner.show();
     this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10,
      serverSide: true,
      processing: true,
      searchDelay: 1000,
      paging: true,
      search: { return: true },
     
      }
      this.getProducts()
   
  }

  getProducts(){
    this.productService.getProducts().subscribe({
      next: (result:any) => {
    this.productList =result;
    this.dtTrigger.next(this.productList)
    this.productList.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price})
    })
        this.spinner.hide();
      },
      error: (error:any) => {
        var message = error.error.message;
        if (!message) message = "Unknown error occurred, Contact The System Administrator";

        this.toastr.error(message, "Oops :(");
      },
    });
  }
  productDetalis(id:any){
   var modalRef = this.modalService.open(ProductDetalisComponent);
   modalRef.componentInstance.productId = id;

  }
  deleteProducts(ProductId:any){
    var confirmation = this.modalService.open(ConfirmationMessageComponent);
    confirmation.result.then((result) => {
      if (result) {
        this.spinner.show();
        this.productService.deleteProduct(ProductId).subscribe({
          next: () => {
            this.toastr.success("Product Deleted");
            this.spinner.hide();
          }
        });
      }
    });

  }
  addToCart(product:any){
    this.cartService.addtoCart(product);
  }

  }


