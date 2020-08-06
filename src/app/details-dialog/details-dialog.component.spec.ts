import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { MatDialogRef,MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DetailsDialogComponent } from "./details-dialog.component";


describe("DetailsDialogComponent", () => {
  let component: DetailsDialogComponent;
  let fixture: ComponentFixture<DetailsDialogComponent>;
  beforeEach(() => {
    const matDialogRefStub = () => ({ close: arg => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DetailsDialogComponent],
      providers: [{ provide: MatDialogRef, useFactory: matDialogRefStub }, {provide: MAT_DIALOG_DATA, useValue: MAT_DIALOG_DATA}]
    });
    fixture = TestBed.createComponent(DetailsDialogComponent);
    component = fixture.componentInstance;
  });
  it("can load instance", () => {
    expect(component).toBeTruthy();
  });
  describe("onClose", () => {
    it("makes expected calls", () => {
      const matDialogRefStub: any = fixture.debugElement.injector.get(
        MatDialogRef
      );
      spyOn(matDialogRefStub, "close").and.callThrough();
      component.onClose();
      expect(matDialogRefStub.close).toHaveBeenCalled();
    });
  });
});
