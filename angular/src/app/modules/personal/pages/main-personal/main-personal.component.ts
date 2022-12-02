import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PersonalService } from '../../service/personal.service';
import { Personal } from '../../types/personal';
import { AddPersonalComponent } from '../add-personal/add-personal.component';
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-main-personal',
  templateUrl: './main-personal.component.html'
})
export class MainPersonalComponent implements OnInit {
  displayedColumns: string[] = ['#', 'name', 'surname', 'lastname', 'birthday', 'salary', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  personal!: MatTableDataSource<Personal>;
  // dataSource = ELEMENT_DATA;
  constructor(private personalService: PersonalService, private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) { }

  ngOnInit() {

    this.getAllPersonal;
  }
  isLoading(){
    return this.personalService.loading;
  }

  getAllPersonal(){
    this.personalService.findAll().subscribe((response:Personal[]) => {
      this.personal = new MatTableDataSource<Personal>(response);
      this.personalService.loading = false;
      this.personal.paginator = this.paginator;
      this.personal.sort = this.sort;
    })
  }
  announceSortChange(sort:Sort) {
    if (sort.direction) {
      this._liveAnnouncer.announce(`Sorted ${sort.direction} ending`);
    } else {
      this._liveAnnouncer.announce(`Sort cleared`)
    }
  }
  //Modal

  openDialog(enterAnimation: string, exitAnimation: string) {
    const modalRef = this.dialog.open(AddPersonalComponent, {
      width: '60%',
      enterAnimationDuration:enterAnimation,
      exitAnimationDuration: exitAnimation,
      disableClose: true
    });
    modalRef.afterClosed().subscribe((result: any) => {
this.getAllPersonal;
this.personalService.person={
  id:0,
  name:"",
  surname:"",
  lastname:"",
  birthday:"",
  salary:0.0,
  position:{},
  user:undefined
};
    })
  }


  editPerson(person:any){
    console.log(person);
    this.personalService.person={...person,birthday:person.birthday.split('T')[0]
  , position:{id:person.position_id}
};
    this.personalService.edit=true;
    this.openDialog('2ms','2ms');
  }

  changeStatus(person: any){
    console.log(person);
    this.personalService.person = { ...person,
      birthday: person.birthday.split('T')[0],
      position:{id:person.position_id}
    };
    this.personalService.edit = true;
    this.openDialog('2ms', '2ms');
  }
}

