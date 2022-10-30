import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Komp01Component } from './komp01/komp01.component';
import { Komp02Component } from './komp02/komp02.component';
import { Komp03Component } from './komp03/komp03.component';
import { Komp04Component } from './komp04/komp04.component';
import { Komp05Component } from './komp05/komp05.component';
import { Komp06Component } from './komp06/komp06.component';



@NgModule({
  declarations: [
    Komp01Component,
    Komp02Component,
    Komp03Component,
    Komp04Component,
    Komp05Component,
    Komp06Component
  ],
  imports: [
    CommonModule
  ]
})
export class Module01Module { }
