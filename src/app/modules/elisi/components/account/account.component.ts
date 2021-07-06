import { Component, Input, OnInit } from '@angular/core';
import * as A from 'fp-ts/lib/Array';
import * as E from 'fp-ts/lib/Either';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  constructor() {}
  @Input() node: any;
  ngOnInit(): void {
   console.log(this.node);
   
  }
}
