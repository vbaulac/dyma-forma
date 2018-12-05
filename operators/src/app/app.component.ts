import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, interval, timer, Observable, merge, Subscription, combineLatest } from 'rxjs';
import { from } from 'rxjs';
import { map, switchMap, flatMap, tap, take } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'operators';
  public user;
  private sub: Subscription;

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

    // of({
    //   name: 'tintin',
    //   telephone: '++6152345552',
    //   password: '123'
    // }).pipe(
    //   map( user => { // map transforms (like select in c#)
    //     return { name: user.name,
    //              phone: user.telephone
    //     };
    //   }),
    //   tap( user => { // tap permet de faire des operation non transformantes
    //     this.user = user;
    //   }),
    //   switchMap(() => { // switchMap for async stuff
    //     return of('test');
    //   }),
    //   flatMap( user => { // flatmap est "bloquant", il execute forcément son code, meme si une nouvelle valeur est retourné par l'observable du dessus
    //     return of('hello');
    //   })
    // )
    // .subscribe(res => console.log(res));    

    const streamA = this.createStream('A', 3, 1000);
    // streamA.subscribe();

    const streamB = this.createStream('B', 5, 200);
    // streamB.subscribe();

    // this.sub = merge(streamA, streamB).pipe(
    //   tap(res => {
    //     console.log(res);
    //     console.log('MERGE EMIT');
    //   }))
    // .subscribe(( )=> {

    // });

    combineLatest(streamA, streamB).subscribe((res) => {
      console.log(res);
      console.log('COMBINELATEST EMIT');
    });

    // first, takeUntil(timer())
  }

  public createStream(name: string, iteration: number, delay: number): Observable<any> {
    return interval(delay).pipe(
      take(iteration), // take arrête le flux de donnée aprés x itérations, et ça unsubcribe tt seul donc
      tap( res => {
        console.log(`[Stream - ${name}] : ${res}`)
      })
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
