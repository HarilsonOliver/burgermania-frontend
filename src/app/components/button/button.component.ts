import { Component, Input, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() type: 'filled' | 'outlined' = 'filled';
  @Input() size: 'default' | 'large' = 'default'; 
}
