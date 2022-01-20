import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  seg = 1;
  page: any = [0,0,0,0,0,0,0,0];
  nodes: any = [];
  nodesAll: any = [];

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.getNodes();
  }

  segmentChanged(e){
    this.seg = +e.detail.value;
    console.log(this.seg);
    if (!this.nodesAll[this.seg]) {
      this.getNodes();
      console.log(this.seg);
    } else {
      this.nodes = this.nodesAll[this.seg];
    }
  }

  getNodes(){
    this.httpService.get(`nodes/${this.seg}?page=${this.page[this.seg]}`).subscribe((res) => {
      if (this.page[this.seg] > 0) {
        this.nodes = [...this.nodes, ...res];
      } else {
        this.nodes = res;
      }
      this.nodesAll[this.seg] = this.nodes;
    });
  }

  loadData(e){
    setTimeout(() => {
      console.log('Done');
      e.target.complete();
      this.page[this.seg] += 1;
      this.getNodes();
      if (this.nodes.length === 50) {
        e.target.disabled = true;
      }
    }, 500);
  }

  doRefresh(e){
    console.log('Begin async operation');
    this.nodes = [];
    this.page[this.seg] = 0;
    this.seg = 1;
    setTimeout(() => {
      console.log('Async operation has ended');
      this.getNodes();
      e.target.complete();
    }, 1000);
  }
}
