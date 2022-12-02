import { Component, OnInit } from '@angular/core';
import { Personal } from '../../types/personal';
import { PersonalService } from '../../service/personal.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-add-personal',
  templateUrl: './add-personal.component.html'
})
export class AddPersonalComponent implements OnInit {
  personal:Personal;
  positions:any[]=[];
  //loadedFile:String;
get edit(){
  return this.personalService.edit;
}
  constructor(private personalService:PersonalService, public modalRef: DialogRef<AddPersonalComponent>) {
    this.personal=this.personalService.person;
   }

  ngOnInit(): void {
    this.personalService.findAllPosition().subscribe((response)=>{
      this.positions=response;
    })
    //backEnd -> crear servicio que obtenga las positions
    //realizar la peticion hacia el servicio de positions
    //despues de que devuelve la peticion asignar las positions a nuestra variable this.positions
  }

  savePersonal(){
    if (this.personalService.edit) {
      //put
      this.personalService.update(this.personal).subscribe((response)=>{
        this.modalRef.close();
      });
    }else{
      this.personalService.save(this.personal).subscribe((response)=>{
        
        this.modalRef.close;
        //validar si la persona fue registrada correctamente
        //si es un si cerrar el modal limpiar el formulario y actualizar la consulta general
        //del personal
      })
    }
  }
previewFile(event:any){
  const {target}=event;
console.log(target.value);
const reader = new FileReader;
reader.readAsDataURL(target.files[0]);
reader.onloadend=(result)=>{
console.log(result.target!.result);
//this.loadedFile = result.target!.result + "";
}
}

}
