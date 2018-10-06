import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) { }

  onStrategiesClick(){
    this._router.navigate(['/strategies']);
  }
  onPendingPicksClick(){
    this._router.navigate(['/pendingPicks']);
  }
  onToolsClick(){
    this._router.navigate(['/tools']);
  }
  onHistoryClick(){
    this._router.navigate(['/history']);
  }
  onStatisticsClick(){
    this._router.navigate(['/statistics']);
  }
  onWikipediaClick(){
    this._router.navigate(['/wikipedia']);
  }

  ngOnInit() {
  }

}
