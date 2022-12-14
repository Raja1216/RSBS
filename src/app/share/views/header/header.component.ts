import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sideNavToggle = new EventEmitter <boolean>();
  menuState :boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  sideNaveToggle(){
    this.menuState =!this.menuState;
    this.sideNavToggle.emit(this.menuState)
  }
}
