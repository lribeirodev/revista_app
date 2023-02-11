import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategorieItem } from '../../core/interfaces/component/categories/categories.interface';
import { CategoriesService } from '../../core/services/categories.service';
import { ContentService } from '../../core/services/content.service';
import { PagesService } from '../../core/services/pages.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  categorieItems!: CategorieItem[];
  title!: string | null;
  sub!: Subscription;

  constructor(private pageService: PagesService, private activatedRoute: ActivatedRoute, private contentService: ContentService, private categoryService: CategoriesService, private router: Router,) { }

  ngOnInit(): void {
    this.pageService.changeTitle(this.activatedRoute);
    this.sub = this.categoryService.getCategoriesTitle().subscribe(title => this.title = title);

    this.activatedRoute.paramMap.subscribe(param => {
      const ID = param.get("id");
      if(ID){
        this.contentService.requestDataFromRoute<CategorieItem[]>(this.activatedRoute, ID)
        .then(items => this.categorieItems = items);
      }
    });
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }

  public isLastItem(index: number): boolean {
    return this.categorieItems.length-1 === index;
  }

  public backHome(): void {
    this.router.navigate(["/Home"]);
  }

}
