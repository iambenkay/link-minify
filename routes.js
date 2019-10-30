const router = require('express').Router()
const validUrl = require('valid-url')
const shortid = require('shortid')
const Url = require('./models/Url')

router.post('/api/v1/new', async (req, res) => {
    const {url} = req.body
    const URI = validUrl.isWebUri(url)
    if(!URI) return res.status(400).send({error: "Invalid URL provided"})
    let uri_doc = await Url.findOne({url: URI})

    if(uri_doc) return res.send({url: uri_doc.url, code: uri_doc.code})

    uri_doc = new Url({url: URI, code: shortid.generate()})
    uri_doc.save((err, doc) => {
        if (err) return res.status(400).send({error: "The short link couldn't be generated"})
        return res.send({url: doc.url, code: doc.code})
    })
})

router.get('/api/v1/:code', async (req, res) => {
    const {code} = req.params
    if(!code) return res.status(400).send({error: "You must send `code`"})
    let uri_doc = await Url.findOne({code})
    if(!uri_doc) return res.status(404).send({error: "The short code has not been assigned to a link"})
    return res.send({url: uri_doc.url, code: uri_doc.code})
})

router.get('/:code', async (req, res) => {
    const {code} = req.params
    if(!code) return res.status(400).send({error: "You must send `code`"})
    let uri_doc = await Url.findOne({code})
    if(!uri_doc) return res.status(404).send({error: "The short code has not been assigned to a link"})
    return res.redirect(uri_doc.url)
})

module.exports = router
