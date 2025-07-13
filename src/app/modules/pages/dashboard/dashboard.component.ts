import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-dashboard',
  imports: [ToastModule, RouterModule],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private message : MessageService) {

  }
    ngOnInit() {
     let info = history.state;
     console.log(info.toast)
      if (info.toast) {
        setTimeout(() => {
          this.message.add(info.toast);
        }, 0);
        history.replaceState({}, '');
      }
    }

}
