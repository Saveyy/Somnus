import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[] = [
  { data: [54,76,98,34,24,67,76,87], label: 'temp1 chart data'},
  { data: [43,76,98,34,12,81,46,76], label: 'temp2 chart data'}
];

const SAMPLE_BARCHART_LABELS: string[] = ['l1', 'l2', 'l3', 'l4', 'l5','l6', 'l7', 'l8']

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {
  }

}
