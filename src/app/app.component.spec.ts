import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Jasmine'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Jasmine');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Jasmine!');
  }));

  it('should have a p tag', function () {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const p = compiled.querySelector('p');
    expect(p).toBeDefined();
  });

  it('should show "Hello, World!" on the screen', function () {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const p = compiled.querySelector('p');
    expect(p.textContent).toBe('Hello, World!');
  });

  it('should have a button', function () {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('button');
    expect(button).toBeDefined();
  });

  it('should have a button that changes the title to "Hi"', function () {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const component = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('button');
    button.click();
    expect(component.title).toBe('Hi');
  });

  it('should have a div with id="foo"', function () {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const foo = compiled.querySelector('#foo');
    expect(foo.textContent).toBe('Foo');
  });

  it('should have a div with class="red"', function () {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const red = compiled.querySelector('.red');
    expect(red.textContent).toBe('Red');
  });
});
