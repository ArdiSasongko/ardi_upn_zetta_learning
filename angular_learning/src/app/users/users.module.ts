import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
// import { UsersComponent } from './users.component';
// import { ListComponent } from './list/list.component';
// import { FormComponent } from './form/form.component';
// import { DetailComponent } from './detail/detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';
import { EditComponent } from './edit/edit.component';
import { FilterPipe } from './filter.pipe'

@NgModule({
  declarations: [
    UsersComponent,
    ListComponent,
    DetailComponent,
    FormComponent,
    EditComponent,
    FilterPipe
    // ListComponent,
    // FormComponent,
    // DetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatRadioModule,
  ],
  exports:[
    MatInputModule,
  ]
})
export class UsersModule { }
