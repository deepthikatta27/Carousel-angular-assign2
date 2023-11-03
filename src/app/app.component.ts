import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carousel-angular2';
  images: string[] = [
    'https://media.wired.com/photos/593261cab8eb31692072f129/master/w_2560%2Cc_limit/85120553.jpg',
    'https://images.unsplash.com/photo-1566650554919-44ec6bbe2518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwYW5pbWFsfGVufDB8fDB8fHww&w=1000&q=80',
    'https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?format=jpg&width=960'
  ];
  currentIndex: number = 0;
  currentImage: string = this.images[this.currentIndex];
  isEnable:number =0;

  prevImage() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }
    this.currentImage = this.images[this.currentIndex];
    this.isEnable=this.currentIndex;
  }

  nextImage() {
    this.currentIndex++;
    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
    }
    this.currentImage = this.images[this.currentIndex];
    this.isEnable=this.currentIndex;
  }

  currentSlide(id: number){
    this.currentIndex=id;
    this.currentImage = this.images[this.currentIndex];
    this.isEnable=this.currentIndex;
  }

}
