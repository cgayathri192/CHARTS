import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public myPieChart:any;
  constructor(){}

  ngOnInit(){
    this.createPieChart();
  }
  createPieChart() {
    const ctx = document.getElementById('collaborationsPieChart') as HTMLCanvasElement;
    this.myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        datasets: [{
          label: 'Collaborations/MOU',
          data: [65, 50, 15, 10],
          backgroundColor: [
            'blue',
            'orange',
            'grey',
            'yellow'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
          }
        }
      }
    });
  }
}
