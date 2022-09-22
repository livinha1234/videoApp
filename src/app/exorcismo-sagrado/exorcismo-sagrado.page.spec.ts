import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExorcismoSagradoPage } from './exorcismo-sagrado.page';

describe('ExorcismoSagradoPage', () => {
  let component: ExorcismoSagradoPage;
  let fixture: ComponentFixture<ExorcismoSagradoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExorcismoSagradoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExorcismoSagradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
