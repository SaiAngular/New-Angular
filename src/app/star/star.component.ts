import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges, OnInit {
  
  @Input() rating:number = 0;
  cropWidth = 75;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();


    ngOnInit() {

      //console.log(this.rating);

    }

  ngOnChanges(): void {


    this.cropWidth = this.rating * 75 / 5;
  }

  onClick():void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}

