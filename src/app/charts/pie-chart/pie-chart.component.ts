import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  pieChartData: number[] = [680,870];
  pieChartLabels: string[] = ['Flow','Mads'];
  colors: any[] = [
    {
      backgroundColor: ['#26547c','#ff6b6b'],
      borderColor: '#111'
    }
  ];
  pieChartType = 'doughnut';

  ngOnInit() {
  }

}
