import { Component } from '@angular/core';
import { RequestFormComponent } from '../request-form/request-form';
import { RequestTableComponent } from '../request-table/request-table';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.html',
  imports: [RequestFormComponent, RequestTableComponent]
})
export class RequestsComponent {
  requests: any[] = [];

  reloadRequests() {
    // אפשר לקרוא שוב ל-API כדי לעדכן את רשימת הפניות
  }
}
