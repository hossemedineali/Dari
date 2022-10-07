interface MygovernorateType {
    value:string,label:string
}


interface MyType {
    [key: string]: MygovernorateType[];
}





export const cities: MyType  ={
    //A
   'Ariana':[{value:'Ariana',label:'Ariana'},{value:'Ettadhamen-Mnihla',label: 'Ettadhamen-Mnihla'}, {value:'Kalàt el-Andalous',label:'Kalàt el-Andalous'},{value:'La Soukra',label:'La Soukra'},{value:'Raoued',label:'Raoued'}, {value:'Sidi Thabet',label:'Sidi Thabet'}],
    //B
    'Ben Arous':[{value:'Ben Arous',label:'Ben Arous'}, {value:'Bou Mhel el-Bassatine',label:'Bou Mhel el-Bassatine'},{value:'Ezzahra',label:'Ezzahra'},{value:'El Mourouj',label:'El Mourouj'},{value:'El Mourouj',label:'El Mourouj'},{value:'Hammam Chott',label:'Hammam Chott'},{value:'Hammam Lif',label:'Hammam Lif'},{value: 'Khalidia',label:'Khalidia'}, {value:'Mégrine',label:'Mégrine'}, {value:'Mohamedia-Fouchana',label:'Mohamedia-Fouchana'},{value:'Mornag',label:'Mornag'} ,{value:'Radès',label:'Radès'}],
    
    
    'Béja':[{value:'Béja',label:'Béja'},{value:'El Maâgoula',label:'El Maâgoula'},{value:'Goubellat',label:'Goubellat'},{value:'Majaz al Bab',label:'Majaz al Bab'},{value:'Nefza',label:'Nefza'},{value:'Testour',label:'Testour'},{value:'Téboursouk',label:'Téboursouk'},{value:'Zahret Medien',label:'Zahret Medien'}],
  
    'Bizerte':[{value:'Bizerte',label:'Bizerte'},{value:'Aousj',label:'Aousj'},{value:'El Alia',label:'El Alia'},{value:'Ghar al Mil',label:'Ghar al Mil'},{value:'Sejnan',label:'Sejnan'},{value:'Mateur',label:'Mateur'},{value:'Menzel Abderrahmane',label:'Menzel Abderrahmane'},{value:'Menzel Bourguiba',label:'Menzel Bourguiba'},{value:'Menzel Jemil',label:'Menzel Jemil'},{value:'Metlin',label:'Metlin'},{value:'Raf Raf',label:'Raf Raf'}, {value:'Ras Jebel',label:'Ras Jebel'},{value:'Tinja',label:'Tinja'}],
    //G
    'Gabès':[{value:'Gabès',label:'Gabès'},{value:'Chenini Nahal',label:'Chenini Nahal'},{value:'El Hamma',label:'El Hamma'},{value:'Ghannouch',label:'Ghannouch'},{value:'Mareth',label:'Mareth'},{value:'Matmata',label:'Matmata'},{value:'Métouia',label:'Métouia'},{value:'Nouvelle Matmata',label:'Nouvelle Matmata'},{value:'Oudhref',label:'Oudhref'},{value:'Zarat',label:'Zarat'}],   
    'Gafsa':[{value:'Gafsa',label:'Gafsa'},{value:'El Guettar',label:'El Guettar'},{value:'El Ksar',label:'El Ksar'},{value:'Mdhila',label:'Mdhila'},{value:'Métlaoui',label:'Métlaoui'},{value:'Moularès',label:'Moularès'},{value:'Redeyef',label:'Redeyef'},{value:'Sened',label:'Sened'},{value:'sidi Aich',label:'sidi Aich'},{value:'Sidi Boubaker',label:'Sidi Boubaker'}],
    //J
    'Jendouba':[{value:'Jendouba',label:'Jendouba'},{value:'Aïn Draham',label:'Aïn Draham'},{value:"Beni M'Tir",label:"Beni M'Tir"},{value:'Bou Salem',label:'Bou Salem'},{value:'Fernana',label:'Fernana'},{value:'Ghardimaou',label:'Ghardimaou'},{value:'Oued Melliz',label:'Oued Melliz'},{value:'Tabarka',label:'Tabarka'}],
    //K
    'Kairouan':[{value:'Kairouan',label:'Kairouan'},{value:'Aïn Djeloula',label:'Aïn Djeloula'},{value:'Alaâ',label:'Alaâ'},{value:'Bou Hajla',label:'Bou Hajla'},{value:'Chebika',label:'Chebika'},{value:'Echrarda',label:'Echrarda'},{value:'Haffouz',label:'Haffouz'},{value:'Hajeb El Ayoun',label:'Hajeb El Ayoun'},{value:'Menzel Mehiri',label:'Menzel Mehiri'},{value:'Nasrallah',label:'Nasrallah'},{value:'Oueslatia',label:'Oueslatia'},{value:'Sbikha',label:'Sbikha'}],   
    
    
    'Kasserine':[{value:'Kasserine',label:'Kasserine'},{value:'Fériana',label:'Fériana'},{value:'Foussana',label:'Foussana'},{value:'Haïdra',label:'Haïdra'},{value:'Jedelienne',label:'Jedelienne'},{value:'Magel Bel Abbès',label:'Magel Bel Abbès'},{value:'Sbeitla',label:'Sbeitla'},{value:'Sbiba',label:'Sbiba'},{value:'Thélepte',label:'Thélepte'},{value:'Thala',label:'Thala'}],   
    'Kebili':[{value:'Kebil',label:'Kebil'},{value:'Douz',label:'Douz'},{value:'Djem',label:'Djem'},{value:'El Golâa',label:'El Golâa'},{value:'Souk Lahad',label:'Souk Lahad'}],   
    'Kef':[{value:'El Kef',label:'El Kef'},{value:'Dahmani',label:'Dahmani'},{value:'Jérissa',label:'Jérissa'},{value:'Kalaat es Senan',label:'Kalaat es Senan'},{value:'Kalâa Khasba',label:'Kalâa Khasba'},{value:'Menzel Salem',label:'Menzel Salem'},{value:'Nebeur',label:'Nebeur'},{value:'El Ksour',label:'El Ksour'},{value:'Sakiet Sidi Youssef',label:'Sakiet Sidi Youssef'},{value:'Sers',label:'Sers'},{value:'Tajerouine',label:'Tajerouine'},{value:'Touiref',label:'Touiref'}],
    
    //T
    'Tunis':[{value:'Tunis',label:'Tunis'},{value:'Carthage',label:'Carthage'},{value:'Le Bardo',label:'Le Bardo'},{value:'La Goulette',label:'La Goulette'},{value:'Le Kram',label:'Le Kram'},{value:'La Marsa',label:'La Marsa'},{value:'Sidi Bou Said',label:'Sidi Bou Said'},{value:'Sidi Hassine',label:'Sidi Hassine'}],
    //M
    'Mahdia':[{value:'Mahdia',label:'Mahdia'},{value:'Bou Merdes',label:'Bou Merdes'},{value:'Chebba',label:'Chebba'},{value:'Chorbane',label:'Chorbane'},{value:'El Bradâa',label:'El Bradâa'},{value:'Essouassi',label:'Essouassi'},{value:'Hebira',label:'Hebira'},{value:'Kerker',label:'Kerker'},{value:'Ksour Essef',label:'Ksour Essef'},{value:'Melloulèche',label:'Melloulèche'},{value:'Ouled Chamekh',label:'Ouled Chamekh'},{value:'Rejiche',label:'Rejiche'},{value:'Sidi Alouane',label:'Sidi Alouane'}], 
    'Manouba':[{value:'Manouba',label:'Manouba'},{value:'Borj El Amri',label:'Borj El Amri'},{value:'Den Den',label:'Borj El Amri'},{value:'Djedeida',label:'Djedeida'},{value:'Douar Hicher',label:'Douar Hicher'},{value:'El Battan',label:'El Battan'},{value:'El Battan',label:'El Battan'},{value:'Oued Ellil',label:'Oued Ellil'},{value:'Tebourba',label:'Tebourba'}],
    'Mednine':[{value:'Medenine',label:'Medenine'},{value:'Ajim (Djerba)',label:'Ajim (Djerba)'},{value:'Ben Gardane',label:'Ben Gardane'},{value:'Beni Khedache',label:'Beni Khedache'},{value:'Houmt El Souk (Djerba)',label:'Houmt El Souk (Djerba)'},{value:'Midoun (Djerba)',label:'Midoun (Djerba)'},{value:'Zarzis',label:'Zarzis'}], 
    'Monastir':[{value:'Monastir',label:'Monastir'},{value:'Amiret El Fhoul',label:'Amiret El Fhoul'},{value:'Amiret El Hojjaj',label:'Amiret El Hojjaj'},{value:'Amiret Touazra',label:'Amiret Touazra'},{value:'Bekalta',label:'Bekalta'},{value:'Bembla-Mnara',label:'Bembla-Mnara'},{value:'Benen Bodher',label:'Benen Bodher'},{value:'Beni Hassen',label:'Beni Hassen'},{value:'Bouhjar',label:'Bouhjar'},{value:'Cherahil',label:'Cherahil'},{value:'El Masdour',label:'El Masdour'},{value:'Ghenada',label:'Ghenada'},{value:'Jemmal',label:'Jemmal'},{value:'Khniss',label:'Khniss'},{value:'Ksar Hellal',label:'Ksar Hellal'},{value:'Ksibet El Mediouni',label:'Ksibet El Mediouni'},{value:'Lemta',label:'Lemta'},{value:'Menzel Ennour',label:'Menzel Ennour'},{value:'Menzel Farsi',label:'Menzel Farsi'},{value:'Menzel Hayet',label:'Menzel Hayet'},{value:'Menzel Kamel',label:'Menzel Kamel'},{value:'Moôtmar',label:'Moôtmar'},{value:'Moknine',label:'Moknine'},{value:'Ouerdanin',label:'Ouerdanin'},{value:'Sahline',label:'Sahline'},{value:'Sayada',label:'Sayada'},{value:'Sidi Ameur',label:'Sidi Ameur'},{value:'Sidi Bennour',label:'Sidi Bennour'},{value:'Téboulba',label:'Téboulba'},{value:'Touza',label:'Touza'},{value: 'Zaouiet Kontoch',label:'Zaouiet Kontoch'},{value:'Zéramdine',label:'Zéramdine'}],

   //N
    'Nabeul':[{value:'Nabeul',label:'Nabeul'},{value:'Azmour',label:'Azmour'},{value:'Béni Khalled',label:'Béni Khalled'},{value:'Béni Khiar',label:'Béni Khiar'},{value:'Bou Argoub',label:'Bou Argoub'},{value:'Dar Allouch',label:'Dar Allouch'},{value:'Dar Chaabane',label:'Dar Chaabane'},{value:'El Haouaria',label:'El Haouaria'},{value:'El Maâmoura',label:'El Maâmoura'},{value:'El Mida',label:'El Mida'},{value:'Grombalia',label:'Grombalia'},{value:'Hammamet',label:'Hammamet'},{value:'Hammam Ghezèze',label:'Hammam Ghezèze'},{value:'Kelibia',label:'Kelibia'},{value:'Korba',label:'Korba'},{value:'Korbous',label:'Korbous'},{value:'Menzel Bouzelfa',label:'Menzel Bouzelfa'},{value:'Menzel Horr',label:'Menzel Horr'},{value:'Menzel Temime',label:'Menzel Temime'},{value:'Somâa',label:'Somâa'},{value:'Soliman',label:'Soliman'},{value:'Takelsa',label:'Takelsa'},{value:'Tazerka',label:'Tazerka'},{value:'Zaouiet Djedidi',label:'Zaouiet Djedidi'}],

   //S//
    'Sfax':[{value:'Sfax',label:'Sfax'},{value:'Agareb',label:'Agareb'},{value:'Bir Ali Ben Khélifa',label:'Bir Ali Ben Khélifa'},{value:'Chihia',label:'Chihia'},{value:'El Ain',label:'El Ain'},{value:'El Hencha',label:'El Hencha'},{value:'Ghraïnisia',label:'Ghraïnisia'},{value:'Gremda',label:'Gremda'},{value:'Jebiniana',label:'Jebiniana'},{value:'Kerkennah',label:'Kerkennah'},{value:'Mahares',label:'Mahares'},{value:'Menzel Chaker',label:'Menzel Chaker'},{value:'Sakiet Eddaïer',label:'Sakiet Eddaïer'},{value:'Sakiet Ezzit',label:'Sakiet Ezzit'},{value:'Skhira',label:'Skhira'},{value:'Thyna',label:'Thyna'}],
 
    'Siliana':[{value:'Siliana',label:'Siliana'},{value:'Bargou',label:'Bargou'},{value:'Bou Arada',label:'Bou Arada'},{value:'El Aroussa',label:'El Aroussa'},{value:'El Krib',label:'El Krib'},{value:'Gaâfour',label:'Gaâfour'},{value:'Maktar',label:'Maktar'},{value:'Rouhia',label:'Rouhia'},{value:'Kesra',label:'Kesra'},{value:'Sidi Bou Rouis',label:'Sidi Bou Rouis'}],
    
    'Sousse':[{value:'Sousse',label:'Sousse'},{value:'Akouda',label:'Akouda'},{value:'Boufich',label:'Boufich'},{value:'Enfidha',label:'Enfidha'},{value:'Ezzouhour',label:'Ezzouhour'},{value:'Hammam Sousse',label:'Hammam Sousse'},{value:'Hergla',label:'Hergla'},{value:'Kalâa Kebira',label:'Kalâa Kebira'},{value:"Kalâa Seghira",label:'Kalâa Seghira'},{value:"Konda",label:'Konda'},{value:'Ksibet Thrayet',label:'Ksibet Thrayet'},{value:"Messaadine",label:'Messaadine'},{value:"M'saken",label:"M'saken"},{value:'Sidi Bou Ali',label:'Sidi Bou Ali'},{value:'Sidi El Hani',label:'Sidi El Hani'},{value:'Zaouiet Sousse',label:'Zaouiet Sousse'}],
    'Sidi Bouzid':[{value:'Sidi Bouzid',label:'Sidi Bouzid'},{value:'Bir El Hafey',label:'Bir El Hafey'},{value:'Cebalet Ouled Asker',label:'Cebalet Ouled Asker'},{value:'Jilma',label:'Jilma'},{value:'Meknassy',label:'Meknassy'},{value:'Menzel Bouzaian',label:'Menzel Bouzaian'},{value:'Mezzouna',label:'Mezzouna'},{value:'Ouled Haffouz',label:'Ouled Haffouz'},{value:'Regueb',label:'Regueb'},{value:'Sidi Ali Ben Aoun',label:'Sidi Ali Ben Aoun'}],
    //T
    'Tataouine':[{value:'Tataouine',label:'Tataouine'},{value:'Bir Lahmar',label:'Bir Lahmar'},{value:'Dehiba',label:'Dehiba'},{value:'Ghomrassen',label:'Ghomrassen'},{value:'Remada',label:'Remada'}],
    'Tozeur':[{value:'Tozeur',label:'Tozeur'},{value:'Degache',label:'Degache'},{value:'Hamet Jerid',label:'Hamet Jerid'},{value:'Nafta',label:'Nafta'},{value:'Tamerza',label:'Tamerza'}],
    //z
    'Zaghouan':[{value:'Zaghouan',label:'Zaghouan'},{value:'Bir Mcherga',label:'Bir Mcherga'},{value:'Djebel Oust',label:'Djebel Oust'},{value:'El Fahs',label:'El Fahs'},{value:'Nadhour',label:'Nadhour'},{value:'Zriba',label:'Zriba'}],
}




