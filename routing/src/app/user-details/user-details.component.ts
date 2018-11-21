import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public id: string;
  public user: User = new User('','');;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.user.id = params.id;
    })

    this.activatedRoute.queryParams.subscribe(qParams => {
      this.user.name = qParams.name;
    })

    console.log(this.activatedRoute.fragment['_']);
    // this.id = this.activatedRoute.snapshot.params.id;
  }

}
