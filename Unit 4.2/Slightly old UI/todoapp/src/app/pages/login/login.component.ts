import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  playerObj:any = {
    "First_Name": "",
    "Last_Name": ""
  };

  http = inject(HttpClient)

  onLogin() {
    this.http.post("http://localhost:3000/players", this.playerObj).subscribe((res:any)=>{
      if(res.result) {
        alert("Success");
      } else {
        alert("Wrong");
      }
    })
  }
}
