import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {APP_BASE_HREF} from '@angular/common'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MatSelectModule} from '@angular/material/select'
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider'
import { MatCardModule} from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';

describe('AppComponent', () => {
  const routes: Routes = [
    {path:"", component : HomeComponent, pathMatch:"full"},
    {path:"details", component: UserDetailsComponent, pathMatch:"full"},
    {path:"**", component:NotFoundComponent}
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterModule.forRoot(routes),
        MatSelectModule,
        MatListModule,
        MatDividerModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        UserDetailsComponent,
        NotFoundComponent
      ],
      providers:[
        {provide: APP_BASE_HREF, useValue:"/"}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'client'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('client');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('My Application');
  });
});
