import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
  
  @Input() // 星级评价这个rateing属性应该由父组件传递
  private rating: number = 0;

  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();
  // 输出属性的名字必须是输入属性的名字加上Change才能在模板使用双向绑定,[(rating)]="newRating"
  private stars: boolean[];

  @Input()
  private readonly: boolean = true;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    this.stars = []
    for (let i=1; i<=5; i++){
      this.stars.push(i > this.rating)
    }
  }

  clickStar(index: number) {
    if(!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }

}
