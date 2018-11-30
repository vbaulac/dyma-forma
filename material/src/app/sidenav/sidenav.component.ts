import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material'
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: []
})
export class SidenavComponent implements OnInit {

  constructor(private fb: FormBuilder, private matIconRegistry : MatIconRegistry) { }

  ngOnInit() {
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

}
