import {Component} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HostService} from '../../services/host-service';

@Component({
  selector: 'auction-search',
  providers: [HostService],
  templateUrl: 'app/components/search/search.html'
})
export default class SearchComponent {
  formModel: FormGroup;
  categories: string[];
  constructor(private hostService: HostService) {
    this.categories = this.hostService.getAllCategories();
    const fb = new FormBuilder();
    this.formModel = fb.group({
      'title': [null, Validators.minLength(3)],
      'price': [null, positiveNumberValidator],
      'category': [-1]
    })
  }
  onSearch() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
}
function positiveNumberValidator(control: FormControl): any {
  if (!control.value) return null;
  const price = parseInt(control.value);
  return price === null ||
    typeof price === 'number' &&
         price > 0 ? null : {positivenumber: true};
}
