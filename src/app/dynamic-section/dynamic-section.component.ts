import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicInputComponent } from '../dynamic-input/dynamic-input.component';

@Component({
  selector: 'app-dynamic-section',
  standalone: true,
  imports: [CommonModule, DynamicInputComponent],
  templateUrl: './dynamic-section.component.html',
  styleUrls: ['./dynamic-section.component.scss']
})
export class DynamicSectionComponent {

  section = [{value: 1}, {value: 2}];

  addSection(): void {
    this.section.push({ value: 0 });
  }
  deleteSection(index: number): void {
    this.section.splice(index, 1);
  }

  //addSection()
}
