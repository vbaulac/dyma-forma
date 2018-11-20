import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription, Subject, BehaviorSubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'observableProject';

  ngOnInit() {

    // OBSERVABLE

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

    // SUBJECT

    const subject = new Subject<string>();

    subject.next('before subscribtion');

    const s1 = subject.subscribe((x) => { // just one callback so it is next
      console.log('[subscriber 1] : ', x);
    })
    
    const s2 = subject.subscribe((x) => {
      console.log('[subscriber 2] : ', x);
    })

    subject.next('after subscribtion');

    s1.unsubscribe();

    subject.next('s1 has unsubscribed');

    // BEHAVIOUR SUBJECT

    const behaviourSubject = new BehaviorSubject<string>('init value');

    behaviourSubject.next('first passed value');

    const behavS1 = behaviourSubject.subscribe((x) => console.log('[behavS1] just subscribe, value is : ', x));

    // PIPES

    const behavSubject2 = new BehaviorSubject<User>({
      name: 'Tom',
      age: 32,
      mail: 'super@super.su'
    });

    const mySubscriber = behavSubject2.pipe(
      filter((user: User) => {
        return user.age > 30;
      }),
      map((user: User) => {
        return user.mail;
      })
    ).subscribe((email: string) => {
      console.log(email);
    })

  }

  ngOnDestroy() {
    // we unsubscribe here most of the time
  }
}

interface User {
  name: string,
  age: number,
  mail: string
}
