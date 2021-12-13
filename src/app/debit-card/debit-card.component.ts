import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from '../core/models/card.model';

@Component({
  selector: 'app-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.scss']
})
export class DebitCardComponent implements OnInit {
  @Input() cardDetailsFromParent!: CardModel;
  displayMaster: boolean = false;
  displayVisa: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  spaceText(text: string){
    let textTobeSpaced = text?.toString();

    for (let i = 0; i <= textTobeSpaced?.length; i++){
      textTobeSpaced = textTobeSpaced.substring(0, i+=4) + " " + textTobeSpaced.substring(i, textTobeSpaced?.length)
    }

    return textTobeSpaced;
  }

  // determineLogo(cardNumber: number){
  //   let numberText = cardNumber.toString();

  //   (numberText.substring(0,5) === '5399') ? this.displayMaster = true : ((numberText.substring(0,5) === '4399') ? this.displayVisa = true : null)

  // }

  get showMaster(){
    let numberText = this.cardDetailsFromParent.cardNumber.toString();

    return true ? (numberText.substring(0,4) === '5399') : false
  }

  get showVerve(){
    let numberText = this.cardDetailsFromParent.cardNumber.toString();
    return true ? (numberText.substring(0,4) === '4399') : false
  }

  get showVisa(){
    let numberText = this.cardDetailsFromParent.cardNumber.toString();
    return true ? (numberText.substring(0,4) === '3999') : false
  }

}
