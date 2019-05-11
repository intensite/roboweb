import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { JogComponent } from './jog/jog.component';
import { ConsoleComponent } from './console/console.component';
import { GcodeComponent } from './gcode/gcode.component';
import { ConnectionComponent } from './connection/connection.component';
import { HttpClientModule } from '@angular/common/http';
import { PositionComponent } from './position/position.component';

@NgModule({
  declarations: [
    AppComponent,
    JogComponent,
    ConsoleComponent,
    GcodeComponent,
    ConnectionComponent,
    PositionComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
