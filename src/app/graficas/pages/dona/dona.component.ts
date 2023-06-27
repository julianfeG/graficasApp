import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  // Doughnut
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others' ];
  public colors: string[] = [
    "#3C95F8",
    "#34ADD9",
    "#46F0EF",
    "#34D9AA",
    "#3CF88D"
  ]
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100, 50 ], backgroundColor: this.colors }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
}
