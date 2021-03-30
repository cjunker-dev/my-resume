import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  schools: any[] = [
    {school: "NKU"},
    {school: "MAX Technical Training"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
