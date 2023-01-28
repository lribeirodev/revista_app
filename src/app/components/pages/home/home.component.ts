import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagesService } from '../../core/services/pages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private page: PagesService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.page.changeTitle(this.route);
  }

}
