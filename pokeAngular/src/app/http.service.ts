import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

	constructor(private _http: HttpClient) {
		this.getPokemon();
		this.getMorePokemon();
	}
	getPokemon(){
		let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
		bulbasaur.subscribe(data => {
			console.log("Pokemon info: ", data);
			console.log("First ability is ", data.abilities[0].ability['name']);
		});
	}
	getMorePokemon(){
		let results = this._http.get('https://pokeapi.co/api/v2/ability/34/');
		results.subscribe(data => {
			console.log("Other pokemon with ability:")
			for(var x = 0; x < data['pokemon'].length; x++){
				console.log(data['pokemon'][x]['pokemon']['name'])
			}
		});
	}
}
