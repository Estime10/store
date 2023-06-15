import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit{
  @Output() showCategory = new EventEmitter<string>();
  categories: string[] = ['shoes', 'shirts',
  'pants', 'hats', 'socks', 'accessories'];


  constructor() { }
  ngOnInit(): void {
  }

onShowCategory(category: string): void {
  this.showCategory.emit(category);
}


}
