$("#ua").click(function () {
    setUaLanguage();
});

$("#eng").click(function () {
    setEngLanguage();
});


function setUaLanguage() {
    $("#nav_1").text('Про нас');
    $("#nav_2").text('Продукція');
    $("#nav_3").text('Сезонність');
    $("#nav_4").text('Контакти');

    $(".about-us__title").text('Про нас');
    $(".about-us__text").text('Наша ферма створена в 2020 році, в Харківській області, село Болібоки. Звідси і з\'явилася назва - Bolberry. Ми вирощуємо лохину в мальовничому, екологічно чистому місці, далеко від міста, на плантації, площа якої 15 га. Надалі плануємо збільшувати площі посадки ягоди.');

    $(".useful-properties__content--title").text('Корисні властивості лохини');
    $(".useful-properties__text").text('Ягоди лохини дуже приємні на смак. Голубіка- джерело вітамінів. Зміцнює стінки судин, покращує апетит. Ягода знижує рівень цукру в крові, допомагає при серцевих захворюваннях і т.д. Ягоди лохини найчастіше застосовують в свіжому вигляді. Але багато сортів добре переносять транспортування і тривале зберігання (до двох тижнів в холодильнику) без втрати своїх смакових якостей.');

    $(".quality-product__item-content--title").text('Якість');
    $(".quality-product__item-content--text").text('Для створення надійних джерел безперебійного живлення систем поливу, ми використовуємо водонакопичувальними басейн з насосною станцією, так як від якості поливу, в період плодоношення, залежить кількість і смакові якості ягоди. Ми хочемо забезпечити продукцією, в якості якої впевнені.');

    $(".production_title").text('Продукція');
    $(".production_text").text('Ми довго вивчали питання правильної підготовки поля, відвідали промислові плантації в Європі, спілкувалися з великою кількістю фахівців.');


    $("#card_1_text").text('Ідеальний смак');
    $("#card_2_text").text('Вирощено з любов’ю');
    $("#card_3_text").text('Натурально');

    $(".title-location").text('Локація');
    $(".title-contacts").text('контакти');

    $(".graphic__wrapper_title").text('Період дозрівання ягід:');
    $(".graphic_wrapper_img").attr("src", "images/graphics/graphic_ua.svg");

    $(".Duke").text('Дюк');
    $(".textDuke").text('Ранній (середина червня-початок липня), плоди великі терпко-солодкі з кислуватим смаком.');
    $(".Sierra").text('Сієра');
    $(".textSierra").text('Середньоранній сорт (кінець липня), ягоди великі, ароматні, соковиті, смак солодкий.');
    $(".Bluegold").text('Блюголд');
    $(".textBluegold").text('Сорт середньоранній. Стиглості ягоди досягають у другій декаді липня, практично одночасно, ягода кисло-солодка.');
    $(".Bluecrop").text('Блюкроп');
    $(".textBluecrop").text('Середній сорт (кінець липня-серпень), ягоди дуже смачні, як в сирому вигляді, так і в переробленому.');
    $(".Chandler").text('Чандлер');
    $(".textChandler").text('Плодоношення з серпня по вересень. Ягода дуже велика, з приємним десертним смаком.');
    $(".Elliot").text('Еліот');
    $(".textElliot").text("Пізній сорт, дозріває з початку вересня і плодоносить до середини жовтня. Плоди мають середній розмір, соковиту, щільну м'якоть, солодкий смак."),

        $("#ua").css("color", "black");
    $("#eng").css("color", "#c4c4c4");
}

function setEngLanguage() {
    $("#nav_1").text('About us');
    $("#nav_2").text('Products');
    $("#nav_3").text('Seasonality');
    $("#nav_4").text('Contacts');

    $(".about-us__title").text('About us');
    $(".about-us__text").text('Our farm was created in 2020, in the Kharkiv region, the village of Boliboki. This is where the name comes from - Bolberry. We grow blueberries in a picturesque, ecologically clean place, far from the city, on a plantation with an area of 15 hectares. In the future, we plan to increase the berry planting area.');

    $(".useful-properties__content--title").text('Useful properties of blueberries');
    $(".useful-properties__text").text('Blueberries are very tasty. Blueberries are a storehouse of vitamins. Strengthens the walls of blood vessels, improves appetite. The berry lowers blood sugar, helps with heart disease, etc. Blueberries are most often used fresh. But many varieties perfectly tolerate transportation and long-term storage (up to two weeks in the refrigerator) without losing their taste.');

    $(".quality-product__item-content--title").text('Quality');
    $(".quality-product__item-content--text").text('To create reliable uninterruptible power supplies for irrigation systems, we use a water storage pool with a pumping station, since the quantity and taste of the berry depend on the quality of irrigation during the fruiting period. We want to provide products which we are confident of.');

    $(".production_title").text('Production');
    $(".production_text").text('We studied the issue of proper field preparation for a long time, visited industrial plantations in Europe, talked with a large number of specialists.');


    $("#card_1_text").text('Perfect taste');
    $("#card_2_text").text('Harvest with love');
    $("#card_3_text").text('Organic');

    $(".title-location").text('Location');
    $(".title-contacts").text('contacts');


    $(".graphic__wrapper_title").text('The ripening period of berries:');
    $(".graphic_wrapper_img").attr("src", "images/graphics/graphic_eng.svg");

    $(".Duke").text('Duke');
    $(".textDuke").text('Early (mid-June-early July), large, tart-sweet fruits with a sour aftertaste.');
    $(".Sierra").text('Sierra');
    $(".textSierra").text('Medium early variety (end of July), berries are large, fragrant, juicy and have sweet taste.');
    $(".Bluegold").text('Bluegold');
    $(".textBluegold").text('Medium early variety. The berries reach ripeness in the second decade of July, almost simultaneously, the berry is sweet and sour.');
    $(".Bluecrop").text('Bluecrop');
    $(".textBluecrop").text('Medium variety (late July-August), the berries are very tasty, both raw and processed');
    $(".Chandler").text('Chandler');
    $(".textChandler").text('Fruiting from August to September. The berry is very large, with a pleasant dessert taste.');
    $(".Elliot").text('Elliot');
    $(".textElliot").text('Late variety, ripens from early September and bears fruit until mid-October. The fruits are of medium size, juicy, and have firm pulp and sweet taste');

    $("#eng").css("color", "black");
    $("#ua").css("color", "#c4c4c4");
}


setEngLanguage();
