import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products'
import { ProductService } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // public products: Array<Product>;
  public products: Product[];

  private keyword: string;

  private titleFilter: FormControl = new FormControl();

  constructor(private productService: ProductService) { 

    this.titleFilter.valueChanges.pipe(debounceTime(500)).subscribe(value => this.keyword = value)
    
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
