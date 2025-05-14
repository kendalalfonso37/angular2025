import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { User } from '../../../models/user.interface';
import { UserService } from '../../../core/services/user.service';
import { UsuarioFormComponent } from '../usuario-form/usuario-form.component';

@Component({
  selector: 'app-usuario-create',
  imports: [UsuarioFormComponent, RouterLink],
  templateUrl: './usuario-create.component.html',
})
export class UsuarioCreateComponent {
  constructor(private userService: UserService, private router: Router) {}

  createUser(data: Partial<User>) {
    this.userService.createUser(data).subscribe(() => {
      this.router.navigate(['/usuarios']);
    });
  }
}
