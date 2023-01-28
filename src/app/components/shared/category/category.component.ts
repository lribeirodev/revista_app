import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mouse } from '../../core/enums/mouse.enum';
import { Category } from '../../core/interfaces/component/category/category.interface';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public loading: boolean = true;
  public category!: Category;
  public mouseIcon: string = Mouse.WAITING;

  private mouseDown : boolean = false;
  private scrollLeft: any;
  private startX : any;

  constructor(private content: ContentService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.content.requestData<Category>(this.route, 'category')
    .then(data => {
      this.category = data;
    })
    .finally(() => {
      this.loading = false;
    });
  }

  startDragging(event: any, el: any): void {
    this.mouseDown = true;
    this.mouseIcon = Mouse.START;
    this.startX = event.pageX - el.offsetLeft;
    this.scrollLeft = el.scrollLeft;
  }

  stopDragging(event: any): void {
    this.mouseDown = false;
    this.mouseIcon = Mouse.WAITING;
  }

  mouseMove(event: any, el: any): void {
    event.preventDefault();
    if(!this.mouseDown){
      return;
    }

    const x = event.pageX - el.offsetLeft;
    const scroll = x - this.startX;
    el.scrollLeft = this.scrollLeft - scroll;

  }


}
