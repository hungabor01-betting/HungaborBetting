import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   constructor(private _http: Http) { }

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