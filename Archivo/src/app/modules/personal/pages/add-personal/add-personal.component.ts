import { DialogRef } from "@angular/cdk/dialog";
import { Component, OnInit } from "@angular/core";
import { PersonalService } from "../../service/personal.service";
import { Personal } from "../../types/personla";

@Component({
  selector: "app-add-personal",
  templateUrl: "./add-personal.component.html",
})
export class AddPersonalComponent implements OnInit {
  personal: Personal = {
    id: 0,
    name: "",
    surname: "",
    lastname: "",
    birthday: "",
    salary: 0.0,
    position: {},
    user: undefined,
  };

  positions: any[] = [];

  constructor(
    private perosnalService: PersonalService,
    public modalRef: DialogRef<AddPersonalComponent>
  ) {}

  ngOnInit(): void {
    //BACK-END -> servicio que obtenga las posiciones
    //Realizar la peticion hacia su servicio de postions
    //Asignar las positions a nuestra valriable this.positions
    this.perosnalService.finAllPositions().subscribe((response) => {
      this.positions = response;
    });
  }

  savePersonal() {
    this.perosnalService.save(this.personal).subscribe((response) => {
      this.personal = {
        id: 0,
        name: "",
        surname: "",
        lastname: "",
        birthday: "",
        salary: 0.0,
        position: {},
        user: undefined,
      };
      this.modalRef.close();
      //Validar si la persona fue registrada correctamente
      //Si -> Cerrar modal, limpar el formulario y actualizar la consulta general del personal
    });
  }
// aqui va el loadedfile
  previewFIle(event: any) {
    const { target } = event;
    console.log(target.value);
    const reader = new FileReader();
    reader.readAsDataURL(target.files[0]);
    reader.onloadend = (result) => {
      console.log(result.target!.result);
      
    }
  }
}
// Subscribe espera la peticion
