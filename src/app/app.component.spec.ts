import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SystemsComponent } from './systems/systems.component';
import { SystemComponent } from './systems/system/system.component';
import { SystemService } from './services/system.service';
import { HttpClientModule } from '@angular/common/http';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SystemsComponent,
        SystemComponent
      ],
      providers: [SystemService],
      imports: [HttpClientModule]      
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
