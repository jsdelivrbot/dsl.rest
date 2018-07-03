const app = require('express');
const jsdom = require("jsdom");
const path = require('path');
const { JSDOM } = jsdom;
const router = app.Router();

__parentDir = path.dirname(process.mainModule.filename);

router.get("/" , (req,res) => {
    getPageData(req,res,"999999")
    })
router.get("/:pageId", (req,res) => getPageData(req,res,req.params.pageId))

function getPageData(req,res,id) {
  //  const id = req.params.pageId === "1" ? 999999 : req.params.pageId;
    JSDOM.fromURL("http://dsl.sk/index_news.php?page="+id)
    .then(dom => {
        const body = dom.window.document.getElementById("body")
        const data = Array.from(body.getElementsByClassName("title"))
        .map(x => x.parentNode)
        .map(x => {
            const id = Number(x.getElementsByClassName("title")[0].getAttribute("href").split("=")[1])
            const title =  x.getElementsByClassName("title")[0].innerHTML
            const snippet = Array.from(x.getElementsByClassName("article_perex")).map( x => x.innerHTML).reduce((acc,current)=> acc +" " + current).toString()
            const dateTime = snippet.substring(snippet.length -23 , snippet.length).split(",")[0].trim()
            return {"id" : id, "title" :title, "snippet":snippet.substring(0,snippet.length-23).trim(), "time":dateTime}
        })
        const rows = Array.from(body.getElementsByTagName("tr"))
        const nextPageId = Number(rows[rows.length-2].getElementsByTagName("A")[1].getAttribute("href").split("=")[1])
        res.json({"success" : true,  "nextPageId" : nextPageId , "data" : data})

    }
    )
    .catch(err => {
        res.json({ success: false , message : err.toString()})
    });
}
module.exports = router;