import { Injectable } from '@angular/core';

@Injectable()
export class ListaAudiosService {

/*
/ agregar nuevo audio o nueva lista
*/

  locoEndu = [
    {displayName:'Carrera', src:'endu_carrera', defKey:'A',newKey:''},
    {displayName:'Carrera aparentemente', src:'endu_aparentemente', defKey:'S',newKey:''},
    {displayName:'roberto', keyCode:'', src:'endu_roberto', defKey:'Ñ',newKey:''},
    {displayName:'Endu endu', src:'endu_endu', defKey:'D',newKey:''},
    {displayName:'Endu c/acelerada', src:'endu_aceleradaendu', defKey:'F',newKey:''},
    {displayName:'El otro estaba así', src:'endu_elotroestabaasi', defKey:'G',newKey:''},
    {displayName:'Susurros', src:'endu_susurros', defKey:'H',newKey:''},
    {displayName:'Escuchaba el bamm', src:'endu_escuchabaelbam', defKey:'J',newKey:''},
    {displayName:'Paaaa', src:'endu_paaa', defKey:'K',newKey:''},
    {displayName:'los cuatro', src:'endu_loscuatro', defKey:'NUM8',newKey:''},
    {displayName:'curva muy pronuncia', src:'endu_estacurva', defKey:'',newKey:''},
    {displayName:'taba muerto', src:'endu_muerto', defKey:'NUM9',newKey:''},
    {displayName:'qepd', src:'endu_qepd', defKey:'',newKey:''},
	{displayName:'aaaaaa', src:'endu_aaaaa', defKey:'',newKey:''},
	{displayName:'roberto gil', src:'endu_roberto gil', defKey:'',newKey:''}
  ];
  travas = [
    {src: 'mesobra', displayName:'Me sobra', defKey:'W',newKey:''},
    {src: 'trabas_mecontaron', displayName:'me contaron', defKey:'E',newKey:''},
    {src: 'trabas_activopasivo', displayName:'activo y pasivo', defKey:'R',newKey:''},
    {src: 'trabas_servicio', displayName:'servicio', defKey:'T',newKey:''},
    {src: 'ledijequeNo', displayName:'le dije que no!', defKey:'Y',newKey:''},
    {src: 'trabas_asadito', displayName:'asadito', defKey:'U',newKey:''},
	{src: 'trabas_borracho', displayName:'borracho', defKey:'NUM5',newKey:''},
	{src: 'trabas_doscosa', displayName:'dos cosa', defKey:'NUM6',newKey:''},
	{src: 'trabas_involucrado', displayName:'involucrado', defKey:'NUM7',newKey:''}
  ];
  ronnieColeman = [
    {src: 'ronnie_wow1', displayName:'wow 1', defKey:'PAD1',newKey:''},
    {src: 'ronnie_wow2', displayName:'wow 2', defKey:'PAD2',newKey:''},
    {src: 'ronnie_wow3', displayName:'wow 3', defKey:'PAD3',newKey:''},
    {src: 'ronnie_wooo1', displayName:'wooo 1', defKey:'PAD4',newKey:''},
    {src: 'ronnie_wooo2', displayName:'wooo 2', defKey:'PAD5',newKey:''},
    {src: 'ronnie_yeabuddy', displayName:'yeah buddy 1', defKey:'PAD6',newKey:''},
    {src: 'ronnie_yeabuddy1', displayName:'yeah buddy 2', defKey:'PAD7',newKey:''},
    {src: 'ronnie_yea', displayName:'yeah!', defKey:'PAD8',newKey:''},
    {src: 'ronnie_lightweight', displayName:'lightweight!', defKey:'PAD0',newKey:''},
    {src: 'ronnie_gobaby', displayName:'go baby', defKey:'PAD9',newKey:''},
    {src: 'ronnie_alright', displayName:'alright!', defKey:'PAD_AST',newKey:''},
    {src: 'ronnie_gobabylocaso', displayName:'go baby locaso', defKey:'',newKey:''},
    {src: 'ronnie_yea1', displayName:'yeaaaah', defKey:'PAD_BARRA',newKey:''},
	{src: 'ronnie_yea1largo', displayName:'yeaaaah locaso', defKey:'',newKey:''},
	{src: 'ronnie_yeah10000', displayName:'yeaaaah 2', defKey:'',newKey:''}
  ];
  clasicos = [
    {src: 'gemido', displayName:'gemido', defKey:'Q',newKey:''},
    {src: 'peamoa', displayName:'peamoa', defKey:'P',newKey:''},
	{src: '60entre80', displayName:'60 entre 80 km/h', defKey:'',newKey:''},
	{src: 'diaLaboral', displayName:'dia laboral', defKey:'',newKey:''},
	{src: 'estaPendienteEs', displayName:'pendiente', defKey:'',newKey:''},
	{src: 'quieroQueSeMejore', displayName:'que se mejore', defKey:'',newKey:''},
	{src: 'sabersubirybajar', displayName:'subir y baja', defKey:'',newKey:''},
	{src: 'vamoirnoscomoyoquiero', displayName:'vamo irno', defKey:'',newKey:''},
	{src: 'vamonoACasa', displayName:'vamono a casa', defKey:'',newKey:''},
    {src: 'peamoa_sutrasero', displayName:'como se compolta', defKey:'L',newKey:''},
    {src: 'forinia', displayName:'forinia', defKey:'O',newKey:''},
    {src: 'estabamoTomando', displayName:'tabamo tomando', defKey:'',newKey:''},
    {src: 'tramboliko', displayName:'tramboliko', defKey:'',newKey:''},
    {src: 'AAAAAAAAAA', displayName:'aaaaajajaj', defKey:'MENOR',newKey:''},
    {src: 'yBuenoBrea', displayName:'brea', defKey:'',newKey:''},
    {src: 'esaSonRibuOSonNai', displayName:'son ribuk o son naik', defKey:'',newKey:''},
    {src: 'helloWeynes', displayName:'hello weynes', defKey:'',newKey:''},
    {src: 'seraEstaBrother', displayName:'sera esta', defKey:'',newKey:''},
    {src: 'taMuiPegaaEsaCancion', displayName:'ta muy pegaa', defKey:'',newKey:''},
    {src: 'delfin_nopuedeser', displayName:'no puede ser..', defKey:'',newKey:''}
  ];
  futbol = [
    {src: 'diego_eldiego', displayName:'el diego', defKey:'Z',newKey:''},
    {src: 'diego_eldiegoarmando', displayName:'el diego armnado', defKey:'C',newKey:''},
    {src: 'diego_eldiegote', displayName:'el diegote', defKey:'X',newKey:''},
    {src: 'diego_canicani', displayName:'cani cani', defKey:'V',newKey:''},
    {src: 'tano-pasman/dala-boludo', displayName:'dala boludo', defKey:'',newKey:''},
    {src: 'tano-pasman/dale-boludo', displayName:'dale boludo', defKey:'',newKey:''},
    {src: 'tano-pasman/en-la-b', displayName:'en la b', defKey:'',newKey:''},
    {src: 'tano-pasman/isabel', displayName:'isabel', defKey:'',newKey:''},
    {src: 'tano-pasman/negro-de-mierda', displayName:'negro de mierda', defKey:'',newKey:''},
    {src: 'tano-pasman/noooo', displayName:'nooo', defKey:'',newKey:''},
    {src: 'tano-pasman/paraguayo', displayName:'paraguayo', defKey:'',newKey:''},
    {src: 'tano-pasman/que-pones', displayName:'que pone la publicidad', defKey:'',newKey:''},
    {src: 'tano-pasman/pongan-huevo', displayName:'pongan huevo', defKey:'',newKey:''},
    {src: 'tano-pasman/que-mierda-es-esto', displayName:'que mierda es esto', defKey:'',newKey:''}
  ];
  varios = [
    {src: 'oldenait', displayName:'ol de nait', defKey:'',newKey:''},
    {src: 'duroduro', displayName:'duro duro', defKey:'',newKey:''},
    {src: 'cocosily', displayName:'iiihhh', defKey:'I',newKey:''},
    {src: 'volo', displayName:'y voló', defKey:'',newKey:''},
    {src: 'sosunbandido', displayName:'sos un bandido', defKey:'',newKey:''},
    {src: 'choro_loreventas', displayName:'lo reventas', defKey:'B',newKey:''},
    {src: 'choro_zapateas', displayName:'le zapateas', defKey:'N',newKey:''},
    {src: 'choro_granflauta', displayName:'gran flauta', defKey:'M',newKey:''},
    {src: 'choro_inimputable', displayName:'inimputable', defKey:',',newKey:''},
	{src: 'yenisLaCancha', displayName:'Yenis', defKey:'',newKey:''},
	{src: 'poneElCambio', displayName:'pone el cambio', defKey:'',newKey:''},
	{src: 'soyTuPadre', displayName:'soy tu padre', defKey:'',newKey:''},
	{src: 'awanta1', displayName:'awanta', defKey:'',newKey:''},
	{src: 'awanta2', displayName:'awantaaaaaa', defKey:'',newKey:''},
	{src: 'sevadescontrolaaa', displayName:'se va descontrola', defKey:'',newKey:''},
	{src: 'china_aaaaaw', displayName:'aaaaaw', defKey:'NUM1',newKey:''},
	{src: 'china_nohayporque', displayName:'no hay porque', defKey:'NUM2',newKey:''},
	{src: 'china_puto', displayName:'puto', defKey:'NUM3',newKey:''},
	{src: 'china_taradoeh', displayName:'tarado eh?!', defKey:'NUM4',newKey:''},
	{src: 'mf_anoteanote', displayName:'ANOTE', defKey:'',newKey:''},
	{src: 'mf_arrrrww', displayName:'ARRRRWW', defKey:'',newKey:''},
	{src: 'mf_mandalemecha', displayName:'MECHA', defKey:'',newKey:''},
	{src: 'no_tenemos_para_come', displayName:'No tenemos para come', defKey:'',newKey:''},
	{src: 'Vevo_ve', displayName:'Vevo', defKey:'',newKey:''},
	{src: 'arrancamos_bien', displayName:'Ashancamo bien', defKey:'',newKey:''},
	{src: 'no_la_llevo_a_misa', displayName:'No la ievo a misa', defKey:'',newKey:''},
	{src: 'no_narnia', displayName:'NOOO NARNIA', defKey:'',newKey:''},
	{src: 'santa_rosa', displayName:'SATANTARROSA', defKey:'',newKey:''},
	{src: 'cortaste_toda_la_loz', displayName:'CORTASTE TODA LA LOZ', defKey:'',newKey:''},
	{src: 'yonotepuedocrer', displayName:'Yo no te puedo creer', defKey:'',newKey:''},
	{src: 'sacalamanodeahi_carajo', displayName:'SACA LA MANO DE AHI', defKey:'',newKey:''},
	{src: 'burro_hijo', displayName:'SO\' BURRO HIJO', defKey:'',newKey:''},
	{src: 'poque_pone_todo_asi', displayName:'PORQUE PONES TODO ASI', defKey:'',newKey:''},
	{src: 'hijo_de_remil', displayName:'SI TENES 24', defKey:'',newKey:''},
	{src: 'mexican_wolverine', displayName:'MEXICAN WOLVERINE', defKey:'',newKey:''},
	{src: 'myname_isjeff', displayName:'MY NAME IS JEFF', defKey:'',newKey:''},
	{src: 'sacar_el_fua', displayName:'Sacar el fua', defKey:'',newKey:''},
	{src: 'fua_caracter', displayName:'FUA! Caracter', defKey:'',newKey:''},
	{src: 'como_no', displayName:'Como no', defKey:'',newKey:''},
	{src: 'fuaa', displayName:'FUAA!', defKey:'',newKey:''},
	{src: 'proyecta_universo_fua', displayName:'Proyecta Universo', defKey:'',newKey:''},
	{src: 'no_no_no_no_fua', displayName:'NONONONO', defKey:'',newKey:''},
	{src: 'fuaaaaaaaaa', displayName:'FUAAAAAA', defKey:'',newKey:''},
	{src: 'situaciones_inusuales_fua', displayName:'SITUACIONES INUSUALES', defKey:'',newKey:''},
	{src: 'inundaciones_iuuuju', displayName:'IUUUJU', defKey:'',newKey:'C'},
	{src: 'inundaciones_ahora_estamos_hasta_las_bolas', displayName:'ESTAMO HASTA LAS BOLAS', defKey:'',newKey:'V'},
	{src: 'inundaciones_me_estoy_cagando_todo', displayName:'ME ESTOY CAGANDO TODO', defKey:'',newKey:'B'},
	{src: 'inundaciones_noo', displayName:'NOO INUNDACIONES', defKey:'',newKey:'N'},
	{src: 'guiso_fideo_moñito', displayName:'Guiso fideo moñito', defKey:'',newKey:'Ñ'},
	{src: 'hijo_como_trompada', displayName:'Va como trompada', defKey:'',newKey:'MENOR'},
	{src: 'AHHH_moñito', displayName:'AHHHH moñito', defKey:'',newKey:'Z'},
	{src: 'y_si_hijo', displayName:'Y SIII HIJO', defKey:'',newKey:'X'},
	{src: 'con_guiso_fideo_moñito', displayName:'Con un guiso de fideo moñito', defKey:'',newKey:'L'},
	{src: 'chinwenwencha', displayName:'TE LA TOMASTE TODA CHINWENWENCHA', defKey:'',newKey:'J'},
	{src: 'chinwenwencha - grito', displayName:'CHINWENWENCHA GRITO', defKey:'',newKey:'K'},
	{src: '2tiros_me_da_agua', displayName:'ME DA AGUA', defKey:'',newKey:'F'},
	{src: '2tiros_buscar_agua', displayName:'BUSCAR AGUA', defKey:'',newKey:'G'},
	{src: '2tiros_le_tire_2_tiros', displayName:'LE TIRE 2 TIROS', defKey:'',newKey:'H'},
	{src: '3pingos_alcoholizado', displayName:'ESTOY ALCOHOLIZADO', defKey:'',newKey:'NUM1'},
	{src: '3pingos_eunsabado', displayName:'E\' UN SABADO', defKey:'',newKey:'NUM2'},
	{src: '3pingos_ganas_de_tomar', displayName:'GANAS DE TOMAR', defKey:'',newKey:'NUM3'},
	{src: '3pingos_problema_hay', displayName:'QUE PROBLEMA HAY', defKey:'',newKey:'NUM4'},
	{src: '3pingos_ganas_de_tomar_y_3pingos', displayName:'Y ME CHUPA 3 PINGOS', defKey:'',newKey:'NUM5'},
	{src: '3pingos_me_chupa', displayName:'ME CHUPA 3 PINGOS', defKey:'',newKey:'NUM6'},
	{src: '3pingos_escuchando_cumbia', displayName:'ESCUCHANDO CUMBIA', defKey:'',newKey:'NUM7'},
	{src: '3pingos_cigarro', displayName:'CIGARRO', defKey:'',newKey:'NUM8'},
	{src: '3pingos_cago_a_trompadas', displayName:'CAGO A TROMPADAS', defKey:'',newKey:'NUM9'},
	{src: '3pingos_me_quise_defender', displayName:'ME QUISE DEFENDER', defKey:'',newKey:'Q'},
	{src: '3pingos_periodistas_policias', displayName:'A TODOS LOS PERIODISTAS', defKey:'',newKey:'W'},
	{src: '3pingos_no_sean_tan_pelotudos', displayName:'NO SEAN TAN PELOTUDOS', defKey:'',newKey:'E'},
	{src: 'aerolineas_alegria_barbara', displayName:'ALEGRIA BARBARA', defKey:'',newKey:''},
	{src: 'aerolineas_bolas_bien_puestas', displayName:'BOLAS BIEN PUESTAS', defKey:'',newKey:''},
	{src: 'aerolineas_vo_y_la_conchaetumare', displayName:'VO Y LA CONCHAETUMADRE', defKey:'',newKey:''},
	{src: 'aerolineas_hijo_de_milputas', displayName:'HIJO DE MIL PUTAS', defKey:'',newKey:''},
	{src: 'newgay_estaba_tomando_nama', displayName:'ESTABA TOMANDO NAMA', defKey:'',newKey:''},
	{src: 'newgay_fin_de_semana_noma', displayName:'FIN DE SEMANA NOMA', defKey:'',newKey:''},
	{src: 'newgay_la_pelota', displayName:'JUGAR A LA PELOTA', defKey:'',newKey:''},
	{src: 'newgay_new_gay_estaba_tomando', displayName:'NEW GAY ESTABA TOMANDO', defKey:'',newKey:''},
	{src: 'newgay_sabes_lo_que_es_newgay', displayName:'SABES LO QUE ES NEWGAY', defKey:'',newKey:''},
	{src: 'newgay_ir_a_trabajar', displayName:'IR A TRABAJAR', defKey:'',newKey:''},
	{src: 'coquito_vena_cacal', displayName:'VENA CACAL', defKey:'',newKey:'R'},
	{src: 'coquito_tres_y_tres_seis', displayName:'TRE Y TRE', defKey:'',newKey:'T'},
	{src: 'coquito_plano_sexual', displayName:'PLANO SEXUAL', defKey:'',newKey:'Y'},
	{src: 'coquito_parte_ortopedica', displayName:'PARTE ORTOPEDICA', defKey:'',newKey:'U'},
	{src: 'coquito_gusta_vena_cacal', displayName:'GUSTA VENA CACAL', defKey:'',newKey:'I'},
	{src: 'coquito_es_el_hombre_degenerado', displayName:'HOMBRE DEGENERADO', defKey:'',newKey:'O'},
	{src: 'coquito_depende_de_cada_uno', displayName:'DEPENDE DE CADA UNO', defKey:'',newKey:'P'},
	{src: 'coquito_cuatro_conchas', displayName:'CUATRO CONCHAS', defKey:'',newKey:'A'},
	{src: 'coquito_como_decia_aristoteles', displayName:'COMO DECIA ARISTOTELES', defKey:'',newKey:'S'},
	{src: 'coquito_a_ese_no_sabia', displayName:'A ESE NO SABIA', defKey:'',newKey:'D'},
	{src: 'no_es_coca_campera_tio', displayName:'ESO NO ES COCA PAPI', defKey:'',newKey:''},
	{src: 'noo_papi_campera_tio', displayName:'NOO PAPI', defKey:'',newKey:''},
	{src: 'juju_campera_tio', displayName:'JUJU', defKey:'',newKey:''},
	{src: 'mira_campera_campera_tio', displayName:'MIRA LA CAMPERA DEL TIO', defKey:'',newKey:''},
	{src: 'no_no_no_campera_tio', displayName:'NONONO CAMPERA', defKey:'',newKey:''},
	{src: 'haha_campera_tio', displayName:'HAHA', defKey:'',newKey:''},
	{src: 'la_vistima', displayName:'SE HACE LA VISTIMA', defKey:'',newKey:''},
	{src: '3vinito_me_meti_adentro', displayName:'ME METI ADENTRO', defKey:'',newKey:''},
	{src: '3vinito_que_tomo', displayName:'QUE TOMO', defKey:'',newKey:''},
	{src: '3vinito_1vaso_2vaso_3vaso', displayName:'CUANTO TOMO', defKey:'',newKey:''},
	{src: 'bomba_amia', displayName:'BOMBA AMIA', defKey:'',newKey:''},
	{src: 'semejante_barbaridad', displayName:'SEMEJANTE BARBARIDAD', defKey:'',newKey:''},
  ];
	merca = [
	{src: 'aguante_la_merca', displayName:'AGUANTE LA MERK', defKey:'',newKey:''},
	{src: 'no_sabes_pariente_merk', displayName:'NO SABE PARIENTE', defKey:'',newKey:''},
	{src: 'cinco_bolsa_de_cinco_merca', displayName:'5 bolsas de 5', defKey:'',newKey:''},
	{src: 'no_pero_achica_merca', displayName:'NO PERO ACHIK NO', defKey:'',newKey:''},
	{src: 'nos_partimos_el_napo_merca', displayName:'NOS PARTIMO EL NAPO', defKey:'',newKey:''},
	{src: 'estoy_re_duro_merca', displayName:'ESTOY RE DURO', defKey:'',newKey:''},
	{src: 're_sarpau_merca', displayName:'RE SARPAU', defKey:'',newKey:''},
	{src: 'entramos_a_tomar_merca', displayName:'ENTRMAO A TOMA', defKey:'',newKey:''},
	{src: 'una_liñita_pin_pun_merca', displayName:'UNA LIÑITA PIM PUM', defKey:'',newKey:''},
	{src: 're_duros_estabamos_merca', displayName:'RE DUROS ESTABAMOS', defKey:'',newKey:''},
	{src: 'todo_el_asado_merca', displayName:'TODO EL ASADO QUEDO', defKey:'',newKey:''},
	{src: 'mirando_la_cara_merca', displayName:'MIRANDO LA CARA', defKey:'',newKey:''},
	{src: 'ñiambre_tenia_merca', displayName:'ÑAMBRE TENIA', defKey:'',newKey:''},
	{src: 'alma_caricatica_merca', displayName:'ALGUN ALMA CARICATICA', defKey:'',newKey:''},
	{src: 'como_una_roca_merca', displayName:'QUEDAR COMO UNA ROCA', defKey:'',newKey:''},
	{src: 'cuatro_tirito_merca', displayName:'CUATRO TIRITO', defKey:'',newKey:''},
	{src: 'letrico_merca', displayName:'LECTRICO MERCA', defKey:'',newKey:''},
	{src: 'pa_mono_merca', displayName:'PA MONO', defKey:'',newKey:''},
	{src: 'pa_ñeri_merca', displayName:'PA ÑERI', defKey:'',newKey:''},
	{src: 're_duro_mal_merca', displayName:'RE DURO MAL', defKey:'',newKey:''},
	{src: 'si_tiene_bolsa_merca', displayName:'SI TIENE UNA BOLSA', defKey:'',newKey:''},
	{src: 'tremendo_sueño_merca', displayName:'TREMENDO SUEÑO SAIA', defKey:'',newKey:''},
	{src: 'uff_pa_ñeri_merca', displayName:'UFF.. PA ÑERI', defKey:'',newKey:''},
	{src: 'una_teca_merca', displayName:'ME MANDO UNA TECA', defKey:'',newKey:''},
	{src: 'verduras_merca', displayName:'UNA VERDURA...', defKey:'',newKey:''},
	{src: 'ya_sabe_ñeri', displayName:'YA SABE ÑERI', defKey:'',newKey:''}
	];
	cantinfla = [
	{src: 'cantinfla_aaaaaah', displayName:'AAAAARGGH', defKey:'',newKey:'PAD0'},
	{src: 'cantinfla_aguitamijo', displayName:'AGÜITA', defKey:'',newKey:'PAD1'},	
	{src: 'cantinfla_traigame_una_aguita_papa', displayName:'AGÜITA PAPA', defKey:'',newKey:'PAD2'},	
	{src: 'cantinfla_lloro_por_amor', displayName:'AMOR VITE', defKey:'',newKey:'PAD3'},	
	{src: 'cantinfla_queja', displayName:'CANTINFLA QUEJA', defKey:'',newKey:'PAD4'},	
	{src: 'cantinfla_sino_no_te_vamoa_paga', displayName:'NO TE VAMO A PAGA', defKey:'',newKey:'PAD5'},	
	{src: 'cantinfla_pasa_pasa_pasa', displayName:'PASA PASA', defKey:'',newKey:'PAD6'},	
	{src: 'cantinfla_como_estamos_hoy', displayName:'COMO ESTAMOS HOY', defKey:'',newKey:'PAD7'},	
	{src: 'cantinfla_agua_caliente', displayName:'AGUA CALIENTE', defKey:'',newKey:'PAD8'},	
	{src: 'cantinfla_dioelamordio', displayName:'POR DIO', defKey:'',newKey:'PAD9'}
	];

	
/*
/ Bind tecla codigo: 
*/
public keyMap = {
	A: 65,
	B: 66,
	C: 67,
	D: 68,
	E: 69,
	F: 70,
	G: 71,
	H: 72,
	I: 73,
	J: 74,
	K: 75,
	L: 76,
	M: 77,
	N: 78,
	Ñ: 192,
	O: 79,
	P: 80,
	Q: 81,
	R: 82,
	S: 83,
	T: 84,
	U: 85,
	V: 86,
	W: 87,
	X: 88,
	Y: 89,
	Z: 90,
	NUM0: 48,
	NUM1: 49,
	NUM2: 50,
	NUM3: 51,
	NUM4: 52,
	NUM5: 53,
	NUM6: 54,
	NUM7: 55,
	NUM8: 56,
	NUM9: 57,
	PAD0: 96,
	PAD1: 97,
	PAD2: 98,
	PAD3: 99,
	PAD4: 100,
	PAD5: 101,
	PAD6: 102,
	PAD7: 103,
	PAD8: 104,
	PAD9: 105,
	COMA: 188,
	PUNTO: 190,
	GUION: 189,
	MENOR: 226,
	SHIFT: 16,
	CTRL: 17,
	ALT: 18,
	SPACE: 32,
	PAD_BARRA: 111,
	PAD_AST: 106,
	PAD_MAS: 107,
	PAD_MENOS: 109,
	PAD_PUNTO: 110,
	Ç: 191,
};
/*
/ Agregar hot-key
*/
public hotKeys = {
	'NUM1':'china_aaaaaw',
	'NUM2':'china_nohayporque',
	'NUM3':'china_puto',
	'NUM4':'china_taradoeh',
	'<':'AAAAAAAAAA',
  'O': 'forinia',
  'B': 'choro_loreventas',
  'N': 'choro_zapateas',
  'M': 'choro_granflauta',
  ',': 'choro_inimputable',
  'P': 'peamoa',
  'Q': 'gemido',
  'W': 'mesobra',
  'Y': 'ledijequeNo',
  'E': 'trabas_mecontaron',
  'R': 'trabas_activopasivo',
  'T': 'trabas_servicio',
  'U': 'trabas_asadito',
  'NUM5': 'trabas_borracho',
  'NUM6': 'trabas_doscosa',
  'NUM7': 'trabas_involucrado',
  'A': 'endu_carrera',
  'S': 'endu_aparentemente',
  'D': 'endu_endu',
  'Ñ': 'endu_roberto',
  'F': 'endu_aceleradaendu',
  'G': 'endu_elotroestabaasi',
  'H': 'endu_susurros',
  'J': 'endu_escuchabaelbam',
  'K': 'endu_paaa',
  'L': 'peamoa_sutrasero',
  'N1': 'ronnie_wow1',
  'N2': 'ronnie_wow2',
  'N3': 'ronnie_wow3',
  'N4': 'ronnie_wooo1',
  'N5': 'ronnie_wooo2',
  'N6': 'ronnie_yeabuddy',
  'N7': 'ronnie_yeabuddy1',
  'N8': 'ronnie_yea',
  'N/': 'ronnie_yea1',
  'N0': 'ronnie_lightweight',
  'N9': 'ronnie_gobaby',
  'N*': 'ronnie_alright',
  'Z': 'diego_eldiego',
  'X': 'diego_eldiegote',
  'C': 'diego_eldiegoarmando',
  'V': 'diego_canicani',
  'Ç': 'trabas_servicioBug',
  'I': 'cocosily',
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

  public getKeyMap(){
  	return this.keyMap;
  }
  public getListaMerca(){
	return this.merca;
  }
  public getListaCantinfla(){
	return this.cantinfla;
  }
  public getHotKeysDefMap(){
	let list = this.getTodos();
	let ret = {};
	//list = list.map(a => new {defKey: a.defKey, newKey: a.newKey});
	for(let a of list){
		ret[this.keyMap[a.defKey]] = a.src;
	}
    return ret;
  }
  public getHotKeysNewMap(){
	let list = this.getTodos();
	let ret = {};
	//list = list.map(a => new {defKey: a.defKey, newKey: a.newKey});
	for(let a of list){
		ret[this.keyMap[a.newKey]] = a.src;
	}
    return ret;
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
	public getTodos(){
		let ret = [];
		ret = ret.concat(this.locoEndu, this.travas, this.ronnieColeman, this.clasicos, this.futbol, this.varios, this.merca, this.cantinfla);
		return ret;
	}

}
