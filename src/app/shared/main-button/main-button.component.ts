import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.css']
})
export class MainButtonComponent implements OnInit {
 @Input() value: String = 'Submit';
  @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.clickEvent.emit();
  }
}
