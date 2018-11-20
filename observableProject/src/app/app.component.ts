import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'observableProject';

  ngOnInit() {
    const obs = Observable.create((observer: Observer<any>) => {
        const data = 2;
        observer.next(2);
        observer.next(3);
        observer.next(4);

        setTimeout(() => {
          observer.next(42);
        }, 2000);

        observer.error('this is an error !'); // complete and error arrêtent le flux de données
        observer.complete(); //
    });

    // const sub = obs.subscribe({
    //   next: x => console.log('[next] : ', x)
    // });

    const sub = obs.subscribe((x) => { // si il y a une seule fonction, elle correspond a la methode next, si il y en a 2, la 2nd est l'erreur
      console.log(x)
    });

    // const sub = obs.subscribe({
    //   next: x => console.log('[next] : ', x),
    //   complete: () => console.log('[complete]'),
    //   error: err => console.log('[error] : ', err)
    // });

    sub.unsubscribe();
  }

  ngOnDestroy() {
    
  }
}
