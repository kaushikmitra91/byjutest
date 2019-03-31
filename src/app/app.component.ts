import { Component } from '@angular/core';
import { GenericService } from './services/generic.service';
import { apiList } from './apilist';
import { ProviderModel } from './api.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private gs: GenericService) {
  }
  apiResponse: ProviderModel[];
  noResponse = false;
  searchString: string;
  sortTypeLength = false;
  sortTypeDate = false;
  noShowLength = false;
  noShowDate = false;
  loading = true;
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    const url = apiList.providerApi;
    this.gs.httpGet(url).subscribe(
      (data: ProviderModel[]) => {
        this.apiResponse = data;
        this.loading = false;
      },
      error => {
        this.noResponse = true;
      }
    )
  }
  sortByNextSessionDate() {
    this.noShowDate = true;
    this.noShowLength = false;
    this.sortTypeDate = !this.sortTypeDate;
    this.apiResponse.sort((next: ProviderModel, current: ProviderModel) => {
      const obj1 = new Date(this.makeDateCompatible(next['Next Session Date']));
      const obj2 = new Date(this.makeDateCompatible(current['Next Session Date']));
      return this.sortTypeDate ? this.getTime(obj1) - this.getTime(obj2) : this.getTime(obj2) - this.getTime(obj1);
    });
  }
  sortByLength() {
    this.noShowDate = false;
    this.noShowLength = true;
    this.sortTypeLength = !this.sortTypeLength;
    this.apiResponse.sort((next: ProviderModel, current: ProviderModel) => {
      const obj1 = next['Length'];
      const obj2 = current['Length'];
      return this.sortTypeLength ? obj1 - obj2 : obj2 - obj1;
    });
  }

  private getTime(date?: Date) {
    return isNaN(date.getTime()) ? 0 : date.getTime();
  }
  private makeDateCompatible(data) {
    return data.replace('st', '').replace('nd', '').replace('rd', '').replace('th', '');
  }

}
