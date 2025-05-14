import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'filmy';

   nazwaFilmu = "";
   kategoriaFilmu = "";

  dodajFilm(arg1:string, arg2:string){
      console.log("{tytul: "+ this.nazwaFilmu +", kategoria: "+ this.kategoriaFilmu+"}");
  }

  changeName($event:any){
      this.nazwaFilmu = $event.target.value;
  }

  changeType($event:any){
      this.kategoriaFilmu = $event.target.value;
  }
}