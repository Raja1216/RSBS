import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  @Input() sideNaveState:boolean = false;
  constructor( private _router: Router,) { }

  ngOnInit(): void {
  }
  navigateToDetails(){
    this._router.navigate(['account/details'], {
    });
  }

}