export const governorates:MygovernorateType[] =[
    {value: 'Ariana', label: 'Ariana'},
    {value: 'Ben Arous', label: 'Ben Arous'},
    {value: 'Béja', label: 'Béja'},
    {value: 'Bizerte', label: 'Bizerte'},
    {value: 'Gabès', label: 'Gabès'},
    {value: 'Gafsa', label: 'Gafsa'},
    {value: 'Jendouba', label: 'Jendouba'},
    {value: 'Kairouan', label: 'Kairouan'},
    {value: 'Kasserine', label: 'Kasserine'},
    {value: 'Kebili', label: 'Kebili'},
    {value: 'Kef', label: 'Kef'},
    {value: 'Tunis', label: 'Tunis'},
    {value: 'Mahdia', label: 'Mahdia'},
    {value: 'Manouba', label: 'Manouba'},
    {value: 'Mednine', label: 'Mednine'},
    {value: 'Monastir', label: 'Monastir'},
    {value: 'Nabeul', label: 'Nabeul'},
    {value: 'Sfax', label: 'Sfax'},
    {value: 'Siliana', label: 'Siliana'},
    {value: 'Sousse', label: 'Sousse'},
    {value: 'Sidi Bouzid', label: 'Sidi Bouzid'},
    {value: 'Tataouine', label: 'Tataouine'},
    {value: 'Tozeur', label: 'Tozeur'},
    {value: 'Zaghouan', label: 'Zaghouan'},


]











