import { Component } from '@angular/core';
import { PostListItemComponent } from './post-list-item/post-list-item.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet-blog';
  postListItem = [
    {
      title: 'First post',
      content: 'hfipbceuihbiujriojriojrorijio',
      loveIts: 5,
      created_at: new Date()
    },
    {
      title: 'deuxième post',
      content: 'hfipbceuihbiujriojriojrorijio',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Dernier post',
      content: 'hfipbceuihbiujriojriojrorijio',
      loveIts: 1,
      created_at: new Date()
    }
  ];

}
