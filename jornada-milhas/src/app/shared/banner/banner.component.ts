import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  // Utilizando o Decorator @Input() equivale a receber as propriedade são de entrada e os valores virão de fora
  @Input() src: string = '';
  @Input() alt: string = '';

}
