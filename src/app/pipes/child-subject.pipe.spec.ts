import { ChildSubjectPipe } from './child-subject.pipe';
import { ProviderModel } from '../api.model';
describe('ChildSubjectPipe', () => {
  let pipe: ChildSubjectPipe;
  beforeEach(() => {
    pipe = new ChildSubjectPipe();
  })
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('transform with no data', () => {
    expect(pipe.transform(null, null)).toEqual([]);
  });
  it('transform with data and valid search string', () => {
    const mockData: ProviderModel[] = [
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
    const methodCall = pipe.transform(mockData, 'Databases');
    expect(methodCall.length).toBe(1);
    expect(methodCall).toEqual([{
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
    }]);
  });
  it('transform with data and invalid search string', () => {
    const mockData: ProviderModel[] = [
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
    const methodCall = pipe.transform(mockData, 'abc');
    expect(methodCall.length).toBe(0);
    expect(methodCall).toEqual([]);
  });
  it('transform with data and empty search string', () => {
    const mockData: ProviderModel[] = [
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
    const methodCall = pipe.transform(mockData, null);
    expect(methodCall.length).toBe(2);
    expect(methodCall).toEqual(mockData);
  });
});
