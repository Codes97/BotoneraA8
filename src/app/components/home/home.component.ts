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

  public KeyBoard0 = { };
  public KeyBoard1 = { };
  public KeyBoard2 = { };
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
  public vamosNewell = [];
  public listaGestion = [];
  public selected = [];
  public kMap = {};
  public defaultMode = 0;
  
  public mauriBotActive = false;
  public mauriBotInterval = null;
  
  readonly MAX_KEYBOARDS = 2;
  
  readonly MAX_MAURIBOT_TIME = 60000;
  readonly MIN_MAURIBOT_TIME = 15000;
  
  public speed = 1.0;

  constructor(private sonidosService: ListaAudiosService) {
    this.KeyBoard0 = this.sonidosService.getHotKeysKeyB0();
    this.KeyBoard1 = this.sonidosService.getHotKeysKeyB1();
    this.KeyBoard2 = this.sonidosService.getHotKeysKeyB2();
    this.combinedHotKeys = this.sonidosService.getObjetoHotKeysCombinadas();
	this.kMap = this.sonidosService.getKeyMap();
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
	this.vamosNewell = this.sonidosService.getListaNewell();
	this.listaGestion = this.sonidosService.getListaGestion();
	this.todos = this.todos.concat(this.listaLocoEndu, this.travas, this.ronnieColeman, this.clasicos, this.futbol, this.varios, this.merca, this.cantinfla, this.vamosNewell, this.listaGestion);
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
	if ($event.keyCode == 231) {
      this.random();
	  return;
    }
	if($event.keyCode == this.kMap['NUM0']){
		if(this.defaultMode < this.MAX_KEYBOARDS)
			this.defaultMode++;
		else{
			this.defaultMode = 0;
		}
	}
	
	if($event.keyCode == this.kMap['PAD_MAS']){
		this.speedUp();
	}
	
	if($event.keyCode == this.kMap['PAD_MENOS']){
		this.speedDown();
	}
	
	if($event.keyCode == this.kMap['PAD_PUNTO']){
		this.resetSpeed();
	}
	
    if ($event.keyCode == this.kMap['SHIFT']) {
      this.stop();
    }
	
    if ($event.keyCode == this.kMap['ALT']) {
      this.mauriBot();
    }
	
	if ($event.keyCode && $event.ctrlKey) {
		this.play(this.combinedHotKeys[$event.keyCode]);
		return true;
	}
	  
	switch(this.defaultMode){
	  case 0: this.play(this.KeyBoard0[$event.keyCode]); break;
	  case 1: this.play(this.KeyBoard1[$event.keyCode]); break;
	  case 2: this.play(this.KeyBoard2[$event.keyCode]); break;
	}
	
    return true;
  }
  
  public randomNumber(min, max) : number{
	  return Math.random() * (max - min) + min;
  }
  
  public mauriBot(){
	  if(this.mauriBotActive){
		this.mauriBotActive = false;
	  }else{
		  let delay = Math.floor(this.randomNumber(this.MIN_MAURIBOT_TIME, this.MAX_MAURIBOT_TIME));
		  this.mauriBotActive = true;
		  this.mauriBotInterval = window.setInterval(this.mauriBotAction.bind(this), delay);
	  }
  }
  
  public mauriBotAction(){
	  if(this.mauriBotActive){
		  let delay = Math.floor(this.randomNumber(this.MIN_MAURIBOT_TIME, this.MAX_MAURIBOT_TIME));
		  this.random();
		  clearInterval(this.mauriBotInterval);
		  this.mauriBotInterval = window.setInterval(this.mauriBotAction.bind(this), delay);
	  }else{
		  clearInterval(this.mauriBotInterval);
	  }
	  
  }
}
