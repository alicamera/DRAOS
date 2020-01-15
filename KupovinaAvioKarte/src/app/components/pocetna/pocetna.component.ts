import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      polaziste: ['', Validators.required],
      odrediste: ['', Validators.required],
      klasa: ['', Validators.required],
      availability:  ['', Validators.required],
      brOsoba:  ['', Validators.required]
    });
  }
  trazi(){
    this.router.navigate(['listaPonuda']);
  }

}
