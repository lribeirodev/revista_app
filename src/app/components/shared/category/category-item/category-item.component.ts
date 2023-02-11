import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryItem } from 'src/app/components/core/interfaces/component/category/category.interface';
import { CategoriesService } from 'src/app/components/core/services/categories.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

  @Input() item!: CategoryItem;

  constructor(private route: Router, private categoryService: CategoriesService,) { }

  ngOnInit(): void {
  }

  public openCategory(): void {
    this.categoryService.setCategoriesTitle(this.item.categoriesTitle);
    this.route.navigate([`/Categories/${this.item.categoriesName}`]);
  }

}
