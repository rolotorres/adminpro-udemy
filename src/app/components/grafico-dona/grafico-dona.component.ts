import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('ChartData') doughnutChartData: number[] = [];
  @Input('ChartType') doughnutChartType: string = '';
  @Input('ChartLabels') doughnutChartLabels: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
