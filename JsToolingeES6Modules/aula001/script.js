// Compatibilidade de Codigos -- BABEL

// npm init -y
// npm install --save-dev @babel/cli @babel/preset-env @babel/core


const nome = 'Ezequiel'
const obj = {nome}
const novoObj = {...obj}

console.log(novoObj)

// Para converter o arquivo 
//npx babel script.js -o bundle.js --presets=@babel/env