/// <reference path="typings/angular2/angular2.d.ts" />
/// <reference path="ItemsLocalStorageRepository.ts" />

import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import { ItemsRepository } from 'ItemsRepository';
import { ItemsLocalStorageRepository } from 'ItemsLocalStorageRepository'


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