import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HomeService } from "./home.service"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeService:HomeService, private router:Router) { }
  allUsers:Array<any> = []
  ngOnInit(): void {
    this.homeService.getAllUsers().subscribe(
      (data)=>{
        if(data.info && data.info.results>0){

            this.allUsers = data.results
        }else{
          //render Error
        }
      },(error=>{
        //render Error
        console.log("Something Wrong: ", error)
      })
    )
  }

  onUserSelect(user:any){
    let userSelected = user.source._value[0]
    this.router.navigate(['/details'],{state:{user:userSelected}})
  }

}
