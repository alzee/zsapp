import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  seg = 1;
  nodes: any;
  nodes1: any;
  nodes2: any;
  nodes3: any;

  constructor() { }

  ngOnInit() {
    this.nodes1 = [
      {
        title: 'daf adsf ',
        author: 'adsfm',
        date: '123 123'
      },
      {
        title: 'daf adsf ',
        author: 'adsfm',
        date: '123 123'
      },
      {
        title: 'daf adsf ',
        author: 'adsfm',
        date: '123 123'
      },
      {
        title: 'daf adsf ',
        author: 'adsfm',
        date: '123 123'
      },
      {
        title: 'daf adsf ',
        author: 'adsfm',
        date: '123 123'
      },
      {
        title: 'daf adsf ',
        author: 'adsfm',
        date: '123 123'
      },
      {
        title: 'daf adsf ',
        author: 'adsfm',
        date: '123 123'
      },
    ];
    this.nodes2 = [
      {
        title: 'daf adsf ',
        author: 'adsfm',
        date: '123 123'
      },
      {
        title: 'daf adsf ',
        author: 'adsfm',
        date: '123 123'
      },
      {
        title: 'daf adsf ',
        author: 'adsfm',
        date: '123 123'
      },
      {
        title: 'daf adsf ',
        author: 'adsfm',
        date: '123 123'
      },
      {
        title: 'daf adsf ',
        author: 'adsfm',
        date: '123 123'
      },
    ];
    this.nodes3 = [
      {
        title: 'daf adsf ',
        author: 'adsfm',
        date: '123 123'
      },
      {
        title: 'daf adsf ',
        author: 'adsfm',
        date: '123 123'
      },
      {
        title: 'daf adsf ',
        author: 'adsfm',
        date: '123 123'
      },
    ];

    this.nodes = this.nodes1;
  }

  segmentChanged(e){
    this.seg = +e.detail.value;
    console.log(this.seg);
    switch (this.seg) {
      case 1:
        this.nodes = this.nodes1;
        break;
      case 2:
        this.nodes = this.nodes2;
        break;
      case 3:
        this.nodes = this.nodes3;
        break;
    }
  }

  loadData(e){
  }
}
