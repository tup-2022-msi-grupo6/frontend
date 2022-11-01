import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verificar-mail',
  templateUrl: './verificar-mail.component.html',
  styleUrls: ['./verificar-mail.component.css']
})
export class VerificarMailComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
