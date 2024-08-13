import {CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
/*import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoapp';
  readonly APIUrl = "http://localhost:3000/players";

  constructor(private http:HttpClient){

  }
  notes:any = [];

  refreshNotes(){
    this.http.get(this.APIUrl).subscribe(data=>{
      this.notes = data;
    })
  }

  ngOnInit(){
    this.refreshNotes();
  }
}
*/