import { Injectable } from '@angular/core';

@Injectable()
export class ListaAudiosService {

/*
/ agregar nuevo audio o nueva lista
*/

  locoEndu = [
    {displayName:'Carrera', src:'endu_carrera'},
    {displayName:'Carrera aparentemente', src:'endu_aparentemente'},
    {displayName:'roberto', keyCode:'', src:'endu_roberto'},
    {displayName:'Endu endu', src:'endu_endu'},
    {displayName:'Endu c/acelerada', src:'endu_aceleradaendu'},
    {displayName:'El otro estaba así', src:'endu_elotroestabaasi'},
    {displayName:'Susurros', src:'endu_susurros'},
    {displayName:'Escuchaba el bamm', src:'endu_escuchabaelbam'},
    {displayName:'Paaaa', src:'endu_paaa'},
    {displayName:'los cuatro', src:'endu_loscuatro'},
    {displayName:'curva muy pronuncia', src:'endu_estacurva'},
    {displayName:'taba muerto', src:'endu_muerto'},
    {displayName:'qepd', src:'endu_qepd'},
	{displayName:'aaaaaa', src:'endu_aaaaa'},
	{displayName:'roberto gil', src:'endu_roberto gil'}
  ];
  travas = [
    {src: 'mesobra', displayName:'Me sobra'},
    {src: 'trabas_mecontaron', displayName:'me contaron'},
    {src: 'trabas_activopasivo', displayName:'activo y pasivo'},
    {src: 'trabas_servicio', displayName:'servicio'},
    {src: 'ledijequeNo', displayName:'le dije que no!'},
    {src: 'trabas_asadito', displayName:'asadito'},
	{src: 'trabas_borracho', displayName:'borracho'},
	{src: 'trabas_doscosa', displayName:'dos cosa'},
	{src: 'trabas_involucrado', displayName:'involucrado'}
  ];
  ronnieColeman = [
    {src: 'ronnie_wow1', displayName:'wow 1'},
    {src: 'ronnie_wow2', displayName:'wow 2'},
    {src: 'ronnie_wooo1', displayName:'wooo 1'},
    {src: 'ronnie_wooo2', displayName:'wooo 2'},
    {src: 'ronnie_yeabuddy', displayName:'yeah buddy 1'},
    {src: 'ronnie_yeabuddy1', displayName:'yeah buddy 2'},
    {src: 'ronnie_yea', displayName:'yeah!'},
    {src: 'ronnie_lightweight', displayName:'lightweight!'},
    {src: 'ronnie_gobaby', displayName:'go baby'},
    {src: 'ronnie_alright', displayName:'alright!'},
    {src: 'ronnie_gobabylocaso', displayName:'go baby locaso'},
    {src: 'ronnie_yea1', displayName:'yeaaaah'},
	{src: 'ronnie_yea1largo', displayName:'yeaaaah locaso'},
	{src: 'ronnie_yeah10000', displayName:'yeaaaah 2'}
  ];
  clasicos = [
    {src: 'gemido', displayName:'gemido'},
    {src: 'peamoa', displayName:'peamoa'},
	{src: '60entre80', displayName:'60 entre 80 km/h'},
	{src: 'diaLaboral', displayName:'dia laboral'},
	{src: 'estaPendienteEs', displayName:'pendiente'},
	{src: 'quieroQueSeMejore', displayName:'que se mejore'},
	{src: 'sabersubirybajar', displayName:'subir y baja'},
	{src: 'vamoirnoscomoyoquiero', displayName:'vamo irno'},
	{src: 'vamonoACasa', displayName:'vamono a casa'},
    {src: 'peamoa_sutrasero', displayName:'como se compolta'},
    {src: 'forinia', displayName:'forinia'},
    {src: 'estabamoTomando', displayName:'tabamo tomando'},
    {src: 'tramboliko', displayName:'tramboliko'},
    {src: 'AAAAAAAAAA', displayName:'aaaaajajaj'},
    {src: 'yBuenoBrea', displayName:'brea'},
    {src: 'esaSonRibuOSonNai', displayName:'son ribuk o son naik'},
    {src: 'helloWeynes', displayName:'hello weynes'},
    {src: 'seraEstaBrother', displayName:'sera esta'},
    {src: 'taMuiPegaaEsaCancion', displayName:'ta muy pegaa'},
    {src: 'delfin_nopuedeser', displayName:'no puede ser..'}
  ];
  futbol = [
    {src: 'diego_eldiego', displayName:'el diego'},
    {src: 'diego_eldiegoarmando', displayName:'el diego armnado'},
    {src: 'diego_eldiegote', displayName:'el diegote'},
    {src: 'diego_canicani', displayName:'cani cani'},
    {src: 'tano-pasman/dala-boludo', displayName:'dala boludo'},
    {src: 'tano-pasman/dale-boludo', displayName:'dale boludo'},
    {src: 'tano-pasman/en-la-b', displayName:'en la b'},
    {src: 'tano-pasman/isabel', displayName:'isabel'},
    {src: 'tano-pasman/negro-de-mierda', displayName:'negro de mierda'},
    {src: 'tano-pasman/noooo', displayName:'nooo'},
    {src: 'tano-pasman/paraguayo', displayName:'paraguayo'},
    {src: 'tano-pasman/que-pones', displayName:'que pone la publicidad'},
    {src: 'tano-pasman/pongan-huevo', displayName:'pongan huevo'},
    {src: 'tano-pasman/que-mierda-es-esto', displayName:'que mierda es esto'}
  ];
  varios = [
    {src: 'oldenait', displayName:'ol de nait'},
    {src: 'duroduro', displayName:'duro duro'},
    {src: 'cocosily', displayName:'iiihhh'},
    {src: 'volo', displayName:'y voló'},
    {src: 'sosunbandido', displayName:'sos un bandido'},
    {src: 'choro_loreventas', displayName:'lo reventas'},
    {src: 'choro_zapateas', displayName:'le zapateas'},
    {src: 'choro_granflauta', displayName:'gran flauta'},
    {src: 'choro_inimputable', displayName:'inimputable'},
	{src: 'yenisLaCancha', displayName:'Yenis'},
	{src: 'poneElCambio', displayName:'pone el cambio'},
	{src: 'soyTuPadre', displayName:'soy tu padre'},
	{src: 'awanta1', displayName:'awanta'},
	{src: 'awanta2', displayName:'awantaaaaaa'},
	{src: 'sevadescontrolaaa', displayName:'se va descontrola'},
	{src: 'china_aaaaaw', displayName:'aaaaaw'},
	{src: 'china_nohayporque', displayName:'no hay porque'},
	{src: 'china_puto', displayName:'puto'},
	{src: 'china_taradoeh', displayName:'tarado eh?!'},
	{src: 'cantinfla_aaaaaah', displayName:'AAAAARGGH'},
	{src: 'cantinfla_aguitamijo', displayName:'AGÜITA'},	
	{src: 'cantinfla_traigame_una_aguita_papa', displayName:'AGÜITA PAPA'},	
	{src: 'cantinfla_lloro_por_amor', displayName:'AMOR VITE'},	
	{src: 'cantinfla_queja', displayName:'CANTINFLA QUEJA'},	
	{src: 'cantinfla_sino_no_te_vamoa_paga', displayName:'NO TE VAMO A PAGA'},	
	{src: 'cantinfla_pasa_pasa_pasa', displayName:'PASA PASA'},	
	{src: 'cantinfla_como_estamos_hoy', displayName:'COMO ESTAMOS HOY'},	
	{src: 'cantinfla_agua_caliente', displayName:'AGUA CALIENTE'},	
	{src: 'cantinfla_dioelamordio', displayName:'POR DIO'},
	{src: 'mf_anoteanote', displayName:'ANOTE'},
	{src: 'mf_arrrrww', displayName:'ARRRRWW'},
	{src: 'mf_mandalemecha', displayName:'MECHA'},
	{src: 'no_tenemos_para_come', displayName:'No tenemos para come'},
	{src: 'Vevo_ve', displayName:'Vevo'},
	{src: 'arrancamos_bien', displayName:'Ashancamo bien'},
	{src: 'no_la_llevo_a_misa', displayName:'No la ievo a misa'},
	{src: 'no_narnia', displayName:'NOOO NARNIA'},
	{src: 'santa_rosa', displayName:'SATANTARROSA'},
	{src: 'cortaste_toda_la_loz', displayName:'CORTASTE TODA LA LOZ'},
	{src: 'yonotepuedocrer', displayName:'Yo no te puedo creer'},
	{src: 'sacalamanodeahi_carajo', displayName:'SACA LA MANO DE AHI'},
	{src: 'burro_hijo', displayName:'SO\' BURRO HIJO'},
	{src: 'poque_pone_todo_asi', displayName:'PORQUE PONES TODO ASI'},
	{src: 'hijo_de_remil', displayName:'SI TENES 24'},
	{src: 'mexican_wolverine', displayName:'MEXICAN WOLVERINE'},
	{src: 'myname_isjeff', displayName:'MY NAME IS JEFF'},
	{src: 'sacar_el_fua', displayName:'Sacar el fua'},
	{src: 'fua_caracter', displayName:'FUA! Caracter'},
	{src: 'como_no', displayName:'Como no'},
	{src: 'fuaa', displayName:'FUAA!'},
	{src: 'proyecta_universo_fua', displayName:'Proyecta Universo'},
	{src: 'no_no_no_no_fua', displayName:'NONONONO'},
	{src: 'fuaaaaaaaaa', displayName:'FUAAAAAA'},
	{src: 'situaciones_inusuales_fua', displayName:'SITUACIONES INUSUALES'},
	{src: 'aguante_la_merca', displayName:'AGUANTE LA MERK'},
	{src: 'no_sabes_pariente_merk', displayName:'NO SABE PARIENTE'},
	{src: 'cinco_bolsa_de_cinco_merca', displayName:'5 bolsas de 5'},
	{src: 'no_pero_achica_merca', displayName:'NO PERO ACHIK NO'},
	{src: 'nos_partimos_el_napo_merca', displayName:'NOS PARTIMO EL NAPO'},
	{src: 'estoy_re_duro_merca', displayName:'ESTOY RE DURO'},
	{src: 're_sarpau_merca', displayName:'RE SARPAU'},
	{src: 'entramos_a_tomar_merca', displayName:'ENTRMAO A TOMA'},
	{src: 'una_liñita_pin_pun_merca', displayName:'UNA LIÑITA PIM PUM'},
	{src: 're_duros_estabamos_merca', displayName:'RE DUROS ESTABAMOS'},
	{src: 'todo_el_asado_merca', displayName:'TODO EL ASADO QUEDO'},
	{src: 'mirando_la_cara_merca', displayName:'MIRANDO LA CARA'},
  {src: 'ñiambre_tenia_merca', displayName:'ÑAMBRE TENIA'},
  {src: 'Sisabes', displayName:'Bucha si sabes'},
  {src: 'Dehaberlosabido', displayName:'Bucha de haberlo sabido antes'},
  {src: 'Conchesumare', displayName:'Bucha conchesumadre'},
  ];

/*
/ Agregar hot-key
*/
public hotKeys = {
	'49':'china_aaaaaw',
	'50':'china_nohayporque',
	'51':'china_puto',
	'52':'china_taradoeh',
	'226':'AAAAAAAAAA',
  '79': 'forinia',
  '66': 'choro_loreventas',
  '78': 'choro_zapateas',
  '77': 'choro_granflauta',
  '188': 'choro_inimputable',
  '80': 'peamoa',
  '81': 'gemido',
  '87': 'mesobra',
  '89': 'ledijequeNo',
  '69': 'trabas_mecontaron',
  '82': 'trabas_activopasivo',
  '84': 'trabas_servicio',
  '85': 'trabas_asadito',
  '53': 'trabas_borracho',
  '54': 'trabas_doscosa',
  '55': 'trabas_involucrado',
  '65': 'endu_carrera',
  '83': 'endu_aparentemente',
  '68': 'endu_endu',
  '192': 'endu_roberto',
  '70': 'endu_aceleradaendu',
  '71': 'endu_elotroestabaasi',
  '72': 'endu_susurros',
  '74': 'endu_escuchabaelbam',
  '75': 'endu_paaa',
  '222': 'endu_muerto',
  '76': 'peamoa_sutrasero',
  '97': 'ronnie_wow1',
  '98': 'ronnie_wow2',
  '99': 'ronnie_wow3',
  '100': 'ronnie_wooo1',
  '101': 'ronnie_wooo2',
  '102': 'ronnie_yeabuddy',
  '103': 'ronnie_yeabuddy1',
  '104': 'ronnie_yea',
  '111': 'ronnie_yea1',
  '96': 'ronnie_lightweight',
  '105': 'ronnie_gobaby',
  '106': 'ronnie_alright',
  '90': 'diego_eldiego',
  '88': 'diego_eldiegote',
  '67': 'diego_eldiegoarmando',
  '86': 'diego_canicani',
  '191': 'trabas_servicioBug',
  '73': 'cocosily',
};

 public combinedHotKeys = {
  '111': 'ronnie_yea1largo',
  '106': 'ronnie_gobabylocaso',
  '192': 'endu_loscuatro',
  '71': 'endu_estacurva',
  '222': 'endu_qepd',
  '49': 'lo_paramalaslenguas',
  '50': 'lo_malaslenguas',
  '51': 'lo_rrrumores',
  '52': 'lo_rumores',
  '53': 'lo_vuelto',
  '54': 'lo_besito',
  '55': 'lo_chauchau',
  '56': 'lo_rumoresaparentemente',
  '57': 'lo_rumoresaparentemente1',
  '48': 'lo_besito3',
  '96': 'lo_besito1',
};

  public getObjetoHotKeys(){
    return this.hotKeys;
  }
  public getObjetoHotKeysCombinadas(){
    return this.combinedHotKeys;
  }

  public getListaLocoEndu(){
    return this.locoEndu;
  }
  public getListaTravas(){
    return this.travas;
  }
  public getListaRonnieColeman(){
    return this.ronnieColeman;
  }
  public getListaClasicos(){
    return this.clasicos;
  }
  public getListaVarios(){
    return this.varios;
  }
  public getListaFutbol(){
    return this.futbol;
  }

}
