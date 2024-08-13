import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { DataService } from './service/data.service';
import { player} from './player'
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'todoapp';
  player: player[] = [];
  errorMessage!: string;
  
  newPlayer: player = {
    First_Name: '',
    Last_Name: '',
    Average_Points: 0,
    Average_Assists: 0,
    Average_Steals: 0,
    Average_Blocks: 0
  }

  constructor(private data_service: DataService){}
  
  allPlayers(){
    this.data_service.getAllPosts().subscribe({
      next: (player) =>{
        this.player = player;
        console.log(player);
      },
      error: (error) => {
        this.errorMessage = error;
      }

    });

  }
  ngOnInit(){
  }
  topPoints(){
    this.data_service.getTopPoints().subscribe({
      next: (player) =>{
        this.player = player;
        console.log(player);
      },
      error: (error) => {
        this.errorMessage = error;
      }

    });
  }
  topAssists(){
    this.data_service.getTopAssists().subscribe({
      next: (player) =>{
        this.player = player;
        console.log(player);
      },
      error: (error) => {
        this.errorMessage = error;
      }

    });
  }
  topSteals(){
    this.data_service.getTopSteals().subscribe({
      next: (player) =>{
        this.player = player;
        console.log(player);
      },
      error: (error) => {
        this.errorMessage = error;
      }

    });
  }
  topBlocks(){
    this.data_service.getTopBlocks().subscribe({
      next: (player) =>{
        this.player = player;
        console.log(player);
      },
      error: (error) => {
        this.errorMessage = error;
      }

    });
  }
  pointOrder(){
    this.data_service.getPointOrder().subscribe({
      next: (player) =>{
        this.player = player;
        console.log(player);
      },
      error: (error) => {
        this.errorMessage = error;
      }

    });
  }

  addPlayer(){
    if (this.newPlayer.First_Name && this.newPlayer.Last_Name && this.newPlayer.Average_Points && this.newPlayer.Average_Assists && this.newPlayer.Average_Steals && this.newPlayer.Average_Blocks ) {
      this.data_service.postAddPlay(this.newPlayer).subscribe(
        response => {
          console.log('Success:', response);
        },
        error => {
          console.error('Error:', error);
        }
      );
    } else {
      console.error('Please fill in all fields');
    }
  }
    
    
}