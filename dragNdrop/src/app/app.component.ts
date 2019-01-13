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

  public switchItem($event: { 
    src: {
      itemIndex: number,
      listIndex: number
    }, 
    dst: {
      itemIndex: number,
      listIndex: number
    }}): void {

    // const tmp = this.lists[$event.src.listIndex].items[$event.src.itemIndex];
    // this.lists[$event.src.listIndex].items[$event.src.itemIndex] = this.lists[$event.dst.listIndex].items[$event.dst.itemIndex];
    // this.lists[$event.dst.listIndex].items[$event.dst.itemIndex] = tmp;

    [this.lists[$event.src.listIndex].items[$event.src.itemIndex], 
    this.lists[$event.dst.listIndex].items[$event.dst.itemIndex]] = [ this.lists[$event.dst.listIndex].items[$event.dst.itemIndex],
                                                                      this.lists[$event.src.listIndex].items[$event.src.itemIndex]];
  }

  public transferItem($event: { 
    src: {
      itemIndex: number,
      listIndex: number
    }, 
    dst: {
      listIndex: number
    }}): void {

      this.lists[$event.dst.listIndex].items.push(this.lists[$event.src.listIndex].items[$event.src.itemIndex]);
      this.lists[$event.src.listIndex].items.splice($event.src.itemIndex, 1);
  }
}
