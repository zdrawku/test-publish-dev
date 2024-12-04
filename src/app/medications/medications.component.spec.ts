import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IgxButtonDirective } from 'igniteui-angular';
import { MedicationsComponent } from './medications.component';

describe('MedicationsComponent', () => {
  let component: MedicationsComponent;
  let fixture: ComponentFixture<MedicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MedicationsComponent, NoopAnimationsModule, FormsModule, IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IgxButtonDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
