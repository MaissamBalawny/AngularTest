import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-product-detalis',
  templateUrl: './product-detalis.component.html',
  styleUrls: ['./product-detalis.component.scss']
})
export class ProductDetalisComponent {
  @Input() public productId: any ;
  data:any

  constructor(
    private activeModal: NgbActiveModal,
    private productService :ProductService
   
  ) { }

  ngOnInit(): void {
      this.productService.getProductById(this.productId).subscribe({
        next: (result :any) => {
          this.data =result
        },
      });
    }
 

  dismiss() {
    this.activeModal.dismiss();
  }
}
