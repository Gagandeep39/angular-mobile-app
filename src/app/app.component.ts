import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Name of the Component
  templateUrl: './app.component.html',  //Html file path
  styleUrls: ['./app.component.css']  //Style Url Path
})
// Root Component  
export class AppComponent {
  //Project Title
  title = 'Mobile-Shop';
  //Creator Name
  madeBy = "JEECloudIISGH11 Gagandeep Singh";

}
