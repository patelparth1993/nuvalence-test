import { ComponentFixture, TestBed } from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {HarnessLoader} from '@angular/cdk/testing';
import { Router, ActivatedRoute } from '@angular/router'
import { UserDetailsComponent } from './user-details.component';
import { MatSelectModule} from '@angular/material/select'
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider'
import { MatCardModule} from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardHarness} from '@angular/material/card/testing'
import { MatToolbarHarness } from '@angular/material/toolbar/testing';
const testUser=  {
  "gender": "male",
  "name": {
      "title": "Mr",
      "first": "Aleksej",
      "last": "Knott"
  },
  "location": {
      "street": {
          "number": 962,
          "name": "Parkstraße"
      },
      "city": "Dithmarschen",
      "state": "Schleswig-Holstein",
      "country": "Germany",
      "postcode": 35760,
      "coordinates": {
          "latitude": "-43.3861",
          "longitude": "-119.1423"
      },
      "timezone": {
          "offset": "-8:00",
          "description": "Pacific Time (US & Canada)"
      }
  },
  "email": "aleksej.knott@example.com",
  "login": {
      "uuid": "0721b3e4-a215-41ee-a732-6b0d5be8b289",
      "username": "browncat484",
      "password": "hudson",
      "salt": "Qkgwg35Q",
      "md5": "3315e992df4cdf948b230de62a93a6a9",
      "sha1": "cf0184c0ed6d642612289645f08598d6e5f067d2",
      "sha256": "f061f216ed9681239e3e9d5b7d40caa11c93e5e6c6227e8a57c27a742d368812"
  },
  "dob": {
      "date": "1984-10-10T08:56:12.911Z",
      "age": 37
  },
  "registered": {
      "date": "2002-06-25T22:32:48.740Z",
      "age": 19
  },
  "phone": "0368-5615589",
  "cell": "0172-7318687",
  "id": {
      "name": "",
      "value": null
  },
  "picture": {
      "large": "https://randomuser.me/api/portraits/men/82.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/82.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/82.jpg"
  },
  "nat": "DE"
};

let loader: HarnessLoader;
describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async () => {
    window.history.pushState({user:testUser},'','')
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      imports:[
        MatSelectModule,
        MatListModule,
        MatDividerModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule
      ],
      providers:[
        
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    loader = TestbedHarnessEnvironment.loader(fixture)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render user name in Menu',()=>{
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#userDetailMenu').innerHTML).toContain('Aleksej');
  })

  it('should render user full Name in title',async ()=>{
    const cards = await loader.getHarness(MatCardHarness);
    expect(await cards.getTitleText()).toContain('Mr Aleksej Knott')
  })

  it('should render user phone and email',async ()=>{
    const cards = await loader.getHarness(MatCardHarness);
    expect(await cards.getText()).toContain('aleksej.knott@example.com')
    expect(await cards.getText()).toContain('0368-5615589')
  })

  it('should navigate back to All Users',async ()=>{
    const compiled = fixture.nativeElement;
    const userMenu = compiled.querySelector('#userMenu');
    spyOn(component,"navigateToUsers")
    userMenu.click();
    const toolbar = await loader.getHarness(MatToolbarHarness);
    expect(component.navigateToUsers).toHaveBeenCalled();
    console.log("My Test logs: ", toolbar.hasMultipleRows())
  })

});
