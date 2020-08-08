import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;
  @Input() author: string;
  @Input() imageUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
