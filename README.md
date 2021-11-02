
<h1 align="center">
  <br>
  <a href="https://azrael.gg?utm_src=Github"><img src="https://cdn.azrael.gg/uploads/branding/azrael_logo_primary.png" alt="Azrael" width="200"></a>
  <br>
  Azrael
  <br>
</h1>

<h4 align="center">A powerful global ban API system made with <a href="https://nodejs.org" target="_blank">Node.js</a></h4>

<p align="center">
  <a href="https://img.shields.io/discord/859549564536356864">
    <img src="https://img.shields.io/discord/859549564536356864"
         alt="Discord">
  </a>
  <a href="https://img.shields.io/maintenance/yes/2021">
    <img src="https://img.shields.io/maintenance/yes/2021">
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#banlist-affiliate-program">Banlist Affiliate Program</a> •
  <a href="#credits">Credits</a> •
  <a href="#support">Support</a>
</p>

## Key Features

* Simple Setup
  - Setup your version of our API in under 5 minutes!
* Fully Customizable
  - Need more ban reasons? Want to use specific proof links? You can customize all of that with the API's simple setup!
* 24/7 Support
  - Let us, help you. Whether you need support with the setup, customization or maintenance of your API. We are here to help, reach out to our Banlist Client Support team for assistance.

## How To Use

To clone and run this application, you'll need a linux enviroment running Node.js v14. From your command line:

```
# Clone this repository
$ git clone https://github.com/Azrael-Interactive/api.git

# Go into the repository
$ cd api

# Install Dependencies
$ npm install

# Run Setup
$ npm run setup

# Run the app
$ npm start
```

The default port is 3000, if you need to change the port, you can change it in the `config.json` file.

### Generating API Token(s)

To generate API Token(s) for your API, an endpoint has already been created and you simply need to send a `POST` request to the endpoint. An example has been provided below using [node-fetch v2.6.5](https://www.npmjs.com/package/node-fetch/v/2.6.5)

```javascript
const body = { id: '1', action: 'CREATE' }; 
// body.id - Internal Reference ID, Used to identify the moderator on ban data. Typeof STRING
// body.action - Action to take, CREATE or DELETE a token. Typeof STRING

fetch('https://yourapi.com/admin/token', {
        method: 'POST',
        body:    JSON.stringify(body),
        headers: { 
          'Authorization': 'YOUR_MASTER_TOKEN'
          'Content-Type': 'application/json' 
        },
    })
    .then(res => res.json())
    .then(json => console.log(json));
    
    // Expected Response
    { status: 200, message: 'Token Created', data: { internal_id: '1', token: '2xqhbwLaSB0ZxSO47oxTKnxuOQV8rt' }}
```
### Dependencies
- [express](https://www.npmjs.com/package/express)
- [body-parser](https://www.npmjs.com/package/body-parser) 
- [moment](https://www.npmjs.com/package/moment) 
- [response-time](https://www.npmjs.com/package/response-time) 
- [keyv](https://www.npmjs.com/package/keyv) 
- [@Keyv/sqlite](https://www.npmjs.com/package/@keyv/sqlite) 

## Banlist Affiliate Program

We offer a banlist affiliate program for users and organizations that utilize our open-sourced API in a public instance. This program includes the following benefits:
* Priority Support
  - Get dedicated and priority support through from our Banlist Client Support team.
* Affiliate Newsletter
  - Stay in the know, find out about changes to the program before they are released.
* Implementation into Azrael
  - If your banlist meets our affiliate program guidelines, we may implement your banlist into the Azrael bot or other security services.
* Hands on Support
  - We get it, things sometimes don't go as planned. That's why we offer hands on support directly from the experts who built the Azrael API.


## Support

<a href="https://azrl.cc/dis?utm_src=Github" target="_blank"><img src="https://cdn.azrael.gg/assets/remote/img/market/azrael_join_us_banner.png" alt="Join Us"></a>

---

> [azrael.gg](https://azrael.gg) &nbsp;&middot;&nbsp;
> GitHub [@Azrael-Interactive](https://github.com/Azrael-Interactive) &nbsp;&middot;&nbsp;
> Twitter [@AzraelAPI](https://twitter.com/AzraelAPI) &nbsp;&middot;&nbsp;
> Instagram [@AzraelAPI](https://www.instagram.com/azraelapi/)

