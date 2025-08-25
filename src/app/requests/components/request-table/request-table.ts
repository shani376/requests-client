import { Component, OnInit } from '@angular/core';
import { DatePipe, NgFor } from '@angular/common';
import { Request } from '../../models/Request';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.html',
  imports: [DatePipe, NgFor]
})
export class RequestTableComponent implements OnInit {
  requests: Request[] = [];

  constructor(private requestService: RequestService) {}

  ngOnInit() {
    this.loadRequests();
  }

  loadRequests() {
    this.requestService.getRequests().subscribe(requests => {
      this.requests = requests;
    });
  }
}
