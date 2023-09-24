import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exerice1',
  templateUrl: './exerice1.component.html',
  styleUrls: ['./exerice1.component.css']
})
export class Exerice1Component{
  message: string = "je suis un paragraphe";

  bonjour(){
    this.message = "Button clicked!"
  }
}
