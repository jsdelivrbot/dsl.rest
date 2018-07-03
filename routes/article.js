const app = require('express');
const jsdom = require("jsdom");
const path = require('path');
const { JSDOM } = jsdom;
const router = app.Router();

__parentDir = path.dirname(process.mainModule.filename);

 
router.get("/:articleId", (req,res) =>   {
    JSDOM.fromURL("http://dsl.sk/article.php?article="+req.params.articleId)
    .then(dom => {
        const body  = dom.window.document.getElementById("body")
        const title = body.getElementsByClassName("page_title")[0].innerHTML
        const text  = body.getElementsByClassName("article_body")[0].innerHTML
        const tags  = Array.from(body.getElementsByClassName("tag_unselected")).map(x=>x.innerHTML).filter((x,index) => index % 2 !== 0)
        res.json({"succes":true, "data": {"title":title, "tags":tags,"text" :text}})
    }
    )
    .catch(err => {
        res.json({ success: false , message : err.toString()})
    });
});

module.exports = router;