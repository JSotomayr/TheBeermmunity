from datetime import datetime

data = {

    "Customer" : [
        {
            "id": 1,
            "email": "ana.limones@email.com",
            "_password": "1234",
            "username": "Lemons",
            "country": "España",
            "city": "Madrid",
            "description": "Amante de la buena comida y de una buena cerveza.",
            "image": "https://drive.google.com/file/d/1xdxlJ5INwWRn42pd37zgcji7MowSgmwO/view?usp=sharing",
            "_is_active": True,
            "_is_brewerie": False,
            "_is_admin": True
        },
        {
            "id": 2,
            "email": "carol.traba@email.com",
            "_password": "5678",
            "username": "Carolth",
            "country": "España",
            "city": "Madrid",
            "description": "Donde este una buena cervecería, que me quiten lo bailado.",
            "image": "https://drive.google.com/file/d/1L9YSYxpIlfHAgdrgdZIgH95W5JKriZ6K/view?usp=sharing",
            "_is_active": True,
            "_is_brewerie": False,
            "_is_admin": True
        },
        {
            "id": 3,
            "email": "jaime.soto@email.com",
            "_password": "1478",
            "username": "JSoto",
            "country": "España",
            "city": "Madrid",
            "description": "Yo quiero dar a conocer y probar todas las cervezas que pueda",
            "image": "https://drive.google.com/file/d/1JDfUb10hXnO4qZ8eFeJQRkI31EYyr-2w/view?usp=sharing",
            "_is_active": True,
            "_is_brewerie": True,
            "_is_admin": True
        },
        {
            "id": 4,
            "email": "folkencillo@email.com",
            "_password": "1478",
            "username": "Folken",
            "country": "España",
            "city": "Málaga",
            "description": "AY ZEÑÓ! Tu que le das cerveza a los pobres, y sacias la sed de los abstemios. No soy digno de entrar en tu pub.",
            "image": "https://drive.google.com/file/d/1hvy3FIoujhDAmOL8EsHNqdEJM_N__JlM/view?usp=sharing",
            "_is_active": True,
            "_is_brewerie": False,
            "_is_admin": False
        }
    ],

    "Brewer" : [
        {
            "id": 1,
            "name": "Ana",
            "lastname": "López",
            "id_customer": 1
        },
        {
            "id": 2,
            "name": "Carol",
            "lastname": "Traba",
            "id_customer": 2
        },
        {
            "id": 4,
            "name": "Juan",
            "lastname": "Guerrero",
            "id_customer": 4
        }
    ],

    "Beer" : [
	    {
            "id": 1,
            "brand": "Estrella Galicia",
            "variety": "1906",
            "style": "Extra Lager",
            "origin": "España",
            "obv": 6.5,
            "drinking_temperature": "5º-6º",
            "description": 'Toda la herencia de Estrella Galicia resumida en una cerveza extraordinaria. Maltas tostadas, lúpulo aromático y una guarda prolongada para crear un sabor y aroma con carácter único. Con un Extracto Seco Primitivo de 15º Plato y un volumen de alcohol del 6,5% esta cerveza se elabora a partir de agua de la ciudad de A Coruña y una cuidada selección de maltas Pilsen y tostadas y lúpulos de la variedad “Perle Hallertau”. Tradición cervecera, carácter único y las mejores materias primas se unen para dar lugar a una elegante lager extra con agradables notas tostadas.',
            "image": "https://ibb.co/2tZmYs3",
            "publishment_date": "2021/11/30"
        },
	    {
            "id": 2,
            "brand": "Alhambra",
            "variety": "1925",
            "style": "Pilsner",
            "origin": "España",
            "obv": 6.4,
            "drinking_temperature": "4º-6º",
            "description": 'Alhambra Reserva 1925 posee un color ámbar intenso, aspecto brillante y una espuma cremosa y consistente. Aroma intenso y complejo. En un primer momento manifiesta una fragancia seca, a la que siguen notas de lúpulo floral y fresco, propias del lúpulo Saaz. Encontramos también notas a plátano y manzana roja junto a aromas delicados a tostados y caramelo de las maltas. Los sabores de cereal y lúpulo se mantienen equilibrados con un contrapunto de amargor medio en boca.',
            "image": "https://ibb.co/7YB1q5f",
            "publishment_date": "2021/11/30"
        },
	    {
            "id": 3,
            "brand": "Ambar",
            "variety": "Centeno",
            "style": "Tostada",
            "origin": "España",
            "obv": 6.4,
            "drinking_temperature": "6º-8º",
            "description": 'Ambar Centeno, una cerveza tostada y robusta con malta de centeno. Untuosa en paladar y sedosa en boca. El reto fue trabajar un cereal rústico y transformarlo en terciopelo. Para conseguirlo, el lúpulo ha sido fundamental, aportando aromas de melocotón, avellanas, pasas, mandarinas y granadas. Una oda al cereal, es una cerveza tostada, rotunda y turbia que sorprende por su textura poco habitual.',
            "image": "https://ibb.co/ZhdQ6kt",
            "publishment_date": "2021/11/30"
        },
	    {
            "id": 4,
            "brand": "Damm",
            "variety": "Inedit",
            "style": "Lager",
            "origin": "España",
            "obv": 4.8,
            "drinking_temperature": "4º-6º",
            "description": 'INEDIT se hace a partir de dos tipos de cervezas: cerveza de malta de cebada tradicional y cerveza de trigo. Esta cerveza de trigo o cerveza blanca es del estilo Witbier, originario de Bélgica y que se caracteriza por elaborarse con trigo sin maltear. El hecho de elaborarse con trigo sin maltear hace que la cerveza tenga más cuerpo y aumente la sensación de volumen y suavidad en boca.',
            "image": "https://ibb.co/hDBfcG3",
            "publishment_date": "2021/11/30"
        },
	    {
            "id": 5,
            "brand": "Mahou",
            "variety": "Maestra",
            "style": "Lager",
            "origin": "España",
            "obv": 7.5,
            "drinking_temperature": "6º-8º",
            "description": 'Color ámbar intenso resultado del grado mayor de tueste de las maltas, de aspecto brillante y espuma cremosa y consistente. De intensa fragancia alcohólica, se perciben notas cítricas y florales del lúpulo, que se intensifican en cada trago. En nariz se destacan también los afrutados y los aromas tostados y a caramelo de la malta. De entrada apasionada, cuerpo intenso, pleno y con cierta sequedad. El amargo es de intensidad moderada, resultando una cerveza con un buen equilibrio en boca y un dulzor ligero.',
            "image": "https://ibb.co/QYHX5Cq",
            "publishment_date": "2021/11/30"
        },
	    {
            "id": 6,
            "brand": "Ambar",
            "variety": "Especial",
            "style": "Lager",
            "origin": "España",
            "obv": 5.2,
            "drinking_temperature": "4º-8º",
            "description": 'Ambar especial es una lager tipo pilsner de color ambarino y tostado medio. Con 5,2 grados de alcohol y una selecta variedad de cebada, el tueste de las maltas le confiere un sabor dulcificado que equilibra el amargor del lúpulo. Su redondez ha sido recientemente reconocida con una medalla de oro del World Beer Challenge (2016) y el reconocimiento de “Best beer in Spain” en su categoría en los World Beer Award (2016). Además, también fue destacada por la OCU, que realizó un estudio comparativo de las lagers más populares del mercado Español. Podéis ver los resultados aquí.',
            "image": "https://ibb.co/BNYkHSw",
            "publishment_date": "2021/11/30"
        },
	    {
            "id": 7,
            "brand": "Voll-Damm",
            "variety": "Doble Malta",
            "style": "Märzenbier",
            "origin": "España",
            "obv": 7.2,
            "drinking_temperature": "6º-8º",
            "description": 'Cerveza con color roble de reflejos anaranjados. Se presenta densa y brillante, con una capa cromática tostada. La espuma se muestra compacta. Presenta burbujas vivas, finas y veloces. El aroma es de gran intensidad y complejidad. Las primeras notas olfativas son afrutadas, como el melocotón maduro y la manzana; también anaranjadas que dotan la nariz de frescor. Goza de una nariz limpia donde al final persiste la sensación de pan tostado. La entrada de boca es amplia, con carácter. Voluminosa y cremosa. El final nos recuerda al tanino de la hoja de tabaco. El amargor del lúpulo regala una intensa sensación refrescante.',
            "image": "https://ibb.co/Sd4QrzM",
            "publishment_date": "2021/11/30"
        },
	    {
            "id": 8,
            "brand": "Cruzcampo",
            "variety": "Gran Reserva 1904",
            "style": "Lager Especial",
            "origin": "España",
            "obv": 6.4,
            "drinking_temperature": "4º-6º",
            "description": 'Al servir la cerveza en la copa observamos su atractivo color ambar brillante y la calidad y cremosidad de su espuma. En nariz, descubrimos notas tostadas y de levaduras, junto con notas de frutos secos y frutas cítricas. Con el paso del tiempo, los tostados pasan a especiados y regaliz. En boca, su entrada es agradable gracias a su bajo nivel de carbónico y rápidamente aparecen las notas de fruto seco con cierta dulzor y recuerdos de cacahuetes con miel junto con notas frescas y especiadas. El final es levemente amargo y es largo y agradable.',
            "image": "https://ibb.co/8666T5B",
            "publishment_date": "2021/11/30"
        },
	    {
            "id": 9,
            "brand": "San MIguel",
            "variety": "1516",
            "style": "Pilsner",
            "origin": "España",
            "obv": 4.2,
            "drinking_temperature": "5º-7º",
            "description": 'El ligero color dorado es el color que le da la malta ligeramente tostada de una cerveza tipo pilsen. Igual que lo es su espuma, cremosa y consistente. Es delicada y suave. Combina la fragancia a platano y manzana con notas florales de los lúpulos. En otras palabras, San Miguel 1516 es amarga pero agradable.',
            "image": "https://ibb.co/M6m7ddC",
            "publishment_date": "2021/11/30"
        },
	    {
            "id": 10,
            "brand": "Amstel",
            "variety": "Oro",
            "style": "Lager",
            "origin": "España",
            "obv": 6.2,
            "drinking_temperature": 4,
            "description": 'Amstel Oro no es una cerveza tostada cualquiera. Su sabor se consigue con una cuidada mezcla de las mejores maltas y un tostado especial en 3 tiempos: secado, tostación y golpe de fuego a alta temperatura. Un proceso único. Amstel Oro es una cerveza especial tostada de 6,2º con un aroma intenso de sabor ligeramente caramelizado. Se trata de una especialidad asequible y muy apetecible, perfecta para amantes de la cerveza que quieran descubrir algo nuevo y especial sin complicaciones ni pretensiones.',
            "image": "https://ibb.co/Qp9cxjM",
            "publishment_date": "2021/11/30"
        }
    ],

    "Brewerie" : [
        {
            "id": 1,
            "company_name": "BeBeer",
            "address": "Calle Edison, 3",
            "id_customer": 3
        },
    ],

    "BrewerieReview" : [
        {
            "id": 1,
            "review_content": "Muy buen sitio, aunque como nada es perfecto, la puntuación tampoco. (Las tapas eran un poco flojas, pero la cerveza era espectacular).",
            "rating": 4,
            "publishment_date": "2021/12/03",
            "brewerie_id": 1,
            "brewer_id": 1
        }
    ],
    
    "BeerReview" : [
        {
            "id": 2,
            "review_content": "Para una cerveza tan 'grandilocuente', deja un poco que desear.",
            "rating": 3,
            "publishment_date": "2021/12/01",
            "beer_id": 4,
            "brewer_id": 4
        }
    ],

    "Event" : [
        {
            "id": 1, 
            "name": "Beerfest",
            "description": "Ven a nuestro local a probar todas las cervezas posibles y llenar tu cartón de BingBeer para ganar estupendos premios",
            "date": "2022/05/05",
            "country": "España",
            "city": "Madrid",
            "address": "Calle Edison, 3",
            "image": "https://drive.google.com/file/d/1Ll7n5B_AfgBzsiHpYk0CcT8z6ea6RTsq/view?usp=sharing",
            "brewerie_id": 1
        }
    ],
}
