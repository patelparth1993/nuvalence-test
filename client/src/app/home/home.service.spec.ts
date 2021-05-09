import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHandler } from '@angular/common/http'

import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[HttpClient, HttpHandler]
    });
    service = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
