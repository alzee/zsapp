import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  seg = 1;

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(e){
    this.seg = +e.detail.value;
    console.log(this.seg);
  }

}
