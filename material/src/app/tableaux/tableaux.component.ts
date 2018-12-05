import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../shared/models/user.model';
import { DataService } from '../shared/services/data.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-tableaux',
  templateUrl: './tableaux.component.html',
  styleUrls: ['./tableaux.component.css']
})
export class TableauxComponent implements OnInit {
  public users: User[];
  public dataSource: MatTableDataSource<User>;
  public displayColumns: string[] = ['gender', 'cell', 'email', 'nat', 'phone'];
  @ViewChild('paginator' ) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchUsers().subscribe(users => {
      this.users = users;      
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public updateFilter(filter: string): void {
    filter = filter.trim().toLowerCase();
    this.dataSource.filter = filter;
  }

}
