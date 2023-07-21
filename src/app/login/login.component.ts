import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormControl, FormGroup } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { invoke } from "@tauri-apps/api/tauri";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule, MatFormFieldModule, MatTabsModule],
})
export class LoginComponent {


  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    invoke('principal')
      .then((message) => console.log(message))
      .catch((error) => console.error(error))
  }
}
