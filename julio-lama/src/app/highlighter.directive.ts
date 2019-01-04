import { Directive, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';
/*
  A directive that I can use to set a message on some part of my website.
 */
@Directive({
  selector: '[appMessage]'
})
export class HighlighterDirective implements OnInit {
  myMessage;

  ngOnInit(): void {
    this.myMessage = ` * It takes 30 seconds for the application to load.
    It is using free Dynos and hosted for free on Heroku.`;

    this.render.setStyle( this.el.nativeElement, 'width', 'fit-content');

    this.render.setStyle(this.el.nativeElement, 'text-align', 'center');
    this.render.setStyle(this.el.nativeElement, 'font-size', '15px');
    this.render.setStyle(this.el.nativeElement, 'color', 'bold');

    const myDiv = this.render.createElement('em');
    const myText = this.render.createText(this.myMessage);
    this.render.appendChild(myDiv, myText);
    this.render.appendChild(this.el.nativeElement, myDiv);
  }
  /*
    Renderer2: manipulates the elements of the DOM.

    ElementRef is the element you are going to create and put to the DOM with the help of
    Renderer2.
   */
  constructor(private el: ElementRef, private render: Renderer2) {}

  // Set color.
  // private highlightElement(color: string) {
  //   this.el.nativeElement.style.backgroundColor = 'yellow';
  // }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlightElement(null);
  // }
  //
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlightElement('yellow');
  // }

}
