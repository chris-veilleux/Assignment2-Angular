import { Sport } from './../../shared/sport';
import { ApiService } from './../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.css'],
})
export class SportsListComponent implements OnInit {
  SportData: any = [];
  dataSource: MatTableDataSource<Sport>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
    '_id',
    'name',
    'players',
  ];


  
  constructor(private sportApi: ApiService) {
    this.sportApi.GetSports().subscribe((data) => {
      this.SportData = data;
      this.dataSource = new MatTableDataSource<Sport>(this.SportData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  ngOnInit() {}

  deleteSport(index: number, e) {
    if (window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice(
        this.paginator.pageIndex * this.paginator.pageSize + index,
        1
      );
      this.dataSource.data = data;
      this.sportApi.DeleteSport(e._id).subscribe();
    }
  }
}