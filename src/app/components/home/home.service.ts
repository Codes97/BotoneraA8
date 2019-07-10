import { Injectable } from '@angular/core';

@Injectable()
export class ListaAudiosService {

/*
/ agregar nuevo audio o nueva lista
*/

  locoEndu = [
    {displayName:'Carrera', src:'endu_carrera', keyb_0:'A',keyb_1:''},
    {displayName:'Carrera aparentemente', src:'endu_aparentemente', keyb_0:'S',keyb_1:''},
    {displayName:'roberto', keyCode:'', src:'endu_roberto', keyb_0:'Ñ',keyb_1:''},
    {displayName:'Endu endu', src:'endu_endu', keyb_0:'D',keyb_1:''},
    {displayName:'Endu c/acelerada', src:'endu_aceleradaendu', keyb_0:'F',keyb_1:''},
    {displayName:'El otro estaba así', src:'endu_elotroestabaasi', keyb_0:'G',keyb_1:''},
    {displayName:'Susurros', src:'endu_susurros', keyb_0:'H',keyb_1:''},
    {displayName:'Escuchaba el bamm', src:'endu_escuchabaelbam', keyb_0:'J',keyb_1:''},
    {displayName:'Paaaa', src:'endu_paaa', keyb_0:'K',keyb_1:''},
    {displayName:'los cuatro', src:'endu_loscuatro', keyb_0:'NUM8',keyb_1:''},
    {displayName:'curva muy pronuncia', src:'endu_estacurva', keyb_0:'',keyb_1:''},
    {displayName:'taba muerto', src:'endu_muerto', keyb_0:'NUM9',keyb_1:''},
    {displayName:'qepd', src:'endu_qepd', keyb_0:'',keyb_1:''},
	{displayName:'aaaaaa', src:'endu_aaaaa', keyb_0:'',keyb_1:''},
	{displayName:'roberto gil', src:'endu_roberto gil', keyb_0:'',keyb_1:''}
  ];
  travas = [
    {src: 'mesobra', displayName:'Me sobra', keyb_0:'W',keyb_1:''},
    {src: 'trabas_mecontaron', displayName:'me contaron', keyb_0:'E',keyb_1:''},
    {src: 'trabas_activopasivo', displayName:'activo y pasivo', keyb_0:'R',keyb_1:''},
    {src: 'trabas_servicio', displayName:'servicio', keyb_0:'T',keyb_1:''},
    {src: 'ledijequeNo', displayName:'le dije que no!', keyb_0:'Y',keyb_1:''},
    {src: 'trabas_asadito', displayName:'asadito', keyb_0:'U',keyb_1:''},
	{src: 'trabas_borracho', displayName:'borracho', keyb_0:'NUM5',keyb_1:''},
	{src: 'trabas_doscosa', displayName:'dos cosa', keyb_0:'NUM6',keyb_1:''},
	{src: 'trabas_involucrado', displayName:'involucrado', keyb_0:'NUM7',keyb_1:''}
  ];
  ronnieColeman = [
    {src: 'ronnie_wow1', displayName:'wow 1', keyb_0:'PAD1',keyb_1:''},
    {src: 'ronnie_wow2', displayName:'wow 2', keyb_0:'PAD2',keyb_1:''},
    {src: 'ronnie_wow3', displayName:'wow 3', keyb_0:'PAD3',keyb_1:''},
    {src: 'ronnie_wooo1', displayName:'wooo 1', keyb_0:'PAD4',keyb_1:''},
    {src: 'ronnie_wooo2', displayName:'wooo 2', keyb_0:'PAD5',keyb_1:''},
    {src: 'ronnie_yeabuddy', displayName:'yeah buddy 1', keyb_0:'PAD6',keyb_1:''},
    {src: 'ronnie_yeabuddy1', displayName:'yeah buddy 2', keyb_0:'PAD7',keyb_1:''},
    {src: 'ronnie_yea', displayName:'yeah!', keyb_0:'PAD8',keyb_1:''},
    {src: 'ronnie_lightweight', displayName:'lightweight!', keyb_0:'PAD0',keyb_1:''},
    {src: 'ronnie_gobaby', displayName:'go baby', keyb_0:'PAD9',keyb_1:''},
    {src: 'ronnie_alright', displayName:'alright!', keyb_0:'PAD_AST',keyb_1:''},
    {src: 'ronnie_gobabylocaso', displayName:'go baby locaso', keyb_0:'',keyb_1:''},
    {src: 'ronnie_yea1', displayName:'yeaaaah', keyb_0:'PAD_BARRA',keyb_1:''},
	{src: 'ronnie_yea1largo', displayName:'yeaaaah locaso', keyb_0:'',keyb_1:''},
	{src: 'ronnie_yeah10000', displayName:'yeaaaah 2', keyb_0:'',keyb_1:''}
  ];
  clasicos = [
    {src: 'gemido', displayName:'gemido', keyb_0:'Q',keyb_1:''},
    {src: 'peamoa', displayName:'peamoa', keyb_0:'P',keyb_1:''},
	{src: '60entre80', displayName:'60 entre 80 km/h', keyb_0:'',keyb_1:''},
	{src: 'diaLaboral', displayName:'dia laboral', keyb_0:'',keyb_1:''},
	{src: 'estaPendienteEs', displayName:'pendiente', keyb_0:'',keyb_1:''},
	{src: 'quieroQueSeMejore', displayName:'que se mejore', keyb_0:'',keyb_1:''},
	{src: 'sabersubirybajar', displayName:'subir y baja', keyb_0:'',keyb_1:''},
	{src: 'vamoirnoscomoyoquiero', displayName:'vamo irno', keyb_0:'',keyb_1:''},
	{src: 'vamonoACasa', displayName:'vamono a casa', keyb_0:'',keyb_1:''},
    {src: 'peamoa_sutrasero', displayName:'como se compolta', keyb_0:'L',keyb_1:''},
    {src: 'forinia', displayName:'forinia', keyb_0:'O',keyb_1:''},
    {src: 'estabamoTomando', displayName:'tabamo tomando', keyb_0:'',keyb_1:''},
    {src: 'tramboliko', displayName:'tramboliko', keyb_0:'',keyb_1:''},
    {src: 'AAAAAAAAAA', displayName:'aaaaajajaj', keyb_0:'MENOR',keyb_1:''},
    {src: 'yBuenoBrea', displayName:'brea', keyb_0:'',keyb_1:''},
    {src: 'esaSonRibuOSonNai', displayName:'son ribuk o son naik', keyb_0:'',keyb_1:''},
    {src: 'helloWeynes', displayName:'hello weynes', keyb_0:'',keyb_1:''},
    {src: 'seraEstaBrother', displayName:'sera esta', keyb_0:'',keyb_1:''},
    {src: 'taMuiPegaaEsaCancion', displayName:'ta muy pegaa', keyb_0:'',keyb_1:''},
    {src: 'delfin_nopuedeser', displayName:'no puede ser..', keyb_0:'',keyb_1:''}
  ];
  futbol = [
    {src: 'diego_eldiego', displayName:'el diego', keyb_0:'Z',keyb_1:''},
    {src: 'diego_eldiegoarmando', displayName:'el diego armnado', keyb_0:'C',keyb_1:''},
    {src: 'diego_eldiegote', displayName:'el diegote', keyb_0:'X',keyb_1:''},
    {src: 'diego_canicani', displayName:'cani cani', keyb_0:'V',keyb_1:''},
    {src: 'tano-pasman/dala-boludo', displayName:'dala boludo', keyb_0:'',keyb_1:''},
    {src: 'tano-pasman/dale-boludo', displayName:'dale boludo', keyb_0:'',keyb_1:''},
    {src: 'tano-pasman/en-la-b', displayName:'en la b', keyb_0:'',keyb_1:''},
    {src: 'tano-pasman/isabel', displayName:'isabel', keyb_0:'',keyb_1:''},
    {src: 'tano-pasman/negro-de-mierda', displayName:'negro de mierda', keyb_0:'',keyb_1:''},
    {src: 'tano-pasman/noooo', displayName:'nooo', keyb_0:'',keyb_1:''},
    {src: 'tano-pasman/paraguayo', displayName:'paraguayo', keyb_0:'',keyb_1:''},
    {src: 'tano-pasman/que-pones', displayName:'que pone la publicidad', keyb_0:'',keyb_1:''},
    {src: 'tano-pasman/pongan-huevo', displayName:'pongan huevo', keyb_0:'',keyb_1:''},
    {src: 'tano-pasman/que-mierda-es-esto', displayName:'que mierda es esto', keyb_0:'',keyb_1:''}
  ];
  varios = [
    {src: 'oldenait', displayName:'ol de nait', keyb_0:'',keyb_1:''},
    {src: 'duroduro', displayName:'duro duro', keyb_0:'',keyb_1:''},
    {src: 'cocosily', displayName:'iiihhh', keyb_0:'I',keyb_1:''},
    {src: 'volo', displayName:'y voló', keyb_0:'',keyb_1:''},
    {src: 'sosunbandido', displayName:'sos un bandido', keyb_0:'',keyb_1:''},
    {src: 'choro_loreventas', displayName:'lo reventas', keyb_0:'B',keyb_1:''},
    {src: 'choro_zapateas', displayName:'le zapateas', keyb_0:'N',keyb_1:''},
    {src: 'choro_granflauta', displayName:'gran flauta', keyb_0:'M',keyb_1:''},
    {src: 'choro_inimputable', displayName:'inimputable', keyb_0:',',keyb_1:''},
	{src: 'yenisLaCancha', displayName:'Yenis', keyb_0:'',keyb_1:''},
	{src: 'poneElCambio', displayName:'pone el cambio', keyb_0:'',keyb_1:''},
	{src: 'soyTuPadre', displayName:'soy tu padre', keyb_0:'',keyb_1:''},
	{src: 'awanta1', displayName:'awanta', keyb_0:'',keyb_1:''},
	{src: 'awanta2', displayName:'awantaaaaaa', keyb_0:'',keyb_1:''},
	{src: 'sevadescontrolaaa', displayName:'se va descontrola', keyb_0:'',keyb_1:''},
	{src: 'china_aaaaaw', displayName:'aaaaaw', keyb_0:'NUM1',keyb_1:''},
	{src: 'china_nohayporque', displayName:'no hay porque', keyb_0:'NUM2',keyb_1:''},
	{src: 'china_puto', displayName:'puto', keyb_0:'NUM3',keyb_1:''},
	{src: 'china_taradoeh', displayName:'tarado eh?!', keyb_0:'NUM4',keyb_1:''},
	{src: 'mf_anoteanote', displayName:'ANOTE', keyb_0:'',keyb_1:''},
	{src: 'mf_arrrrww', displayName:'ARRRRWW', keyb_0:'',keyb_1:''},
	{src: 'mf_mandalemecha', displayName:'MECHA', keyb_0:'',keyb_1:''},
	{src: 'no_tenemos_para_come', displayName:'No tenemos para come', keyb_0:'',keyb_1:''},
	{src: 'Vevo_ve', displayName:'Vevo', keyb_0:'',keyb_1:''},
	{src: 'arrancamos_bien', displayName:'Ashancamo bien', keyb_0:'',keyb_1:''},
	{src: 'no_la_llevo_a_misa', displayName:'No la ievo a misa', keyb_0:'',keyb_1:''},
	{src: 'no_narnia', displayName:'NOOO NARNIA', keyb_0:'',keyb_1:''},
	{src: 'santa_rosa', displayName:'SATANTARROSA', keyb_0:'',keyb_1:''},
	{src: 'cortaste_toda_la_loz', displayName:'CORTASTE TODA LA LOZ', keyb_0:'',keyb_1:''},
	{src: 'yonotepuedocrer', displayName:'Yo no te puedo creer', keyb_0:'',keyb_1:''},
	{src: 'sacalamanodeahi_carajo', displayName:'SACA LA MANO DE AHI', keyb_0:'',keyb_1:''},
	{src: 'burro_hijo', displayName:'SO\' BURRO HIJO', keyb_0:'',keyb_1:''},
	{src: 'poque_pone_todo_asi', displayName:'PORQUE PONES TODO ASI', keyb_0:'',keyb_1:''},
	{src: 'hijo_de_remil', displayName:'SI TENES 24', keyb_0:'',keyb_1:''},
	{src: 'mexican_wolverine', displayName:'MEXICAN WOLVERINE', keyb_0:'',keyb_1:''},
	{src: 'myname_isjeff', displayName:'MY NAME IS JEFF', keyb_0:'',keyb_1:''},
	{src: 'sacar_el_fua', displayName:'Sacar el fua', keyb_0:'',keyb_1:''},
	{src: 'fua_caracter', displayName:'FUA! Caracter', keyb_0:'',keyb_1:''},
	{src: 'como_no', displayName:'Como no', keyb_0:'',keyb_1:''},
	{src: 'fuaa', displayName:'FUAA!', keyb_0:'',keyb_1:''},
	{src: 'proyecta_universo_fua', displayName:'Proyecta Universo', keyb_0:'',keyb_1:''},
	{src: 'no_no_no_no_fua', displayName:'NONONONO', keyb_0:'',keyb_1:''},
	{src: 'fuaaaaaaaaa', displayName:'FUAAAAAA', keyb_0:'',keyb_1:''},
	{src: 'situaciones_inusuales_fua', displayName:'SITUACIONES INUSUALES', keyb_0:'',keyb_1:''},
	{src: 'inundaciones_iuuuju', displayName:'IUUUJU', keyb_0:'',keyb_1:'C'},
	{src: 'inundaciones_ahora_estamos_hasta_las_bolas', displayName:'ESTAMO HASTA LAS BOLAS', keyb_0:'',keyb_1:'V'},
	{src: 'inundaciones_me_estoy_cagando_todo', displayName:'ME ESTOY CAGANDO TODO', keyb_0:'',keyb_1:'B'},
	{src: 'inundaciones_noo', displayName:'NOO INUNDACIONES', keyb_0:'',keyb_1:'N'},
	{src: 'guiso_fideo_moñito', displayName:'Guiso fideo moñito', keyb_0:'',keyb_1:'Ñ'},
	{src: 'hijo_como_trompada', displayName:'Va como trompada', keyb_0:'',keyb_1:'MENOR'},
	{src: 'AHHH_moñito', displayName:'AHHHH moñito', keyb_0:'',keyb_1:'Z'},
	{src: 'y_si_hijo', displayName:'Y SIII HIJO', keyb_0:'',keyb_1:'X'},
	{src: 'con_guiso_fideo_moñito', displayName:'Con un guiso de fideo moñito', keyb_0:'',keyb_1:'L'},
	{src: 'chinwenwencha', displayName:'TE LA TOMASTE TODA CHINWENWENCHA', keyb_0:'',keyb_1:'J'},
	{src: 'chinwenwencha - grito', displayName:'CHINWENWENCHA GRITO', keyb_0:'',keyb_1:'K'},
	{src: '2tiros_me_da_agua', displayName:'ME DA AGUA', keyb_0:'',keyb_1:'F'},
	{src: '2tiros_buscar_agua', displayName:'BUSCAR AGUA', keyb_0:'',keyb_1:'G'},
	{src: '2tiros_le_tire_2_tiros', displayName:'LE TIRE 2 TIROS', keyb_0:'',keyb_1:'H'},
	{src: '3pingos_alcoholizado', displayName:'ESTOY ALCOHOLIZADO', keyb_0:'',keyb_1:'NUM1'},
	{src: '3pingos_eunsabado', displayName:'E\' UN SABADO', keyb_0:'',keyb_1:'NUM2'},
	{src: '3pingos_ganas_de_tomar', displayName:'GANAS DE TOMAR', keyb_0:'',keyb_1:'NUM3'},
	{src: '3pingos_problema_hay', displayName:'QUE PROBLEMA HAY', keyb_0:'',keyb_1:'NUM4'},
	{src: '3pingos_ganas_de_tomar_y_3pingos', displayName:'Y ME CHUPA 3 PINGOS', keyb_0:'',keyb_1:'NUM5'},
	{src: '3pingos_me_chupa', displayName:'ME CHUPA 3 PINGOS', keyb_0:'',keyb_1:'NUM6'},
	{src: '3pingos_escuchando_cumbia', displayName:'ESCUCHANDO CUMBIA', keyb_0:'',keyb_1:'NUM7'},
	{src: '3pingos_cigarro', displayName:'CIGARRO', keyb_0:'',keyb_1:'NUM8'},
	{src: '3pingos_cago_a_trompadas', displayName:'CAGO A TROMPADAS', keyb_0:'',keyb_1:'NUM9'},
	{src: '3pingos_me_quise_defender', displayName:'ME QUISE DEFENDER', keyb_0:'',keyb_1:'Q'},
	{src: '3pingos_periodistas_policias', displayName:'A TODOS LOS PERIODISTAS', keyb_0:'',keyb_1:'W'},
	{src: '3pingos_no_sean_tan_pelotudos', displayName:'NO SEAN TAN PELOTUDOS', keyb_0:'',keyb_1:'E'},
	{src: 'aerolineas_alegria_barbara', displayName:'ALEGRIA BARBARA', keyb_0:'',keyb_1:''},
	{src: 'aerolineas_bolas_bien_puestas', displayName:'BOLAS BIEN PUESTAS', keyb_0:'',keyb_1:''},
	{src: 'aerolineas_vo_y_la_conchaetumare', displayName:'VO Y LA CONCHAETUMADRE', keyb_0:'',keyb_1:''},
	{src: 'aerolineas_hijo_de_milputas', displayName:'HIJO DE MIL PUTAS', keyb_0:'',keyb_1:''},
	{src: 'newgay_estaba_tomando_nama', displayName:'ESTABA TOMANDO NAMA', keyb_0:'',keyb_1:''},
	{src: 'newgay_fin_de_semana_noma', displayName:'FIN DE SEMANA NOMA', keyb_0:'',keyb_1:''},
	{src: 'newgay_la_pelota', displayName:'JUGAR A LA PELOTA', keyb_0:'',keyb_1:''},
	{src: 'newgay_new_gay_estaba_tomando', displayName:'NEW GAY ESTABA TOMANDO', keyb_0:'',keyb_1:''},
	{src: 'newgay_sabes_lo_que_es_newgay', displayName:'SABES LO QUE ES NEWGAY', keyb_0:'',keyb_1:''},
	{src: 'newgay_ir_a_trabajar', displayName:'IR A TRABAJAR', keyb_0:'',keyb_1:''},
	{src: 'coquito_vena_cacal', displayName:'VENA CACAL', keyb_0:'',keyb_1:'R'},
	{src: 'coquito_tres_y_tres_seis', displayName:'TRE Y TRE', keyb_0:'',keyb_1:'T'},
	{src: 'coquito_plano_sexual', displayName:'PLANO SEXUAL', keyb_0:'',keyb_1:'Y'},
	{src: 'coquito_parte_ortopedica', displayName:'PARTE ORTOPEDICA', keyb_0:'',keyb_1:'U'},
	{src: 'coquito_gusta_vena_cacal', displayName:'GUSTA VENA CACAL', keyb_0:'',keyb_1:'I'},
	{src: 'coquito_es_el_hombre_degenerado', displayName:'HOMBRE DEGENERADO', keyb_0:'',keyb_1:'O'},
	{src: 'coquito_depende_de_cada_uno', displayName:'DEPENDE DE CADA UNO', keyb_0:'',keyb_1:'P'},
	{src: 'coquito_cuatro_conchas', displayName:'CUATRO CONCHAS', keyb_0:'',keyb_1:'A'},
	{src: 'coquito_como_decia_aristoteles', displayName:'COMO DECIA ARISTOTELES', keyb_0:'',keyb_1:'S'},
	{src: 'coquito_a_ese_no_sabia', displayName:'A ESE NO SABIA', keyb_0:'',keyb_1:'D'},
	{src: 'no_es_coca_campera_tio', displayName:'ESO NO ES COCA PAPI', keyb_0:'',keyb_1:''},
	{src: 'noo_papi_campera_tio', displayName:'NOO PAPI', keyb_0:'',keyb_1:'', keyb_2:'C'},
	{src: 'juju_campera_tio', displayName:'JUJU', keyb_0:'',keyb_1:'', keyb_2:'V'},
	{src: 'mira_campera_campera_tio', displayName:'MIRA LA CAMPERA DEL TIO', keyb_0:'',keyb_1:'', keyb_2:'B'},
	{src: 'no_no_no_campera_tio', displayName:'NONONO CAMPERA', keyb_0:'',keyb_1:'', keyb_2:'N'},
	{src: 'haha_campera_tio', displayName:'HAHA', keyb_0:'',keyb_1:'', keyb_2:'M'},
	{src: 'la_vistima', displayName:'SE HACE LA VISTIMA', keyb_0:'', keyb_1:'',keyb_2:'COMA'},
	{src: '3vinito_me_meti_adentro', displayName:'ME METI ADENTRO', keyb_0:'',keyb_1:'', keyb_2:'PAD7'},
	{src: '3vinito_que_tomo', displayName:'QUE TOMO', keyb_0:'',keyb_1:'', keyb_2:'PAD8'},
	{src: '3vinito_1vaso_2vaso_3vaso', displayName:'CUANTO TOMO', keyb_0:'',keyb_1:'', keyb_2:'PAD9'},
	{src: 'bomba_amia', displayName:'BOMBA AMIA', keyb_0:'',keyb_1:''},
	{src: 'semejante_barbaridad', displayName:'SEMEJANTE BARBARIDAD', keyb_0:'',keyb_1:''},
	{src: 'Sisabes', displayName:'Bucha si sabes', keyb_0:'', keyb_1:''},
	{src: 'Dehaberlosabido', displayName:'Bucha de haberlo sabido antes', keyb_0:'', keyb_1:''},
	{src: 'Conchesumare', displayName:'Bucha conchesumadre', keyb_0: '', keyb_1:''},
  ];
	merca = [
	{src: 'aguante_la_merca', displayName:'AGUANTE LA MERK', keyb_0:'',keyb_1:'', keyb_2:'NUM1'},
	{src: 'no_sabes_pariente_merk', displayName:'NO SABE PARIENTE', keyb_0:'',keyb_1:'', keyb_2:'NUM2'},
	{src: 'cinco_bolsa_de_cinco_merca', displayName:'5 bolsas de 5', keyb_0:'',keyb_1:'', keyb_2:'NUM3'},
	{src: 'no_pero_achica_merca', displayName:'NO PERO ACHIK NO', keyb_0:'',keyb_1:'', keyb_2:'NUM4'},
	{src: 'nos_partimos_el_napo_merca', displayName:'NOS PARTIMO EL NAPO', keyb_0:'',keyb_1:'', keyb_2:'NUM5'},
	{src: 'estoy_re_duro_merca', displayName:'ESTOY RE DURO', keyb_0:'',keyb_1:'', keyb_2:'NUM6'},
	{src: 're_sarpau_merca', displayName:'RE SARPAU', keyb_0:'',keyb_1:'', keyb_2:''},
	{src: 'entramos_a_tomar_merca', displayName:'ENTRMAO A TOMA', keyb_0:'',keyb_1:'', keyb_2:'NUM7'},
	{src: 'una_liñita_pin_pun_merca', displayName:'UNA LIÑITA PIM PUM', keyb_0:'',keyb_1:'', keyb_2:'NUM8'},
	{src: 're_duros_estabamos_merca', displayName:'RE DUROS ESTABAMOS', keyb_0:'',keyb_1:'', keyb_2:'NUM9'},
	{src: 'todo_el_asado_merca', displayName:'TODO EL ASADO QUEDO', keyb_0:'',keyb_1:'', keyb_2:'Q'},
	{src: 'mirando_la_cara_merca', displayName:'MIRANDO LA CARA', keyb_0:'',keyb_1:'', keyb_2:''},
	{src: 'ñiambre_tenia_merca', displayName:'ÑAMBRE TENIA', keyb_0:'',keyb_1:'', keyb_2:'W'},
	{src: 'alma_caricatica_merca', displayName:'ALGUN ALMA CARICATICA', keyb_0:'',keyb_1:'', keyb_2:'E'},
	{src: 'como_una_roca_merca', displayName:'QUEDAR COMO UNA ROCA', keyb_0:'',keyb_1:'', keyb_2:'R'},
	{src: 'cuatro_tirito_merca', displayName:'CUATRO TIRITO', keyb_0:'',keyb_1:'', keyb_2:'T'},
	{src: 'letrico_merca', displayName:'LECTRICO MERCA', keyb_0:'',keyb_1:'', keyb_2:'Y'},
	{src: 'pa_mono_merca', displayName:'PA MONO', keyb_0:'',keyb_1:'', keyb_2:'U'},
	{src: 'pa_ñeri_merca', displayName:'PA ÑERI', keyb_0:'',keyb_1:'', keyb_2:'I'},
	{src: 're_duro_mal_merca', displayName:'RE DURO MAL', keyb_0:'',keyb_1:'', keyb_2:'O'},
	{src: 'si_tiene_bolsa_merca', displayName:'SI TIENE UNA BOLSA', keyb_0:'',keyb_1:'', keyb_2:'P'},
	{src: 'tremendo_sueño_merca', displayName:'TREMENDO SUEÑO SAIA', keyb_0:'',keyb_1:'', keyb_2:'A'},
	{src: 'uff_pa_ñeri_merca', displayName:'UFF.. PA ÑERI', keyb_0:'',keyb_1:'', keyb_2:'S'},
	{src: 'una_teca_merca', displayName:'ME MANDO UNA TECA', keyb_0:'',keyb_1:'', keyb_2:'D'},
	{src: 'verduras_merca', displayName:'UNA VERDURA...', keyb_0:'',keyb_1:'', keyb_2:''},
	{src: 'ya_sabe_ñeri', displayName:'YA SABE ÑERI', keyb_0:'',keyb_1:'', keyb_2:'F'}
	];
	cantinfla = [
	{src: 'cantinfla_aaaaaah', displayName:'AAAAARGGH', keyb_0:'',keyb_1:'PAD0'},
	{src: 'cantinfla_aguitamijo', displayName:'AGÜITA', keyb_0:'',keyb_1:'PAD1'},
	{src: 'cantinfla_traigame_una_aguita_papa', displayName:'AGÜITA PAPA', keyb_0:'',keyb_1:'PAD2'},
	{src: 'cantinfla_lloro_por_amor', displayName:'AMOR VITE', keyb_0:'',keyb_1:'PAD3'},
	{src: 'cantinfla_queja', displayName:'CANTINFLA QUEJA', keyb_0:'',keyb_1:'PAD4'},
	{src: 'cantinfla_sino_no_te_vamoa_paga', displayName:'NO TE VAMO A PAGA', keyb_0:'',keyb_1:'PAD5'},
	{src: 'cantinfla_pasa_pasa_pasa', displayName:'PASA PASA', keyb_0:'',keyb_1:'PAD6'},
	{src: 'cantinfla_como_estamos_hoy', displayName:'COMO ESTAMOS HOY', keyb_0:'',keyb_1:'PAD7'},
	{src: 'cantinfla_agua_caliente', displayName:'AGUA CALIENTE', keyb_0:'',keyb_1:'PAD8'},
	{src: 'cantinfla_dioelamordio', displayName:'POR DIO', keyb_0:'',keyb_1:'PAD9'}
	];
	vamoNewell = [
	{src: 'vamo_newell_1', displayName:'VAMO NEWELL 1', keyb_0:'', keyb_1:'', keyb_2:'PAD1'},
	{src: 'vamo_newell_2', displayName:'VAMO NEWELL 2', keyb_0:'', keyb_1:'', keyb_2:'PAD2'},
	{src: 'vamo_newell_3', displayName:'VAMO NEWELL 3', keyb_0:'', keyb_1:'', keyb_2:'PAD3'},
	{src: 'vamo_newell_4', displayName:'VAMO NEWELL 4', keyb_0:'', keyb_1:'', keyb_2:'PAD4'},
	{src: 'vamo_newell_5', displayName:'VAMO NEWELL 5', keyb_0:'', keyb_1:'', keyb_2:'PAD5'},
	{src: 'vamo_newell_0', displayName:'VAMO NEWELL 6', keyb_0:'', keyb_1:'', keyb_2:'PAD6'},
	{src: 'vamo_menem', displayName:'VAMO MENEM', keyb_0:'', keyb_1:'', keyb_2:'PAD0'}
	]
	
