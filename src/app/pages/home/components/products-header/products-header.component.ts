import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit{
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

sort: string = 'descending';
itmesShowCount: number = 12;
constructor() { }

ngOnInit(): void {}
onSortUpdate(newSort: string) {
  this.sort = newSort;
  this.sortChange.emit(newSort);
}
onItemsUpdate(count: number) {
  this.itmesShowCount = count;
  this.itemsCountChange.emit(count);
}
onColumnsUpdate(colsNum: number): void {
  this.columnsCountChange.emit(colsNum);
}





}
