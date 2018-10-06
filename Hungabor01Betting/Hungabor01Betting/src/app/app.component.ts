import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {   
  constructor(private _http: Http, private _router: Router) { }

  private isStrategiesCollapsed = false;
  private isPendingPicksCollapsed = false;
  private isToolsCollapsed = false;
  private isHistoryCollapsed = false;
  private isStatisticsCollapsed = false;
  private isWikipediasCollapsed = false;

  onNavigationClick(){
    this._router.navigate(['/home']);
  }
  onStrategiesClick(){
    if (!this.isStrategiesCollapsed)
      this._router.navigate(['/strategies']);
    this.isStrategiesCollapsed = !this.isStrategiesCollapsed;
  }
  onPendingPicksClick(){
    if (!this.isPendingPicksCollapsed)    
      this._router.navigate(['/pendingPicks']);
    this.isPendingPicksCollapsed = !this.isPendingPicksCollapsed;    
  }
  onToolsClick(){
    if (!this.isToolsCollapsed)
      this._router.navigate(['/tools']);
    this.isToolsCollapsed = !this.isToolsCollapsed;
  }
  onHistoryClick(){
    if (!this.isHistoryCollapsed)
      this._router.navigate(['/history']);
    this.isHistoryCollapsed = !this.isHistoryCollapsed;
  }
  onStatisticsClick(){
    if (!this.isStatisticsCollapsed)
      this._router.navigate(['/statistics']);
    this.isStatisticsCollapsed = !this.isStatisticsCollapsed;
  }
  onWikipediaClick(){
    if (!this.isWikipediasCollapsed)
      this._router.navigate(['/wikipedia']);
    this.isWikipediasCollapsed = !this.isWikipediasCollapsed;
  }
  
   apiValues: string[] = [];
   ngOnInit() {
      this._http.get('/api/values').subscribe(values => {
         this.apiValues = values.json() as string[];
      });
   }

   name: string = "";
   doSubmit(){
        let body = JSON.stringify("appTest");        
        let header = new Headers({'Content-Type': 'application/json'});          
        let options = new RequestOptions({headers: header});          
        var url = '/api/values';
        this._http.post(url,body,options).subscribe(
            response => console.log(response),
            err => console.log(err)
          );      
   }
}