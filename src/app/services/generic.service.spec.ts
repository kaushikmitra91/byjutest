import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { GenericService } from './generic.service';
import { apiList } from '../apilist';
import { ProviderModel } from '../api.model';
describe('GenericService', () => {
  let service: GenericService;
  let httpMockC: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GenericService]
    })
    service = TestBed.get(GenericService);
    httpMockC = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMockC.verify();
  });


  describe('#get call', () => {
    it('should return an Observable<User[]>', () => {
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
      const url = apiList.providerApi;
      service.httpGet(url).subscribe((data: ProviderModel[]) => {
        expect(data.length).toBe(2);
        expect(data).toEqual(mockData);
      });
      const req = httpMockC.expectOne(url);
      expect(req.request.method).toBe("GET");
      req.flush(mockData);
    });
  });
});
