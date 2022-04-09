import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/models/user-form-data.model';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.scss']
})
export class UserCardsComponent {
  @Input()
  public users: Array<User>

  @Output()
  public removeUser: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public addPoint: EventEmitter<string> = new EventEmitter<string>();

  onRemove(id: string): void {
    this.removeUser.emit(id);
  }

  onAddPoint(id: string): void {
    this.addPoint.emit(id);
  }
}
