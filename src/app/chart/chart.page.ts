import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements AfterViewInit, OnInit {
  seg = 1;

  @ViewChild('chartCanvas') chartCanvas : ElementRef;
  data : any = [];
  canvasChart : Chart;
  constructor(
  ) {}
  ngOnInit() {
    
  }
 
  async ngAfterViewInit() {
    let stocks = await fetch("assets/data/stocks.json").then(resp => resp.json());
    stocks = stocks[0];
    let opens = [];
    let closes = [];
    let highs = [];
    let lows = [];
    let volumes = [];
    let labels = [];
    Object.keys(stocks).forEach((key, index, array) => {
      if (index > 2) {
        return true;
      }
      labels.push(key);
      opens.push( this.addRandom(stocks[key].open) );
      closes.push( this.addRandom(stocks[key].close) );
      highs.push( this.addRandom(stocks[key].high) );
      lows.push( this.addRandom(stocks[key].low) );
      volumes.push(stocks[key].volume);
    });
    
    this.data = {
      labels: labels,
      datasets: [{
        label: '废钢',
        data: opens,
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 205, 86)',
            '#36a2eb',
            '#22cfcf'
        ],
        // backgroundColor: 'rgba(255, 199, 132)',
        // backgroundColor: 'rgba(255, 199, 132, 0.2)',
        // borderColor: 'rgba(255, 99, 32, 0.8)',
        borderWidth: 2
      },{
        label: '不锈钢',
        data: highs,
        backgroundColor: [
            '#36a2eb',
            '#22cfcf',
            'rgb(255, 99, 132)',
            'rgb(255, 205, 86)',
        ],
        // backgroundColor: 'rgba(55, 99, 132)',
        // backgroundColor: 'rgba(55, 99, 132, 0.4)',
        // borderColor: 'rgba(55, 99, 132, 0.8)',
        borderWidth: 2
      }, {
        label: '特钢',
        data: lows,
        backgroundColor: [
            '#22cfcf',
            'rgb(255, 99, 132)',
            '#36a2eb',
            'rgb(255, 205, 86)',
        ],
        // backgroundColor: 'rgba(155, 99, 132)',
        // backgroundColor: 'rgba(155, 99, 132, 0.4)',
        // borderColor: 'rgba(155, 99, 132, 0.8)',
        borderWidth: 2
      }, {
        label: '其它',
        data: closes,
        backgroundColor: [
            'rgb(255, 205, 86)',
            '#36a2eb',
            'rgb(255, 99, 132)',
            '#22cfcf'
        ],
        // backgroundColor: 'rgba(55, 99, 232)',
        // backgroundColor: 'rgba(55, 99, 232, 0.4)',
        // borderColor: 'rgba(55, 99, 132, 0.8)',
        borderWidth: 2
      }]
    };
    this.changeChart({detail: {
      value : 'doughnut'
    }});
  }
  changeChart( event: any ) {
    const type = event.detail.value || 'bar';
    if ( this.canvasChart ) {
      this.canvasChart.destroy();
    }
    this.canvasChart = new Chart(this.chartCanvas.nativeElement, {
      type: type,
      data: this.data,
      options: {
        indexAxis: 'x'
      }
    });
  }
  addRandom( points: any ) : number {
    return Number(points) - Number( Math.floor((Math.random() * 100) + 1) );
  }
}
