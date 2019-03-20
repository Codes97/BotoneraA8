import { Component, OnInit } from '@angular/core';
import { ListaAudiosService } from './home.service';
@Component({
  selector: 'btn-a8-home',
  host: { '(keyup)': 'hotkeys($event)'},
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent{

  version: string = 'v1.130';
  audio = new Audio();

  public hotKeys = { };
  public combinedHotKeys = { };

  public listaLocoEndu = [];
  public travas = [];
  public ronnieColeman = [];
  public clasicos = [];
  public futbol = [];
  public varios = [];
  public merca = [];
  public cantinfla =[];
  public todos = [];
  
  public speed = 1.0;

  constructor(private sonidosService: ListaAudiosService) {
    this.hotKeys = this.sonidosService.getObjetoHotKeys();
    this.combinedHotKeys = this.sonidosService.getObjetoHotKeysCombinadas();
	this.obtenerListasAudio();
  }
  

  obtenerListasAudio(){
    this.listaLocoEndu = this.sonidosService.getListaLocoEndu();
    this.travas = this.sonidosService.getListaTravas();
    this.ronnieColeman = this.sonidosService.getListaRonnieColeman();
    this.clasicos = this.sonidosService.getListaClasicos();
    this.futbol = this.sonidosService.getListaFutbol();
    this.varios = this.sonidosService.getListaVarios();
	this.merca = this.sonidosService.getListaMerca();
	this.cantinfla = this.sonidosService.getListaCantinfla();
	this.todos = this.todos.concat(this.listaLocoEndu, this.travas, this.ronnieColeman, this.clasicos, this.futbol, this.varios, this.merca);
	this.todos = this.todos.map(a => a.src);
	
	for (const combinedHotKey in this.combinedHotKeys) {
		let a = this.combinedHotKeys[combinedHotKey];
		if(a.indexOf('lo_') != -1){
			this.todos.push(a);
		}		
	}
	
  }

  public play(src): void {
    if(src != 'undefined'){
        this.audio.src = '../assets/audio/'+ src +'.mp3';
        this.audio.load();
		this.audio.playbackRate = this.speed;
        this.audio.play();
      }
  }

  public stop(): void {
    this.audio.pause();
  }
  
  public speedUp(): void{
	if(this.speed >= 2.0){
		this.speed = 2.0;
	}else{
		this.speed += 0.1;
	}
  }
  public speedDown(): void{
	if(this.speed <= 0.1){
		this.speed = 0.1;
	}else{
		this.speed -= 0.1;
	}
  }
  public resetSpeed() :void{
	this.stop();
	this.speed = 1.0;
  }
  
  public random(): void {
	  let rng = this.todos[Math.floor(Math.random() * this.todos.length)];
	  this.play(rng);
  }

  hotkeys($event) {
	if ($event.keyCode == 220) {
      this.random();
    }
	if($event.keyCode == 107){
		this.speedUp();
	}
	if($event.keyCode == 109){
		this.speedDown();
	}
	if($event.keyCode == 110){
		this.resetSpeed();
	}
    if ($event.keyCode == 16) {
      this.stop();
    } else {
      if ($event.keyCode && $event.ctrlKey) {
        this.play(`${this.combinedHotKeys[$event.keyCode]}`);
        return true;
      }
      this.play(`${this.hotKeys[$event.keyCode]}`);
    }
    return true;
  }
}
