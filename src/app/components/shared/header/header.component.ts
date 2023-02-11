import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Header } from '../../core/interfaces/component/header/header.interface';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  header!: Header;
  loading: boolean = true;

  constructor(private content: ContentService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.content.requestDataFromPath<Header>('/assets/content/pages/base', 'header')
    .then(data => {
      this.header = data;
      this.header.title = this.header.title.toUpperCase();
      this.header.subtitle = this.header.subtitle.toUpperCase();
    })
    .finally(() => {
      this.loading = false;
    });
  }

}
