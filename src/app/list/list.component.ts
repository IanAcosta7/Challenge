import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private apiUrl = 'https://dog.ceo/api/breeds/list';
  public apiImgUrl = 'https://dog.ceo/api/breed/puggle/images/random';
  BREED_NAME: string;
  data: any = {};

  constructor(private http: Http) {
    this.getData();
    this.showData();
   }

  ngOnInit() {
  }

  try(){
    console.log(this.BREED_NAME);
  }

  selectDog(){
    this.apiImgUrl = 'https://dog.ceo/api/breed/'+this.BREED_NAME+'/images/random';
    
    // console.log(this.apiImgUrl);
  }
  
  getDog(){
    return this.apiImgUrl;
  }
  
  getData(){
    return this.http
      .get(this.apiUrl)
      .pipe(map((res) => res.json()))
  }

  showData(){
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }
}
