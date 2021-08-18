# Overview
## OWASP top ten https://owasp.org/www-project-top-ten/
## Node goat https://nodegoat.herokuapp.com/tutorial
## Cross site scripting https://www.google.com/about/appsecurity/learning/xss/
## Denial of service
- Inputs and forms are sanitized and validated
- Mechanisms to prevent looping/creation of data
- Use validator.js or safe-regex package for regex
## Server side injection
- Always sanitize and validate for input
- Never use eval(), setTimeout(), setInterval() to parse input
- Use safer JSON.parse or parseXxx() like parseInt()
- Use strict code
# Best practices
## Packages
- node audit : generate security report
- node oudated: check outdated packages
- two factor and readonly tokens
## Data 
- Data handling with type and validation
- Use prepared statements for SQL/NoSQL
- Set proper HTTP headers with helmet https://helmetjs.github.io/
- Encryp user data and session management https://nodejs.org/api/crypto.html
## Server
- Use https protocol. Certificate provider eg https://letsencrypt.org/
- Rate limitting against DoS attack. npm instal express-rate-limit
- Use csurf to prevent CSRF attacks. https://github.com/expressjs/csurf
- Cookie attrbutes
  - Secure
  - HttOnly
  - Domain
  - Expire
