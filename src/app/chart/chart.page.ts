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
        label: 'Open',
        data: opens,
        backgroundColor: 'rgba(255, 199, 132, 0.2)',
        borderColor: 'rgba(255, 99, 32, 0.8)',
        borderWidth: 2
      },{
        label: 'High',
        data: highs,
        backgroundColor: 'rgba(55, 99, 132, 0.4)',
        borderColor: 'rgba(55, 99, 132, 0.8)',
        borderWidth: 2
      }, {
        label: 'Low',
        data: lows,
        backgroundColor: 'rgba(155, 99, 132, 0.4)',
        borderColor: 'rgba(155, 99, 132, 0.8)',
        borderWidth: 2
      }, {
        label: 'Close',
        data: closes,
        backgroundColor: 'rgba(55, 99, 232, 0.4)',
        borderColor: 'rgba(55, 99, 132, 0.8)',
        borderWidth: 2
      }]
    };
    this.changeChart({detail: {
      value : 'bar'
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
 /* 
  changeChart(e){
    this.seg = +e.detail.value;
    console.log(this.seg);
  }
 */
}
