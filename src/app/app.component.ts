import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-resume';
  name: string = "Celina Junker";
  address: string = "1600 Developer Way, Cincinnati OH 45224";
  phone: string = "513-518-5555";
  email: string = "junkerc2@nku.edu";
  showPersonal: boolean = true;
  blueButtonStyle: string = "btn btn-primary";
  redButtonStyle: string = "btn btn-danger";
  buttonStyle: string = this.redButtonStyle;
  togglePersonal(): void {
    this.showPersonal = !this.showPersonal;
  }
}
