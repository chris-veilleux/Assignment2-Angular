import { Promotion } from './../../shared/promotion';
import { ApiService } from './../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-promotions-list',
  templateUrl: './promotions-list.component.html',
  styleUrls: ['./promotions-list.component.css'],
})
export class PromotionsListComponent implements OnInit {
  PromotionData: any = [];
  dataSource: MatTableDataSource<Promotion>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
    '_id',
    'name',
    'percent_discount',
  ];


  
  constructor(private promotionApi: ApiService) {
    this.promotionApi.GetPromotions().subscribe((data) => {
      this.PromotionData = data;
      this.dataSource = new MatTableDataSource<Promotion>(this.PromotionData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  ngOnInit() {}

  deletePromotion(index: number, e) {
    if (window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice(
        this.paginator.pageIndex * this.paginator.pageSize + index,
        1
      );
      this.dataSource.data = data;
      this.promotionApi.DeletePromotion(e._id).subscribe();
    }
  }
}
