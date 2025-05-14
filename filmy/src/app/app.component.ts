import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'filmy';
}

let nazwaFilmu = "";
let kategoriaFilmu = "";

function dodajFilm(arg1:string, arg2:string){

}
