import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  private apiUrl = 'https://dog.ceo/api/breed/puggle/images/random'; //Aca debería llegar el nombre desde el componente de la lista.
  BREED_NAME: string;
  data: any = {};

  constructor(private http: Http) {
    this.getData();
    this.showData();
  }
  
  ngOnInit() {
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
