import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star.component';
import { ConvertToSpaces } from './convert-spaces.pipe';



@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpaces
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    ConvertToSpaces
  ]
})
export class SharedModule { }
