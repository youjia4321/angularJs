import { Injectable } from '@angular/core';
import { Product, Comment } from '../products'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    new Product(1, '华硕', 899, 3, '这是一个垃圾电脑', '../../assets/images/1.jpg', ['电子产品', '家电']),
    new Product(2, '战神', 999, 4.5, '这是一个垃圾电脑', '../../assets/images/2.jpg', ['电子产品', '图书']),
    new Product(3, '戴尔', 1899, 3, '这是一个垃圾电脑', '../../assets/images/3.jpg', ['电子产品', '家电']),
    new Product(4, '三星', 2899, 4.5, '这是一个垃圾电脑', '../../assets/images/4.jpg', ['电子产品', '家电']),
    new Product(5, '苹果', 799, 2.5, '这是一个垃圾电脑', '../../assets/images/5.jpg', ['电子产品', '家电']),
    new Product(6, '惠普', 699, 3.5, '这是一个垃圾电脑', '../../assets/images/6.jpg', ['电子产品', '家电'])
  ];

  private comments: Comment[] = [
    new Comment(1,1,"2018-12-6",4,"zhag",'真心不错'),
    new Comment(2,1,"2018-12-6",3.5,"zng",'真心不错'),
    new Comment(3,2,"2018-12-6",5,"zhag",'真心不错'),
    new Comment(4,4,"2018-12-6",4,"ng",'真心不错'),
    new Comment(5,3,"2018-12-6",4.5,"hang",'真心不错'),
    new Comment(6,6,"2018-12-6",3.2,"ang",'真心不错'),
    new Comment(7,5,"2018-12-6",3,"zhg",'真心不错'),
    new Comment(1,1,"2018-12-6",4,"ad",'真心不错'),
    new Comment(2,1,"2018-12-6",3.5,"aed",'真心不错'),
    new Comment(3,2,"2018-12-6",5,"abc",'真心不错'),
    new Comment(4,3,"2018-12-6",4,"ee",'真心不错'),
    new Comment(5,3,"2018-12-6",4.5,"sda",'真心不错'),
    new Comment(6,6,"2018-12-6",3.2,"ww",'真心不错'),
    new Comment(7,5,"2018-12-6",3,"zwwg",'真心不错'),
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id:number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id );
  }
}

