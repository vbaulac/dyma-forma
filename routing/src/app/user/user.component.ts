import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {
  public users: User[] = [ { name: 'Vico', id: '0' }, { name: 'Barbara', id: '1' }, { name: 'Edouard', id: '2' }]

  constructor(private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => console.log(data.user));
  }

  userRedirection(id:string, name:string) {
    this.router.navigate(['/users', id], { queryParams: {
      name: name
    },
    queryParamsHandling: 'merge'});
  }
}
