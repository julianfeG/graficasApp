import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit{

   // Doughnut
  public doughnutChartLabels: string[] = [ 
    
  ];
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
      { data: [ 2], backgroundColor: this.colors }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor( private graficasService: GraficasService) {}

  ngOnInit(): void {
    /*this.graficasService.getUsuariosRedesSociales()
      .subscribe( data => {
        const labels = Object.keys(data);
        const values = Object.values(data);
        this.doughnutChartLabels = labels;
        this.doughnutChartData.datasets[0].data = values;
      });*/
    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe( ({labels, values}) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.datasets[0].data = values;
      });
      this.doughnutChartData;
  }
}
