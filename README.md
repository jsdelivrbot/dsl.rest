# dsl.rest
trying to convert dsl.sk to rest api.

# /articles/page/
```json
{
   "success":true,
   "nextPageId":21257,
   "data":[
      {
         "id":21284,
         "title":"V najvýkonnejších superpočítačoch prišlo k veľkým zmenám, USA získali späť pozíciu",
         "snippet":"V špičke rebríčka najvýkonnejších superpočítačov sveta Top500 vydávaného dvakrát ročne prišlo v aktuálnom júnovom <a href=\"https://www.top500.org/news/us-regains-top500-crown-with-summit-supercomputer-sierra-grabs-number-three-spot/\">vydaní</a> ...",
         "time":"25.6.2018 10:26"
      },
      {
         "id":21279,
         "title":"Japonská sonda sa blíži k asteroidu, z ktorého donesie vzorku",
         "snippet":"Sonda Hayabusa2 japonskej vesmírnej agentúry JAXA sa minulý týždeň priblížila k svojmu cieľu, asteroidu 162173 Ryugu, už na pár stoviek kilometrov, <a href=\"http://global.jaxa.jp/news/2018/#news12151\">poslala</a> ...",
         "time":"25.6.2018 09:37"
      },
      {
         "id":21277,
         "title":"Na Intel CPU sa dajú kradnúť dáta ďalším útokom, iným ako Spectre a Meltdown",
         "snippet":"Na procesoroch od spoločnosti Intel a potenciálne aj na nových procesoroch AMD je možné veľmi spoľahlivo jedným programom získať citlivé dáta z iného programu vďaka dávno známej zraniteľnosti ...",
         "time":"25.6.2018 08:57"
      },
      {
         "id":21278,
         "title":"Expert vystrašil užívateľov ľahkým odomknutím iPhonov, mýlil sa",
         "snippet":"Bezpečnostný expert Matthew Hickey cez víkend vystrašil užívateľov iPhonov tvrdením o triviálne ľahkom postupe umožňujúcom obísť dôležité ochrany pri zadávaní hesla a tak potenciálne ...",
         "time":"24.6.2018 10:38"
      },
      {
         "id":21272,
         "title":"Apple po žalobe priznala problémy klávesníc nových MacBookov, opraví ich zdarma",
         "snippet":"Spoločnosť Apple po májovej <a href=\"http://www.dsl.sk/article.php?article=21105\">žalobe</a> aktuálne priznala problémy s jej klávesnicami v notebookoch počnúc modelmi z roku 2015 a ...",
         "time":"23.6.2018 10:27"
      },
      {
         "id":21271,
         "title":"Skylink umožnil Slovákom pridať Primu, teraz musí vyhodiť všetky Primy aj COOL",
         "snippet":"Možnosť zákazníkov Skylinku na Slovensku jednoducho sledovať aj hlavný kanál českej televízie Prima zrejme nebude trvať dlho, keď teraz musí jeho prevádzkovateľ podľa rozhodnutia českého ...",
         "time":"22.6.2018 17:31"
      },
      {
         "id":21268,
         "title":"Paušály a balíčky 4ky oddnes platia aj v roamingu. Trikom je v nich ale menej dát",
         "snippet":"Nové paušály operátora 4ka a jeho základný dátový balíček oddnes platia aj v roamingu.\n\n<br><br>\n\nDeje sa tak po tom, ako po minuloročnom vstúpení novej legislatívy o EÚ roamingu ...",
         "time":"22.6.2018 11:50"
      },
      {
         "id":21269,
         "title":"Microsoft svojvoľne ukončil podporu Windows 7 na ďalšom hardvéri",
         "snippet":"Spoločnosť Microsoft uskutočnila ďalší kontroverzný krok, keď prestala stále oficiálne podporovaný operačný systém Windows 7 podporovať na ďalšom hardvéri.\n\n<br><br>\n\nTentokrát ...",
         "time":"22.6.2018 10:39"
      },
      {
         "id":21258,
         "title":"Vydanie OpenWrt / LEDE 18.06 RC1 sa posunulo na nedeľu",
         "snippet":"Vydanie prvého kandidáta na vydanie novej verzie 18.06 alternatívneho open source firmvéru najmä pre domáce WiFi routery a ďalšie zariadenia, ktorý vznikol po opätovnom spojení OpenWrt ...",
         "time":"22.6.2018 09:23"
      },
      {
         "id":21267,
         "title":"Intel náhle zmenil CEO, Krzanich odišiel oficiálne kvôli vzťahu so zamestnancom",
         "snippet":"Spoločnosť Intel, dominujúci výrobca x86 procesorov a celkovo najväčší výrobca komplikovanejších čipov, náhle zmenila šéfa, keď vo štvrtok z pozície CEO odstúpil Brian Krzanich.\n\n<br><br>\n\nIntel ...",
         "time":"22.6.2018 08:43"
      }
   ]
}
```
next request should be /articles/page/21257
