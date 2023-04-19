import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  total = 0;
  name = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.total = history.state.total;
    this.name = history.state.name;
  }
}
