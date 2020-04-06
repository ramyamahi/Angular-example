import { Component, OnInit } from '@angular/core';
import { cribs } from './../data/cribs';

@Component({
  selector: 'app-crib-list',
  templateUrl: './crib-list.component.html',
  styleUrls: ['./crib-list.component.css'],
})
export class CribListComponent implements OnInit {
  cribs: Array<any> = cribs;
  constructor() {}

  ngOnInit(): void {}
}
