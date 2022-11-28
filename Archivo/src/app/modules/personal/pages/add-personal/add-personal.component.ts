import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../service/personal.service';
import { Personal } from '../../types/personla';

@Component({
  selector: 'app-add-personal',
  templateUrl: './add-personal.component.html'
})
export class AddPersonalComponent implements OnInit {
  personal: Personal = {
    id: 0,
    name: "",
    surname: "",
    lastname: "",
    birthday: "",
    salary: 0.0,
    position: {
      id: 0,
      position: "",
      description: ""
    },
    user: undefined
  };

  positions: any[] = [];

  constructor(private perosnalService: PersonalService,
    public modalRef: DialogRef<AddPersonalComponent>) { }

  ngOnInit(): void {
    //BACK-END -> servicio que obtenga las posiciones
    //Realizar la peticion hacia su servicio de postions
    //Asignar las positions a nuestra valriable this.positions
  }

  savePersonal() {
    this.perosnalService.save(this.personal)
      .subscribe((response) => {
        //Validar si la persona fue registrada correctamente
        //Si -> Cerrar modal, limpar el formulario y actualizar la consulta general del personal

      })
  }

}
// Subscribe espera la peticion

