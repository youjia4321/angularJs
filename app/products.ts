export class Product {
    constructor(
      public id: number,
      public title: string,
      public price: number,
      public rating: number,
      public desc: string,
      public imgUrl: string,
      public categories: Array<string>
    ){
  
    }
  }

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public rating: number,
    public user: string,
    public comment: string
    
  ){

  }
}