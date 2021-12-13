import { Component, OnInit } from '@angular/core';
import { CardModel } from '../core/models/card.model';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {
  cardNumber: string = "";
  cardHolder: string | null = null;
  expiryDate: string | null = null;
  cvv: string | null = null;

  cardDetails!: CardModel
  

  constructor() { }

  ngOnInit() {
    this.cardNumber = "############"
    this.generateDetails()
  }

  generateDetails(){
    this.cardDetails = {
      cardNumber: this.cardNumber,
      cardHolder: this.cardHolder,
      expiryDate: this.expiryDate,
      cvv: this.cvv
    } 
  }

  submit(){
    let payload = this.cardDetails;

    localStorage.setItem('formVales', JSON.stringify(payload))

    this.cardNumber = "############";
    this.cardHolder = null;
    this.expiryDate = null;
    this.cvv = null
  }

}
