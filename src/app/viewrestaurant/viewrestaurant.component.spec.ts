import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrestaurantComponent } from './viewrestaurant.component';

describe('ViewrestaurantComponent', () => {
  let component: ViewrestaurantComponent;
  let fixture: ComponentFixture<ViewrestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewrestaurantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
