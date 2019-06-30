import { Component, OnInit } from '@angular/core';
import {LINE_CHART_COLORS } from '../../shared/chart.colors';

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [5,6,3,3,4,6,4], label: 'Mads point'},
  { data: [3,6,9,4,2,3,6], label: 'Flow point'}
];

const LINE_CHART_LABELS: string[] = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true
  };
  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;

  ngOnInit() {
  }

}
