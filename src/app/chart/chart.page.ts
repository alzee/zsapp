import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit {
  seg = 1;

  constructor() { }

  ngOnInit() {
  }

  changeChart(e){
    this.seg = +e.detail.value;
    console.log(this.seg);
  }

}
