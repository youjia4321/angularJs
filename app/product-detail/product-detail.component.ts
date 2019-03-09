import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, Comment } from '../products';
import { ProductService } from '../shared/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  comments: Comment[];

  newRating: number = 5;

  newComment: string = "";

  isCommentHidden = true;

  constructor(
    private routeInfo: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit() {
    let productId: number = this.routeInfo.snapshot.params['id'];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }

  goBack(): void {
    this.location.back();
  }

  addComment() {
    let comment = new Comment(0, this.product.id, new Date().toDateString(), this.newRating, "someone", this.newComment);
    this.comments.unshift(comment); // unshift方法可向数组的开头添加一个或更多元素，并返回新的长度。将新项添加到数组末尾，请使用 push() 方法。

    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0)
    this.product.rating = sum / this.comments.length
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }
  
}
