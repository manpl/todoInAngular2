/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

interface ItemsRepository {
	add(item:String);
	remove();
	getAll();
}


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
		this.storage = itemsRepository;
		this.items = this.storage.getAll();
	}
	
	addTodo(item){
		this.storage.add(item);
		this.items = this.storage.getAll();
	}
	
	doneTyping($event){
		if($event.which === 13) {
		  this.addTodo($event.target.value);
		  $event.target.value = null;
		}
	}
}

bootstrap(todoApp, [ItemsLocalStorageRepository]); 