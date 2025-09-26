const fs = require("fs")
const path= require("path")

require("dotenv").config()

const targetPath = path.join(__dirname, "../src/environments/environment.ts")
const devTargetPath = path.join(__dirname, "../src/environments/environment.development.ts")

const envConfigFile = `export const enviroment = {
  apiUrl: "${process.env[API_URL]}"
}`

fs.writeFile(targetPath, envConfigFile, function(error) {
  if(error) {
    throw console.error(error)
  }
})

fs.writeFile(devTargetPath, envConfigFile, function(error){
  if(error) {
    throw console.log(error)
  }
})
