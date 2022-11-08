import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/Card-Service/cardService';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[CardService]
})
export class ListComponent implements OnInit {

  constructor(private CardService : CardService) { }

  ngOnInit(): void {
  }

}
