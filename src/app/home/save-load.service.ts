import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SaveLoadService {
   store = new Storage();
   await this.store.create();
  // store:Storage

  constructor() { }

  save(myList){
    this.store.set('todos', myList);
  }
}
