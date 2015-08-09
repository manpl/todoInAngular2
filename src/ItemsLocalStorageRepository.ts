/// <reference path="ItemsRepository.ts" />
import { ItemsRepository } from "ItemsRepository"

class ItemsLocalStorageRepository implements ItemsRepository {	
	items: Array<String>;

	constructor(){
		this.items = ['angular2', 'angular', 'something else'];
	}
	
	add(item:String){
		this.items.push(item);
	}
	
	remove(){
		
	}
	
	getAll() : Array<String>{
		return this.items;
	}
}

export { ItemsLocalStorageRepository };