import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-home',
  imports: [RouterLink, IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
}
