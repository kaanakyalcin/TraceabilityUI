import { filter, map, skip } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import {OnInit, Component} from '@angular/core';
import { Product } from '../../Product';
import { ProductService } from '../../services/product.service';
import { TraceService } from '../../services/trace.service';
import { Trace } from 'src/app/Trace';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  trace: Trace;
  
  product: Product;
  barcode: string;

  lotId: string;
  expirationDate: Date;

  constructor(private productService : ProductService, 
    private activatedRoute : ActivatedRoute, 
    private traceService : TraceService,
    private alertifyService: AlertifyService) { }

  ngOnInit(): void {
    
    this.activatedRoute.queryParams.pipe(filter(params => 'barcode' in params))
    .subscribe(params => {
      this.barcode = params.barcode;
      console.log(this.barcode);
      this.productService.getProduct(this.barcode).subscribe(res => (this.product = res));
    });
  }

  onSelect(lotId: string, expirationDate: Date){

    if(lotId.length == 0 && expirationDate.toString().length == 0){
      //Lütfen LotId veya Son kullanma tarihi giriniz.;
      this.alertifyService.warning("Lütfen LotId veya Son kullanma tarihi giriniz.");
      return;
    }

    this.lotId = lotId;
    this.expirationDate = expirationDate;

    console.log(this.lotId);
    console.log(this.expirationDate);

    this.traceService.getTrace(this.barcode, this.lotId, this.expirationDate).subscribe(res => (this.trace = res));

    console.log(this.trace);
  }

}
