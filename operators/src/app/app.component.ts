import { Component, OnInit } from '@angular/core';
import { of, interval, timer } from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'operators';

  ngOnInit() {
    const promesse = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('promesse resolve');
      }, 3000);
    })

    // of('test').subscribe(res => console.log(res));

    // from([1, 2, 3]).subscribe(res => console.log(res));

    // from(promesse).subscribe(res => console.log(res));

    // interval(1000).subscribe(res => console.log(res));

    // timer(5000).subscribe(res => console.log(res));
  }
}
