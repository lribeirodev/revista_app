import { Component, Input, OnInit } from '@angular/core';
import { CategorieItem } from 'src/app/components/core/interfaces/component/categories/categories.interface';

@Component({
  selector: 'app-categories-item',
  templateUrl: './categories-item.component.html',
  styleUrls: ['./categories-item.component.scss']
})
export class CategoriesItemComponent {

  @Input() item!: CategorieItem;
  @Input() isLast: boolean = false;
}
