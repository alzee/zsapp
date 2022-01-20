import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

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
  nodes7: any;

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.httpService.get('nodes/1').subscribe((res) => {
      this.nodes1 = res;
      this.nodes = this.nodes1;
      console.log(res);
    });
  }

  segmentChanged(e){
    this.seg = +e.detail.value;
    console.log(this.seg);
    switch (this.seg) {
      case 1:
        this.nodes = this.nodes1;
        break;
      case 2:
        if (!this.nodes2) {
          this.httpService.get('nodes/2').subscribe((res) => {
            this.nodes2 = res;
            this.nodes = this.nodes2;
            console.log(res);
          });
        }
        this.nodes = this.nodes2;
        break;
      case 7:
        if (!this.nodes7) {
          this.httpService.get('nodes/7').subscribe((res) => {
            this.nodes7 = res;
            this.nodes = this.nodes7;
            console.log(res);
          });
        }
        this.nodes = this.nodes7;
        break;
    }
  }

  loadData(e){
    setTimeout(() => {
      console.log('Done');
      e.target.complete();

      if (this.nodes.length === 50) {
        e.target.disabled = true;
      }
    }, 500);
  }

  doRefresh(e){
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      e.target.complete();
    }, 1000);
  }
}
