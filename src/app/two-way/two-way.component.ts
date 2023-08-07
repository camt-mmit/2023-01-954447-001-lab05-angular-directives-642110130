import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-two-way',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.scss']
})
export class TwoWayComponent {
  @Input() message = '';

  @Output() messageChange = new EventEmitter<string>();

  private updateMessage(): void{
    this.messageChange.emit(this.message);
  }

  changeToAdam(): void{
    this.message = 'Adam';
    this.updateMessage();
  }

  changeToBob(): void{
    this.message = 'Bob';
    this.updateMessage();
  }
}
