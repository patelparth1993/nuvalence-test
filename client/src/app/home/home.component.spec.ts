import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http'
import { Router } from '@angular/router'
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {HarnessLoader} from '@angular/cdk/testing';
import { RouterModule, Routes } from '@angular/router';
import { MatSelectModule} from '@angular/material/select'
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider'
import { MatCardModule} from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { HomeService } from "./home.service"

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const routes: Routes = [
    {path:"", component : HomeComponent, pathMatch:"full"},
    {path:"details", component: UserDetailsComponent, pathMatch:"full"},
    {path:"**", component:NotFoundComponent}
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({      
      declarations: [ HomeComponent ],
      imports:[
        RouterModule.forRoot(routes),
        MatSelectModule,
        MatListModule,
        MatDividerModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        HttpClientModule
      ],
      providers: [HttpClient, HttpHandler, HomeService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
