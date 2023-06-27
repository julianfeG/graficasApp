import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartEvent, ChartType, LabelItem } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit{
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() line: boolean = false;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true
  };
  public barChartType: ChartType = 'bar';

  @Input() barChartData: ChartData<'bar'> = {
    labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#1888ED', hoverBackgroundColor: '#ED2218' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#DCED00', hoverBackgroundColor: '#ED2218' },
      { data: [ 8, 33, 66, 41, 98, 27, 15 ], label: 'Series C', backgroundColor: '#A40900', hoverBackgroundColor: '#ED2218' },
    ]
  };

  ngOnInit(): void {
    this.barChartType = this.line ? 'line' : 'bar'
  }
}
