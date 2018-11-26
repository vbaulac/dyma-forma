import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { By } from "@angular/platform-browser";
import { UserService } from "./user.service";


describe('AppComponent', () => {

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents()
  }));

  it('test app title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const title = fixture.debugElement.query(By.css('h1')).nativeElement;
    fixture.detectChanges();
    expect(title.textContent).toEqual(' Welcome to testing2! ');
  })

  it('user service equal to AppComponent user', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const instance = fixture.componentInstance;
    const service = fixture.debugElement.injector.get(UserService)
    fixture.detectChanges();

    expect(instance.user).toEqual(service.user);
  })

  // dint forget the async keyword if calling (or mocking) async stuff
  it('getData from service is the one expected', async (() => {
    const fixture = TestBed.createComponent(AppComponent);
    const instance = fixture.componentInstance;
    const userService = fixture.debugElement.injector.get(UserService)
    fixture.detectChanges();

    spyOn(userService, 'getData').and.returnValue(Promise.resolve('newData')); // this is a mock

    // when stable wait for async call to come back
    fixture.whenStable().then(() => {
      expect(instance.data).toEqual('newData');
    })
  }))
})