import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  jobs: any[] = [
    {company: "Sogeti"}, {company: "Boot Country"}, {company: "Assurex Health"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
