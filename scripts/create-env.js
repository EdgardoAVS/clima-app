const fs = require('fs');

fs.writeFileSync("./.env", 
  `
    API=${process.env.API}\n
    KEY=${process.env.KEY}\n
  `)