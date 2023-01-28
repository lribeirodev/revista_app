import { Component, Input, OnInit } from '@angular/core';
import { CategoryItem } from 'src/app/components/core/interfaces/component/category/category.interface';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

  @Input() item!: CategoryItem;

  constructor() { }

  ngOnInit(): void {
  }

}
