var provider = {

  street_prefixes: ['ул.', 'бул.', 'ж.к.'],

  countries: [
    'Австралия', 'Австрия', 'Азербайджан', 'Аландски острови', 'Албания', 'Алжир',
    'Американска Самоа', 'Американски Вирджински острови', 'Англия', 'Ангола', 'Ангуила', 'Андора',
    'Антарктика', 'Антигуа и Барбуда', 'Аржентина', 'Армения', 'Аруба', 'Афганистан', 'Бангладеш',
    'Барбадос', 'Бахамски острови', 'Бахрейн', 'Беларус', 'Белгия', 'Белиз', 'Бенин',
    'Бермудски острови', 'Боливия', 'Босна и Херцеговина', 'Ботсвана', 'Бразилия',
    'Британска територия в Индийския океан', 'Британски Вирджински острови', 'Бруней Даруссалам',
    'Бряг на слоновата кост (Кот д\'Ивоар),', 'Буве', 'Буркина Фасо', 'Бурунди', 'Бутан', 'България',
    'Вануату', 'Ватикана', 'Венецуела', 'Виетнам', 'Габон', 'Гамбия', 'Гана', 'Гаяна', 'Гваделупа',
    'Гватемала', 'Гвинея', 'Гвинея-Бисау', 'Германия', 'Гибралтар', 'Гренада', 'Гренландия',
    'Грузия', 'Гуам', 'Гърнси', 'Гърция', 'Дания', 'Демократична република Конго (Заир),',
    'Джибути', 'Джърси', 'Доминика', 'Доминиканска република', 'Египет', 'Еквадор',
    'Екваториална Гвинея', 'Ел Салвадор', 'Еритрея', 'Естония', 'Етиопия', 'Замбия',
    'Западна Сахара', 'Зимбабве', 'Йемен', 'Израел', 'Източен Тимор', 'Индия', 'Индонезия',
    'Йордания', 'Ирак', 'Иран', 'Ирландия', 'Исландия', 'Испания', 'Италия',
    'Кабо Верде (острови Зелени Нос),', 'Казахстан', 'Каймански острови', 'Камбоджа', 'Камерун',
    'Канада', 'Карибска Холандия', 'Катар', 'Кения', 'Кипър', 'Киргизстан', 'Кирибати', 'Китай',
    'Кокосови острови', 'Коледни острови', 'Колумбия', 'Коморски острови', 'Конго', 'Коста Рика',
    'Куба', 'Кувейт', 'Кюрасао', 'Лаос', 'Латвия', 'Лесото', 'Либерия', 'Либия', 'Ливан', 'Литва',
    'Лихтенщайн', 'Люксембург', 'Мавритания', 'Мавриций', 'Мадагаскар', 'Майот', 'Макао',
    'Македония', 'Малави', 'Малайзия', 'Малдиви', 'Мали', 'Малта', 'Ман (остров),', 'Мароко',
    'Мартиника', 'Маршалови острови', 'Мексико', 'Мианмар', 'Микронезия', 'Мозамбик', 'Молдова',
    'Монако', 'Монголия', 'Монсерат', 'Намибия', 'Науру', 'Непал', 'Нигер', 'Нигерия', 'Никарагуа',
    'Ниуе', 'Нова Зеландия', 'Нова Каледония', 'Норвегия', 'Норфолк (остров),',
    'Обединени арабски емирства', 'Оман', 'Острови Кук', 'Острови Хърд и Макдоналд', 'Пакистан',
    'Палау', 'Палестина', 'Панама', 'Папуа Нова Гвинея', 'Парагвай', 'Перу', 'Питкерн', 'Полша',
    'Португалия', 'Пуерто Рико', 'Реюнион', 'Руанда', 'Румъния', 'Русия', 'Самоа', 'Сан марино',
    'Сао Томе и Принсипи', 'Саудитска Арабия', 'САЩ', 'Свазиленд', 'Свалбард и Ян Майен',
    'Света Елена (остров),', 'Северна Корея', 'Северни Мариански острови', 'Сейнт Бартс',
    'Сейнт Винсент и Гренадини', 'Сейнт Китс и Невис', 'Сейнт Лусия', 'Сейшели',
    'Сен Мартен (Франция),', 'Сен Пиер и Микелон', 'Сенегал', 'Сиера Леоне', 'Сингапур',
    'Синт Мартен (Холандия),', 'Сирия', 'Словакия', 'Словения', 'Соломонови острови', 'Сомалия',
    'Судан', 'Суринам', 'Сърбия', 'Таджикистан', 'Тайван', 'Тайланд', 'Танзания', 'Того', 'Токелау',
    'Тонга', 'Тринидад и Тобаго', 'Тувалу', 'Тунис', 'Туркменистан', 'Турция', 'Търкс и Кайкос',
    'Уганда', 'Узбекистан', 'Украйна', 'Унгария', 'Уолис и Футуна', 'Уругвай', 'Фарьорски острови',
    'Фиджи', 'Филипини', 'Финландия', 'Фолкландски острови', 'Франция', 'Френска Полинезия',
    'Френски южни и антарктически територии', 'Фреска Гвиана', 'Хаити', 'Холандия', 'Хондурас',
    'Хонконг', 'Хърватска', 'Централноафриканска република', 'Чад', 'Черна гора', 'Чехия', 'Чили',
    'Швейцария', 'Швеция', 'Шри Ланка', 'ЮАР', 'Южен Судан',
    'Южна Джорджия и Южни Сандвичеви острови', 'Южна Корея', 'Ямайка', 'Япония',
  ],

  zip_formats: ['1###', '2###', '3###', '4###', '5###', '6###', '7###', '8###', '9###'],

  building_number_formats: ['#', '##', '###', '№ #', '№ ##', '№ ###', 'блок #', 'блок ##', 'блок ###'],

  cities: [
    'Айтос', 'Аксаково', 'Алфатар', 'Антоново', 'Априлци', 'Ардино', 'Асеновград', 'Ахелой',
    'Ахтопол', 'Балчик', 'Банкя', 'Банско', 'Баня', 'Батак', 'Батановци', 'Белене', 'Белица',
    'Белово', 'Белоградчик', 'Белослав', 'Берковица', 'Благоевград', 'Бобов дол', 'Бобошево',
    'Божурище', 'Бойчиновци', 'Болярово', 'Борово', 'Ботевград', 'Брацигово', 'Брегово', 'Брезник',
    'Брезово', 'Брусарци', 'Бургас', 'Бухово', 'Българово', 'Бяла', 'Бяла', 'Бяла Слатина',
    'Бяла Черква', 'Варна', 'Велики Преслав', 'Велико Търново', 'Велинград', 'Ветово', 'Ветрен',
    'Видин', 'Враца', 'Вълчедръм', 'Вълчи дол', 'Върбица', 'Вършец', 'Габрово', 'Генерал Тошево',
    'Главиница', 'Глоджево', 'Годеч', 'Горна Оряховица', 'Гоце Делчев', 'Грамада', 'Гулянци',
    'Гурково', 'Гълъбово', 'Две могили', 'Дебелец', 'Девин', 'Девня', 'Джебел', 'Димитровград',
    'Димово', 'Добринище', 'Добрич', 'Долна баня', 'Долна Митрополия', 'Долна Оряховица',
    'Долни Дъбник', 'Долни чифлик', 'Доспат', 'Драгоман', 'Дряново', 'Дулово', 'Дунавци', 'Дупница',
    'Дългопол', 'Елена', 'Елин Пелин', 'Елхово', 'Етрополе', 'Завет', 'Земен', 'Златарица',
    'Златица', 'Златоград', 'Ивайловград', 'Игнатиево', 'Искър', 'Исперих', 'Ихтиман', 'Каблешково',
    'Каварна', 'Казанлък', 'Калофер', 'Камено', 'Каолиново', 'Карлово', 'Карнобат', 'Каспичан',
    'Кермен', 'Килифарево', 'Китен', 'Клисура', 'Кнежа', 'Козлодуй', 'Койнаре', 'Копривщица',
    'Костандово', 'Костенец', 'Костинброд', 'Котел', 'Кочериново', 'Кресна', 'Криводол', 'Кричим',
    'Крумовград', 'Крън', 'Кубрат', 'Куклен', 'Кула', 'Кърджали', 'Кюстендил', 'Левски', 'Летница',
    'Ловеч', 'Лозница', 'Лом', 'Луковит', 'Лъки', 'Любимец', 'Лясковец', 'Мадан', 'Маджарово',
    'Малко Търново', 'Мартен', 'Мездра', 'Мелник', 'Меричлери', 'Мизия', 'Момин проход',
    'Момчилград', 'Монтана', 'Мъглиж', 'Неделино', 'Несебър', 'Николаево', 'Никопол', 'Нова Загора',
    'Нови Искър', 'Нови пазар', 'Обзор', 'Омуртаг', 'Опака', 'Оряхово', 'Павел баня', 'Павликени',
    'Пазарджик', 'Панагюрище', 'Перник', 'Перущица', 'Петрич', 'Пещера', 'Пирдоп', 'Плачковци',
    'Плевен', 'Плиска', 'Пловдив', 'Полски Тръмбеш', 'Поморие', 'Попово', 'Пордим', 'Правец',
    'Приморско', 'Провадия', 'Първомай', 'Раднево', 'Радомир', 'Разград', 'Разлог', 'Ракитово',
    'Раковски', 'Рила', 'Роман', 'Рудозем', 'Русе', 'Садово', 'Самоков', 'Сандански',
    'Сапарева баня', 'Свети Влас', 'Свиленград', 'Свищов', 'Своге', 'Севлиево', 'Сеново',
    'Септември', 'Силистра', 'Симеоновград', 'Симитли', 'Славяново', 'Сливен', 'Сливница',
    'Сливо поле', 'Смолян', 'Смядово', 'Созопол', 'Сопот', 'София', 'Средец', 'Стамболийски',
    'Стара Загора', 'Стражица', 'Стралджа', 'Стрелча', 'Суворово', 'Сунгурларе', 'Сухиндол',
    'Съединение', 'Сърница', 'Твърдица', 'Тервел', 'Тетевен', 'Тополовград', 'Троян', 'Трън',
    'Тръстеник', 'Трявна', 'Тутракан', 'Търговище', 'Угърчин', 'Хаджидимово', 'Харманли', 'Хасково',
    'Хисаря', 'Цар Калоян', 'Царево', 'Чепеларе', 'Червен бряг', 'Черноморец', 'Чипровци', 'Чирпан',
    'Шабла', 'Шивачево', 'Шипка', 'Шумен', 'Ябланица', 'Якоруда', 'Ямбол',
  ],

  entrance_names: [
    'вх. А', 'вх. Б', 'вх. В', 'вх. Г', 'вх. Д', 'вх. E'
  ],

  street_formats: [
    '{{street_prefix}} {{full_name}}',
  ],

  address1_formats: [
    '{{street}} {{building_number}}',
  ],

  address2_formats: [
    'ап. #', 'ап. ##',
    'ет. #, ап. #', 'ет. #, ап. ##',
    'ет. ##, ап. #', 'ет. ##, ап. ##',
    '{{entrance_name}}, ап. #', '{{entrance_name}}, ап. ##',
    '{{entrance_name}}, ет. #, ап. #', '{{entrance_name}}, ет. #, ап. ##',
    '{{entrance_name}}, ет. ##, ап. #', '{{entrance_name}}, ет. ##, ап. ##'
  ],

  address_formats: [
    '{{city}} {{zip}}\n{{address1}}\n{{address2}}',
  ],

  city: function() {
    return this.random_element(this.cities);
  },

  street_prefix: function() {
    return this.random_element(this.street_prefixes);
  },

  entrance_name: function() {
    return this.random_element(this.entrance_names);
  },

  zip: function() {
    return this.numerify(this.random_element(this.zip_formats));
  },

  address2: function() {
		return this.numerify(this.populate_one_of(this.address2_formats));
	},
};

module.exports = provider;