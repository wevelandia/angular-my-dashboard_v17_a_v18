import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-options-bottom-sheet',
  standalone: true,
  imports: [
    CommonModule, MatListModule,
  ],
  templateUrl: './options-bottom-sheet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsBottomSheetComponent {

  // Implementamos el openlink
  openLink(event: MouseEvent) {
    console.log('openLink', event);
  }

 }
