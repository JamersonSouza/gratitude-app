import { Component } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`,
    imports: [RouterOutlet, CommonModule]
})
export class AppComponent {
  title = 'gratitudeApp';
}
