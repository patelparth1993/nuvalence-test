import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor( private location:Location) { 
    (history && history.state && !history.state.user)?
      this.location.back():
      null;
  }
  user:any={}
  ngOnInit(): void {
    //this.user = this.route.snapshot.paramMap.get('user')
    this.user = history.state.user;
  }

  navigateToUsers(){
    this.location.back()
  }

}
