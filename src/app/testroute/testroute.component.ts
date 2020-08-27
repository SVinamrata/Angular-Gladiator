import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-testroute',
  templateUrl: './testroute.component.html',
  styleUrls: ['./testroute.component.css']
})
export class TestrouteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  myLevel(){
    this.router.navigateByUrl('testInstructionsLink');
  }
}
