import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifiacteComponent } from './certifiacte.component';

describe('CertifiacteComponent', () => {
  let component: CertifiacteComponent;
  let fixture: ComponentFixture<CertifiacteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertifiacteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertifiacteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
