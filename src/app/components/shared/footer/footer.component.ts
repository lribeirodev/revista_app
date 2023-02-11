import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Footer } from '../../core/interfaces/component/footer/footer.interface';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  loading: boolean = true;
  footer!: Footer;

  constructor(private content: ContentService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.content.requestDataFromPath<Footer>('/assets/content/pages/base','footer')
    .then(data => this.footer = data)
    .finally(() => {
      this.loading = false;
    });
  }

}
