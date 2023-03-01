#!/usr/bin/env node

const {execSync} = require('child_process')

const runCommand = command => {
  try {
    execSync(`${command}`, {stdio: 'inherit'})
  } catch (error) {
    console.error(`Failed to execute ${command}`, error)
    return false
  }
  return true
}

const repoName = process.argv[2]
const gitCheckoutCommand = `git clone --depth 1 https://github.com/jw1219/create-pug-tailwindcss-app ${repoName}`
const installDepsCommand = `cd ${repoName} && npm install`


console.log(`Cloning repository with name ${repoName}`)
const checkedOut = runCommand(gitCheckoutCommand)
if(!checkedOut) process.exit(-1)

console.log(`Installing dependencies for ${repoName}`)
const installedDeps = runCommand(installDepsCommand)
if(!installedDeps) process.exit(-1)

console.log('Done. Run the following commands to start.')
console.log(`cd ${repoName}`)
console.log('To compile tailwindcss, npm run css')
console.log('To compile pug, npm run pug')