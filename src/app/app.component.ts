import { Component, Inject, ViewChild } from "@angular/core";
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatStepperModule, MatStep, MatHorizontalStepper} from '@angular/material/stepper';
import { DetailsDialogComponent } from "./details-dialog/details-dialog.component";
@Component({
  selector: "my-app",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild(MatHorizontalStepper) stepper: MatHorizontalStepper;
  step1Completed = false;

  isLinear = true;
  carsReleased = {
    Q1: [
      {
        carImage:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg",
        date: "2020-02-01",
        name: "Bugatti Chiron",
        description:
          "The Bugatti chiron is expected to make use of the Venue’s petrol engines: the 1.2-litre naturally aspirated and the 1.0-litre turbo-petrol unit. The diesel engine is likely to be borrowed from the Seltos -- that is, the 1.5-litre diesel. The naturally aspirated petrol will only be offered with a manual gearbox while the turbo-petrol engine will come with a choice of three transmission options: 6-speed manual, 7-speed dual-clutch automatic, and the newly introduced 6-speed iMT (clutchless manual). Kia is expected to offer the diesel engine with a 6-speed manual and introduce a 6-speed automatic option borrowed from the Seltos."
      },
      {
        carImage:
          "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/125:94/w_1994,h_1500,c_limit/Transpo_G70_TA-518126.jpg",
        date: "2020-03-05",
        name: "Transpo",
        description:
          "The Transpo is expected to make use of the Venue’s petrol engines: the 1.2-litre naturally aspirated and the 1.0-litre turbo-petrol unit. The diesel engine is likely to be borrowed from the Seltos -- that is, the 1.5-litre diesel. The naturally aspirated petrol will only be offered with a manual gearbox while the turbo-petrol engine will come with a choice of three transmission options: 6-speed manual, 7-speed dual-clutch automatic, and the newly introduced 6-speed iMT (clutchless manual). Kia is expected to offer the diesel engine with a 6-speed manual and introduce a 6-speed automatic option borrowed from the Seltos."
      },
      {
        carImage:
          "https://img.etimg.com/thumb/msid-72081976,width-640,resizemode-4,imgsize-35648/elva-mclarens-latest-sports-car.jpg",
        date: "2020-02-02",
        name: "elva molarens",
        description:
          "The elva molarens is expected to make use of the Venue’s petrol engines: the 1.2-litre naturally aspirated and the 1.0-litre turbo-petrol unit. The diesel engine is likely to be borrowed from the Seltos -- that is, the 1.5-litre diesel. The naturally aspirated petrol will only be offered with a manual gearbox while the turbo-petrol engine will come with a choice of three transmission options: 6-speed manual, 7-speed dual-clutch automatic, and the newly introduced 6-speed iMT (clutchless manual). Kia is expected to offer the diesel engine with a 6-speed manual and introduce a 6-speed automatic option borrowed from the Seltos."
      },
      {
        carImage:
          "https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Sonet/7256/1581331845711/front-left-side-47.jpg",
        date: "2020-03-05",
        name: "Kia sonet",
        description:
          "The Sonet is expected to make use of the Venue’s petrol engines: the 1.2-litre naturally aspirated and the 1.0-litre turbo-petrol unit. The diesel engine is likely to be borrowed from the Seltos -- that is, the 1.5-litre diesel. The naturally aspirated petrol will only be offered with a manual gearbox while the turbo-petrol engine will come with a choice of three transmission options: 6-speed manual, 7-speed dual-clutch automatic, and the newly introduced 6-speed iMT (clutchless manual). Kia is expected to offer the diesel engine with a 6-speed manual and introduce a 6-speed automatic option borrowed from the Seltos."
      }
    ],
    Q2: [
      {
        carImage:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg",
        date: "2020-02-01",
        name: "Bugatti Chiron",
        description:
          "The Bugatti chiron is expected to make use of the Venue’s petrol engines: the 1.2-litre naturally aspirated and the 1.0-litre turbo-petrol unit. The diesel engine is likely to be borrowed from the Seltos -- that is, the 1.5-litre diesel. The naturally aspirated petrol will only be offered with a manual gearbox while the turbo-petrol engine will come with a choice of three transmission options: 6-speed manual, 7-speed dual-clutch automatic, and the newly introduced 6-speed iMT (clutchless manual). Kia is expected to offer the diesel engine with a 6-speed manual and introduce a 6-speed automatic option borrowed from the Seltos."
      },
      {
        carImage:
          "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/125:94/w_1994,h_1500,c_limit/Transpo_G70_TA-518126.jpg",
        date: "2020-03-05",
        name: "Transpo",
        description:
          "The Transpo is expected to make use of the Venue’s petrol engines: the 1.2-litre naturally aspirated and the 1.0-litre turbo-petrol unit. The diesel engine is likely to be borrowed from the Seltos -- that is, the 1.5-litre diesel. The naturally aspirated petrol will only be offered with a manual gearbox while the turbo-petrol engine will come with a choice of three transmission options: 6-speed manual, 7-speed dual-clutch automatic, and the newly introduced 6-speed iMT (clutchless manual). Kia is expected to offer the diesel engine with a 6-speed manual and introduce a 6-speed automatic option borrowed from the Seltos."
      },
      {
        carImage:
          "https://img.etimg.com/thumb/msid-72081976,width-640,resizemode-4,imgsize-35648/elva-mclarens-latest-sports-car.jpg",
        date: "2020-02-02",
        name: "elva molarens",
        description:
          "The elva molarens is expected to make use of the Venue’s petrol engines: the 1.2-litre naturally aspirated and the 1.0-litre turbo-petrol unit. The diesel engine is likely to be borrowed from the Seltos -- that is, the 1.5-litre diesel. The naturally aspirated petrol will only be offered with a manual gearbox while the turbo-petrol engine will come with a choice of three transmission options: 6-speed manual, 7-speed dual-clutch automatic, and the newly introduced 6-speed iMT (clutchless manual). Kia is expected to offer the diesel engine with a 6-speed manual and introduce a 6-speed automatic option borrowed from the Seltos."
      }
    ],
    Q3: [
      {
        carImage:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg",
        date: "2020-02-01",
        name: "Bugatti Chiron",
        description:
          "The Bugatti chiron is expected to make use of the Venue’s petrol engines: the 1.2-litre naturally aspirated and the 1.0-litre turbo-petrol unit. The diesel engine is likely to be borrowed from the Seltos -- that is, the 1.5-litre diesel. The naturally aspirated petrol will only be offered with a manual gearbox while the turbo-petrol engine will come with a choice of three transmission options: 6-speed manual, 7-speed dual-clutch automatic, and the newly introduced 6-speed iMT (clutchless manual). Kia is expected to offer the diesel engine with a 6-speed manual and introduce a 6-speed automatic option borrowed from the Seltos."
      },
      {
        carImage:
          "https://img.etimg.com/thumb/msid-72081976,width-640,resizemode-4,imgsize-35648/elva-mclarens-latest-sports-car.jpg",
        date: "2020-02-02",
        name: "elva molarens",
        description:
          "The elva molarens is expected to make use of the Venue’s petrol engines: the 1.2-litre naturally aspirated and the 1.0-litre turbo-petrol unit. The diesel engine is likely to be borrowed from the Seltos -- that is, the 1.5-litre diesel. The naturally aspirated petrol will only be offered with a manual gearbox while the turbo-petrol engine will come with a choice of three transmission options: 6-speed manual, 7-speed dual-clutch automatic, and the newly introduced 6-speed iMT (clutchless manual). Kia is expected to offer the diesel engine with a 6-speed manual and introduce a 6-speed automatic option borrowed from the Seltos."
      },
      {
        carImage:
          "https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Sonet/7256/1581331845711/front-left-side-47.jpg",
        date: "2020-03-05",
        name: "Kia sonet",
        description:
          "The Sonet is expected to make use of the Venue’s petrol engines: the 1.2-litre naturally aspirated and the 1.0-litre turbo-petrol unit. The diesel engine is likely to be borrowed from the Seltos -- that is, the 1.5-litre diesel. The naturally aspirated petrol will only be offered with a manual gearbox while the turbo-petrol engine will come with a choice of three transmission options: 6-speed manual, 7-speed dual-clutch automatic, and the newly introduced 6-speed iMT (clutchless manual). Kia is expected to offer the diesel engine with a 6-speed manual and introduce a 6-speed automatic option borrowed from the Seltos."
      }
    ],
    Q4: [
      {
        carImage:
          "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/125:94/w_1994,h_1500,c_limit/Transpo_G70_TA-518126.jpg",
        date: "2020-03-05",
        name: "Transpo",
        description:
          "The Transpo is expected to make use of the Venue’s petrol engines: the 1.2-litre naturally aspirated and the 1.0-litre turbo-petrol unit. The diesel engine is likely to be borrowed from the Seltos -- that is, the 1.5-litre diesel. The naturally aspirated petrol will only be offered with a manual gearbox while the turbo-petrol engine will come with a choice of three transmission options: 6-speed manual, 7-speed dual-clutch automatic, and the newly introduced 6-speed iMT (clutchless manual). Kia is expected to offer the diesel engine with a 6-speed manual and introduce a 6-speed automatic option borrowed from the Seltos."
      },
      {
        carImage:
          "https://img.etimg.com/thumb/msid-72081976,width-640,resizemode-4,imgsize-35648/elva-mclarens-latest-sports-car.jpg",
        date: "2020-02-02",
        name: "elva molarens",
        description:
          "The elva molarens is expected to make use of the Venue’s petrol engines: the 1.2-litre naturally aspirated and the 1.0-litre turbo-petrol unit. The diesel engine is likely to be borrowed from the Seltos -- that is, the 1.5-litre diesel. The naturally aspirated petrol will only be offered with a manual gearbox while the turbo-petrol engine will come with a choice of three transmission options: 6-speed manual, 7-speed dual-clutch automatic, and the newly introduced 6-speed iMT (clutchless manual). Kia is expected to offer the diesel engine with a 6-speed manual and introduce a 6-speed automatic option borrowed from the Seltos."
      }
    ]
  };
  constructor(private dialog: MatDialog) {}

  ngOnInit(){
    this.carsReleased.Q1.sort((val1, val2) => {
      return (new Date(val1.date) > new Date(val2.date) ? 1 : -1);
    });
    this.carsReleased.Q2.sort((val1, val2) => {
      return (new Date(val1.date) > new Date(val2.date) ? 1 : -1);
    });
    this.carsReleased.Q3.sort((val1, val2) => {
      return (new Date(val1.date) > new Date(val2.date) ? 1 : -1);
    });
    this.carsReleased.Q4.sort((val1, val2) => {
      return (new Date(val1.date) > new Date(val2.date) ? 1 : -1);
    });
  }
  openDetailsDialog(data) {
    const dialogRef = this.dialog.open(DetailsDialogComponent, {
      data
    });
  }
}
