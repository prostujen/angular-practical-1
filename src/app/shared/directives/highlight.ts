import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]', // <--- Це назва атрибута, який ми будемо писати в HTML
  standalone: true
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  // Слухаємо подію "мишка наведена"
  @HostListener('mouseenter') onMouseEnter() {
    this.addShadow();
  }

  // Слухаємо подію "мишка прибрана"
  @HostListener('mouseleave') onMouseLeave() {
    this.removeShadow();
  }

  private addShadow() {
    // Додаємо красиву тінь і трохи збільшуємо
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 10px 20px rgba(0,0,0,0.3)');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.05)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', '0.3s');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }

  private removeShadow() {
    // Прибираємо ефекти
    this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
    this.renderer.removeStyle(this.el.nativeElement, 'transform');
  }
}