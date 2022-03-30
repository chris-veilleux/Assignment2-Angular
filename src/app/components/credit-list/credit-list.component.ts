import { Credit } from '../../shared/credit';
import { ApiService } from '../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css'],
})
export class CreditListComponent implements OnInit {
  CreditData: any = [];
  dataSource: MatTableDataSource<Credit>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
    '_id',
    'name',
    'number',
    'balance',
  ];


  
  constructor(private creditApi: ApiService) {
    this.creditApi.GetCredit().subscribe((data) => {
      this.CreditData = data;
      this.dataSource = new MatTableDataSource<Credit>(this.CreditData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  ngOnInit() {}

  deleteCredit(index: number, e) {
    if (window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice(
        this.paginator.pageIndex * this.paginator.pageSize + index,
        1
      );
      this.dataSource.data = data;
      this.creditApi.DeleteCredit(e._id).subscribe();
    }
  }
}
