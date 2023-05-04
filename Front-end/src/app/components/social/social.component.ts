import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {
  //Se crea el constructor con router para crear el metodo login
  constructor(private router:Router) {}

  login(){
    this.router.navigate(['/login'])
  }
}
