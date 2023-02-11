import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

enum CATEGORY_CONFIG {
  PROPERTY_NAME = "category_title",
  REQUEST_REPEAT_TIME = 500,
}

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {

  public setCategoriesTitle(title: string):void {
    localStorage.setItem(CATEGORY_CONFIG.PROPERTY_NAME, title);
  }

  public getCategoriesTitle(): Observable<string | null> {
   return new Observable<string | null>((obs) =>{
    function getTitle() {
      setTimeout(() => {
        obs.next(localStorage.getItem(CATEGORY_CONFIG.PROPERTY_NAME));
        getTitle();
      },CATEGORY_CONFIG.REQUEST_REPEAT_TIME);
    }
    getTitle();
   });
  }

}
