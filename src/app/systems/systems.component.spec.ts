import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemsComponent } from './systems.component';
import { SystemComponent } from './system/system.component';
import { SystemService } from '../services/system.service';
import { HttpClientModule } from '@angular/common/http';

describe('SystemsComponent', () => {
  let component: SystemsComponent;
  let fixture: ComponentFixture<SystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemsComponent, SystemComponent ],
      providers: [SystemService],
      imports: [HttpClientModule]      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
