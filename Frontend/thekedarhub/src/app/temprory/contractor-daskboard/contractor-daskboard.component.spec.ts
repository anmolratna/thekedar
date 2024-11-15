import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorDaskboardComponent } from './contractor-daskboard.component';

describe('ContractorDaskboardComponent', () => {
  let component: ContractorDaskboardComponent;
  let fixture: ComponentFixture<ContractorDaskboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractorDaskboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractorDaskboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
