import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './models/components/paging-header/paging-header.component';
import { PagerComponent } from './models/components/pager/pager.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { OrderTotalsComponent } from './models/components/order-totals/order-totals.component';



@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent,
    OrderTotalsComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    CarouselModule,
    OrderTotalsComponent
  ]
})
export class SharedModule { }
