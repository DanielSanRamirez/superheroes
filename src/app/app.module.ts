// Módulo de infraestructura Angular requerido disponible con la biblioteca Angular. Es necesario para que una aplicación Angular que se ejecuta en un navegador como google chrome o firefox
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // Decorador necesario para crear un nuevo módulo en la aplicación Angular.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // Componente raíz de toda la aplicación

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MySampleComponentComponent } from './my-sample-component/my-sample-component.component';

// Modulos creados importados
import { SuperheroesMaterialDesignModule } from './superheroes-material-design/superheroes-material-design.module';

@NgModule({
  // Una matriz que declara componentes y otros códigos angular como parte del módulo
  declarations: [
    AppComponent,
    MySampleComponentComponent
  ],
  // Sirve para los modulos 
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule, // Librería que sirve si no se tiene la animación de material
    SuperheroesMaterialDesignModule
  ],
  // Lista de servicios angulares. Servicio es una clase reutilizable que se puede inyectar en un componente u otro servicio.
  providers: [],
  // Se especifica el componente raíz de la aplicación angular. Solo puede estar en un módulo de toda la app.
  bootstrap: [AppComponent]
})
export class AppModule { }
