import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsModule } from './transactions';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [TransactionsModule]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  });

  describe('compilation', () => {
    it('should create the Component', () => {
      expect(component).toBeTruthy();
    });
  });
});
