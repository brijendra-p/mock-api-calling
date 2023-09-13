import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-with-loading',
  templateUrl: './image-with-loading.component.html',
  styleUrls: ['./image-with-loading.component.scss']
})
export class ImageWithLoadingComponent {

  @Input() loader: string = 'https://cdn.pixabay.com/animation/2023/05/02/04/29/04-29-06-428_512.gif';
  @Input() height: number = 200;
  @Input() width: number = 200;
  @Input() image: string = "";

  isLoading: boolean;

  constructor() {
    this.isLoading = true;
  }

  hideLoader() {
    this.isLoading = false;
  }
}
