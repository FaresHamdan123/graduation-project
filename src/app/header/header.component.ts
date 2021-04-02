import {Component} from '@angular/core';
import {DataStoragreService} from '../shared/data-storagre.service';


@Component({
  selector: 'app-header',
  templateUrl : './header.component.html'
})
export class HeaderComponent {
// @Output() featureSelected = new EventEmitter<string>();

  //onSelect(feature: string) {
  //  this.featureSelected.emit(feature);
//  }
  constructor(private dataStoragreService: DataStoragreService) {
  }
  onSaveData(){
    this.dataStoragreService.storeRecipes()
      .subscribe(
        (response: Response) =>{
          console.log(response);
        }
      );
  }
  onFetchData(){
    this.dataStoragreService.getRecipes();
  }
}
