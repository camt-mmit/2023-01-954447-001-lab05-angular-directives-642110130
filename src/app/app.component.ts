import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TwoWayComponent } from './two-way/two-way.component';
import { TryOneComponent } from './try-one/try-one.component';
import { TryTwoComponent } from './try-two/try-two.component';
import { TryThreeComponent } from './try-three/try-three.component';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';
import { DynamicSectionComponent } from './dynamic-section/dynamic-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:
  [CommonModule,
    RouterOutlet,
    TwoWayComponent,
    TryOneComponent,
    TryTwoComponent,
    TryThreeComponent,
    DynamicInputComponent,
    DynamicSectionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-ng-2';

  products = [
    { code: 'PD001', name: 'product 001'},
    { code: 'PD002', name: 'product 002'},
    { code: 'PD003', name: 'product 003'},
    { code: 'BK001', name: 'book 001'},
    { code: 'BK002', name: 'book 002'},
  ];

  externalMessage = 'Cindy';

}
