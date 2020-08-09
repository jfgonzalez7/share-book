import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { ActionIconComponent } from './action-icon/action-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeaderComponent, ActionIconComponent, CardComponent],
  imports: [CommonModule, FontAwesomeModule, AppRoutingModule, FormsModule ],
  exports: [
    HeaderComponent,
    ActionIconComponent,
    CardComponent,
    FontAwesomeModule
  ]
})
export class SharedModule { }
