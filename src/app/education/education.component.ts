import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  schools: any[] = [

    {school: "MAX Technical Training",
    year:2021},
    {school: "NKU Clinical Mental Health Counseling",
    year:2019},
    {school: "NKU",
    year:2017}
  ]
  skills: string[] = ["Git", "Github", "SQL", "Java", "Spring", "SpringBoot", "OOP"];
  constructor() { }

  ngOnInit(): void {
  }

}
