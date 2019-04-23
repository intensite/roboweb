import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



import { AppComponent } from './app.component';
import { JogComponent } from './jog/jog.component';
import { ConsoleComponent } from './console/console.component';
import { GcodeComponent } from './gcode/gcode.component';

@NgModule({
  declarations: [
    AppComponent,
    JogComponent,
    ConsoleComponent,
    GcodeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
