import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPersonalComponent } from './pages/main-personal/main-personal.component';
import { materialModules } from '../../types/material-modules';
import { AddPersonalComponent } from './pages/add-personal/add-personal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainPersonalComponent, AddPersonalComponent],
  imports: [CommonModule,...materialModules, FormsModule],
  exports: [MainPersonalComponent],
})
export class personalModule {}
