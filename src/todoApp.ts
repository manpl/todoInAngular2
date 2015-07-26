/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

interface ItemsRepository {
	add();
	remove();
	getAll();
}


class ItemsLocalStorageRepository implements ItemsRepository {	
	items: Array<String>;

	constructor(){
		this.items = ['angular2', 'angular', 'something else'];
	}
	
	add(){
		
	}
	
	remove(){
		
	}
	
	getAll() : Array<String>{
		return this.items;
	}
}

// Annotation section
@Component({
	selector: 'todo-list',
	injectables: [ItemsLocalStorageRepository]	
})
@View({
  templateUrl: 'templates/todo.html',
  directives: [NgFor]
})
// Component controller
class todoApp {
	name: string;
	storage: ItemsRepository;
	items: Array<String>;
	 
	constructor(itemsRepository: ItemsLocalStorageRepository ) {
		
		console.log(arguments);
		
		this.name = 'todo list';
		this.storage = new ItemsLocalStorageRepository();
		this.items = this.storage.getAll();
	}
}

bootstrap(todoApp, [ItemsLocalStorageRepository]); 