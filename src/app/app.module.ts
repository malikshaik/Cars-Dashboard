import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatStepperModule } from "@angular/material/stepper";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppComponent } from "./app.component";
import { DetailsDialogComponent } from "./details-dialog/details-dialog.component";

@NgModule({
  declarations: [AppComponent, DetailsDialogComponent],
  bootstrap: [AppComponent],
  exports: [MatIconModule],
  entryComponents: [DetailsDialogComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class AppModule {}
