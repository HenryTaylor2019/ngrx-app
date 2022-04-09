import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/shared/models/user-form-data.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input()
  public user: User;

  @Input()
  public showButtons: boolean = true;

  @Output()
  public remove = new EventEmitter<void>();

  @Output()
  public addPoint = new EventEmitter<void>();

  

  onRemove() {
    this.remove.emit();
  }

  onAddPoint() {    
    this.addPoint.emit();
  }

}
