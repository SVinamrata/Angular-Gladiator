import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-testroute',
  templateUrl: './testroute.component.html',
  styleUrls: ['./testroute.component.css']
})
export class TestrouteComponent implements OnInit {
  subjectName:any;
  currLevel: number;
  nextLevel:number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.subjectName = sessionStorage.subjectName;
    this.currLevel  = sessionStorage.level;
    this.nextLevel = Number(this.currLevel)+1;
  }
  
  myLevel(){
    this.router.navigateByUrl('testInstructionsLink');
  }
}
