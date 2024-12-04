import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IgxAvatarComponent, IgxButtonDirective, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_DIALOG_DIRECTIVES } from 'igniteui-angular';
import { AppointmentsComponent } from './appointments.component';

describe('AppointmentsComponent', () => {
  let component: AppointmentsComponent;
  let fixture: ComponentFixture<AppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppointmentsComponent, NoopAnimationsModule, FormsModule, IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IgxAvatarComponent, IgxButtonDirective, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_DIALOG_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
