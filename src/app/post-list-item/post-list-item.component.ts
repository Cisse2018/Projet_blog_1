import { Component, Input, OnInit } from '@angular/core';

//console.log('It works here')
@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() { 
  }

  onLoveIt(){
    this.loveIts += 1;
  }

  onDontLoveIt(){
    this.loveIts -= 1;
  }

  isloveItorNot(){
    if (this.loveIts>0)
      return 'vert';
    else if (this.loveIts<0)
            return 'rouge'
          else 
            return 'blank'
  }

  ngOnInit() {
  }

}
