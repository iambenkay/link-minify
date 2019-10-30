# link-minify
A URL Shortener API with MongoDB and Node.js. The app root is https://link-minify.herokuapp.com

### HOW TO
Send a `POST` request to `/api/v1/new` with a body:
```json
{
    "url": "https://github.com/iambenkay/link-minify"
}

@returns
{
    "url": "https://github.com/iambenkay/link-minify",
    "code": "<code>"
}
```
Now visit /`code` where `code` is the short code you got, and it will always redirect you to your link.  
Also sending a `GET` request to /api/v1/`code`returns:
```json
{
    "url": "https://github.com/iambenkay/link-minify",
    "code": "<code>"
}
```
