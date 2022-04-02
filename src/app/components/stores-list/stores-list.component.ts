import { Store } from './../../shared/store';
import { ApiService } from './../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.css']
})
export class StoresListComponent implements OnInit {
  StoreData: any = [];
  dataSource: MatTableDataSource<Store>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
    '_id',
    'name',
    'url',
    'location',
  ];

  constructor(private storeApi: ApiService) {
    this.storeApi.GetStores().subscribe((data) => {
      this.StoreData = data;
      this.dataSource = new MatTableDataSource<Store>(this.StoreData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  ngOnInit() {}

  deleteStore(index: number, e) {
    if (window.confirm('Are you sure you want to delete this stadium?')) {
      const data = this.dataSource.data;
      data.splice(
        this.paginator.pageIndex * this.paginator.pageSize + index,
        1
      );
      this.dataSource.data = data;
      this.storeApi.DeleteStore(e._id).subscribe();
    }
  }
}
