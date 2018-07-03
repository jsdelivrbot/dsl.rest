# dsl.rest
trying to convert dsl.sk to rest api.

# /articles/
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
      }
   ]
}
```
next request should be /articles/21257
