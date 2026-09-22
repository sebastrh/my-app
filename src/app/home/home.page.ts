import { Component } from '@angular/core';
import { IonHeader,IonContent,IonButton, IonFooter } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader,IonContent,IonButton,IonFooter],
})

//Aqui va toda la logica de la página
// Variables y Metodos

export class HomePage {
  public numero: number = 0;
  constructor() {}
}
