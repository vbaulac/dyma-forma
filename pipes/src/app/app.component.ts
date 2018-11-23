import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public date: number = Date.now();
  public nom: string = "jean";
  public name2: Promise<string>;
  public name3: Observable<number>;
  title = 'pipes';

  public names = [
    'Louis',
    'Louise',
    'Tintin',
    'Milou',
    'Juliette'
  ];

  ngOnInit(): void {
    this.name2 = new Promise( (resolve, reject) => {
      setTimeout( () => {
      resolve('Paul') 
    },3000)
    });

    this.name3 = interval(1000);
  }
}
