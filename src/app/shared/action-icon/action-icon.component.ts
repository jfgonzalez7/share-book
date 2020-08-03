import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-icon',
  templateUrl: './action-icon.component.html',
  styleUrls: ['./action-icon.component.scss']
})
export class ActionIconComponent implements OnInit {
  @Input() pathUrl: string = '';
  @Input() icon: IconDefinition; 

  constructor(private router: Router) { }

  ngOnInit() { }

  create() {
    this.router.navigate([this.pathUrl]);
  }
}
