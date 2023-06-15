import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit{
  @Output() columnsCountChange = new EventEmitter<number>();
sort: string = 'descending';
itmesShowCount: number = 12;
constructor() { }

ngOnInit(): void {}
onSortUpdate(newSort: string) {
  this.sort = newSort;
}
onItemsUpdate(count: number) {
  this.itmesShowCount = count;
}
onColumnsUpdate(colsNum: number): void {
  this.columnsCountChange.emit(colsNum);
}





}
