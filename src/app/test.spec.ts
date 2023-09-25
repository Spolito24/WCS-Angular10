import { TestBed, waitForAsync } from '@angular/core/testing';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailService } from './cocktail.service';

describe('Quest Test Suite', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CocktailsListComponent],
    }).compileComponents();
  }));

  fit('service should be created', () => {
    const service: CocktailService = TestBed.inject(CocktailService);
    expect(service).toBeTruthy();
  });

  fit('service should have a "getCocktails" method which returns at least one object', () => {
    const service: CocktailService = TestBed.inject(CocktailService);
    const tab = service.getCocktails();
    expect(tab.length).toBeGreaterThan(0);
  });

  fit('should create a CocktailsListComponent instance', waitForAsync(() => {
    const fixture = TestBed.createComponent(CocktailsListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  fit('component should have a public property named "cocktails"', waitForAsync(() => {
    const fixture = TestBed.createComponent(CocktailsListComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.cocktails).toBeTruthy();
  }));

  fit('component should display at least one cocktail', waitForAsync(() => {
    const fixture = TestBed.createComponent(CocktailsListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const content = compiled.textContent;
    const first = fixture.componentInstance.cocktails[0];
    expect(content).toContain(first.name);
  }));
});