	gestion = [
	{src: 'gestion_la_concha_de_su_madre', displayName:'LA CONCHA DE SU MADRE', keyb_0:'', keyb_1:'', keyb_2:'G'},
	{src: 'gestion_a_la_puta', displayName:'A LA PUTA', keyb_0:'', keyb_1:'', keyb_2:'H'},
	{src: 'gestion_viva_peron', displayName:'VIVA PERON', keyb_0:'', keyb_1:'', keyb_2:'J'},
	{src: 'gestion_para_el_pueblo', displayName:'ESTO ES PARA EL PUEBLO', keyb_0:'', keyb_1:'', keyb_2:'K'},
	{src: 'gestion_esto_es_gestion', displayName:'ESTO ES GESTION', keyb_0:'', keyb_1:'', keyb_2:'L'},
	{src: 'gestion_que_obra', displayName:'QUE OBRA', keyb_0:'', keyb_1:'', keyb_2:'Ñ'},
	{src: 'gestion_vamo_que_ganamo', displayName:'VAMO QUE GANAMO', keyb_0:'', keyb_1:'', keyb_2:'MENOR'},
	{src: 'gestion_vamo_carajo', displayName:'VAMO CARAJO', keyb_0:'', keyb_1:'', keyb_2:'Z'},
	{src: 'gestion_vamo_schiaretti', displayName:'VAMO SCHIARETTI', keyb_0:'', keyb_1:'', keyb_2:'X'}
	]


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
  
  public getListaGestion(){
	  return this.gestion;
  }
  
  public getListaNewell(){
	return this.vamoNewell;
  }
  
  public getHotKeysKeyB0(){
	let list = this.getTodos();
	let ret = {};
	for(let a of list){
		ret[this.keyMap[a.keyb_0]] = a.src;
	}
    return ret;
  }
  public getHotKeysKeyB1(){
	let list = this.getTodos();
	let ret = {};
	for(let a of list){
		ret[this.keyMap[a.keyb_1]] = a.src;
	}
    return ret;
  }
  public getHotKeysKeyB2(){
	let list = this.getTodos();
	let ret = {};
	for(let a of list){
		ret[this.keyMap[a.keyb_2]] = a.src;
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
		ret = ret.concat(this.locoEndu, this.travas, this.ronnieColeman, this.clasicos, this.futbol, this.varios, this.merca, this.cantinfla, this.vamoNewell, this.gestion);
		return ret;
	}

}
