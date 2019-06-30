import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[] = [
  { data: [5,6,3,3,4,6,4,4], label: 'Mads point'},
  { data: [3,6,9,4,2,3,6,7], label: 'Flow point'}
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
