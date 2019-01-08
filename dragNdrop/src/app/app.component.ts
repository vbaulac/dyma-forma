import { Component } from '@angular/core';
import { List } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dragNdrop';

  public listLabel = '';
  public lists: List[] = [
    {
      label: 'to do',
      items: [
        { content: 'create list' },
        { content: 'populate list' },
        { content: 'improve UI' }
      ]
    }
  ];

  public itemContent = '';

  public addList(): void {
    if (this.listLabel) {
      this.lists.push({
        label:this.listLabel,
        items: []
      });

      this.listLabel = '';
    }
  }

  public addItem(list: List) : void {
    if (this.itemContent) {
      list.items.push({
        content: this.itemContent
      });
      this.itemContent = '';
    }
  }
}
