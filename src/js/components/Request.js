export default class Request {
  constructor (name, link, description) {
    this.port = 'https://d-store-dev-omega.herokuapp.com'
    this.type = 'GET'
    this.name = name;
    this.link = link;
    this.description = description;
    this.headers = [];
    this.className = 'chip blue'
  }

  get pathname () {
    return this.port + this.link;
  }

  setHeader (name, content) {
    return this.headers.push({ name, content })
  }

  json (content) {
    return JSON.stringify(content)
  }
}