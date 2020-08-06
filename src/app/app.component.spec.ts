import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AppComponent } from "./app.component";
describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    const matDialogStub = () => ({
      open: (detailsDialogComponent, object) => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [{ provide: MatDialog, useFactory: matDialogStub }]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it("can load instance", () => {
    expect(component).toBeTruthy();
  });
  it(`step1Completed has default value`, () => {
    expect(component.step1Completed).toEqual(false);
  });
  it(`isLinear has default value`, () => {
    expect(component.isLinear).toEqual(true);
  });
});
