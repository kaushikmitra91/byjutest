import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChildSubjectPipe } from './pipes/child-subject.pipe';
import { GenericService } from './services/generic.service';
import { HttpClientModule } from '@angular/common/http';
describe('AppComponent', () => {
  let gs: GenericService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [
        AppComponent,
        ChildSubjectPipe
      ],
      providers: [GenericService]
    }).compileComponents();
    gs = TestBed.get(GenericService);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('ngOnInit test', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    spyOn(app, 'fetchData');
    fixture.detectChanges();
    expect(app.fetchData).toHaveBeenCalled();
  });
  it('fetchData test', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.fetchData()).toBeUndefined();
  });
  it(`should test sortByNextSessionDate`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.apiResponse = [
      {
        'Child Subject': "Artificial Intelligence",
        'Course Id': 301,
        'Course Name': "Introduction to Artificial Intelligence",
        'Length': 10,
        'Next Session Date': "Oct, 2011",
        'Parent Subject': "Computer Science",
        'Provider': "Udacity",
        'Universities': { 'Institutions': "Stanford University" },
        'Url': "https://www.ai-class.com/",
        'Video(Url)': "https://www.youtube.com/watch?feature=player_embedded&v=BnIJ7Ba5Sr4"
      },
      {
        'Child Subject': "Databases",
        'Course Id': 303,
        'Course Name': "Introduction to Databases",
        'Length': null,
        'Next Session Date': "Self paced",
        'Parent Subject': "Programming",
        'Provider': "Coursera",
        'Universities': { 'Institutions': "Stanford University" },
        'Url': "https://www.coursera.org/course/db",
        'Video(Url)': ""
      }
    ];
    expect(app.sortByNextSessionDate()).toBeUndefined();
  });
  it(`should test sortByLength`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.apiResponse = [
      {
        'Child Subject': "Artificial Intelligence",
        'Course Id': 301,
        'Course Name': "Introduction to Artificial Intelligence",
        'Length': 10,
        'Next Session Date': "Oct, 2011",
        'Parent Subject': "Computer Science",
        'Provider': "Udacity",
        'Universities': { 'Institutions': "Stanford University" },
        'Url': "https://www.ai-class.com/",
        'Video(Url)': "https://www.youtube.com/watch?feature=player_embedded&v=BnIJ7Ba5Sr4"
      },
      {
        'Child Subject': "Databases",
        'Course Id': 303,
        'Course Name': "Introduction to Databases",
        'Length': null,
        'Next Session Date': "Self paced",
        'Parent Subject': "Programming",
        'Provider': "Coursera",
        'Universities': { 'Institutions': "Stanford University" },
        'Url': "https://www.coursera.org/course/db",
        'Video(Url)': ""
      }
    ];
    expect(app.sortByLength()).toBeUndefined();
  });
  it(`should test getTime with proper date format`, () => {
    const dummyDate = new Date('25 Jan,2014');
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.getTime(dummyDate)).toBe(1390588200000);
  });
  it(`should test getTime with improper date format`, () => {
    const dummyDate = new Date('');
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.getTime(dummyDate)).toBe(0);
  });
  it(`should test makeDateCompatible with date with th `, () => {
    const dummyDate = '25th Jan,2014';
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.makeDateCompatible(dummyDate)).toBe('25 Jan,2014');
  });
  it(`should test makeDateCompatible with date without th`, () => {
    const dummyDate = '25 Jan,2014';
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.makeDateCompatible(dummyDate)).toBe('25 Jan,2014');
  });

});
