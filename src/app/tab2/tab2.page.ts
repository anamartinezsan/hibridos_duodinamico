import { Component,ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  public currentItem: any = null;
  public mappingData: any = {};

  constructor() {}
  

}
function iniciaGeo(){
  var btnObtener1= document.getElementById('btnObtener');
  btnObtener1.addEventListener('click',mostrar,false);
}
function obtenerGeo(){
  navigator.geolocation.getCurrentPosition(mostrar(), errores);
                                          //se invoca cuando success, cuando error
}
function mostrar(posicion){
  var ubicacion1= document.getElementById('ubicacion');
  var datos= "";
  datos += 'Latitud: '+posicion.coords.latitude+'<br>';
  datos += 'Longitud: '+posicion.coords.longitude+'<br>';
  datos += 'Exactitud: '+posicion.coords.accuracy+'mts. <br>';
  
  var mapurl='https://maps.google.com/maps/embed?pb='+posicion.coords.latitude+
          ','+posicion.coords.longitude+'&zomm=12&size=400x400&sensor=true&markers='+
          posicion.coords.latitude+','+posicion.coords.longitude;
  
  ubicacion1.innerHTML='<iframe src="'+mapurl+'">';
}
function errores(error){
  alert('Error: '+error.code+', '+error.message);
}
