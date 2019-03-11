#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
// const projectGenerator = require('./core/project-gem')

const erroHandler = () => {
  console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
  process.exit(1);
}

program.version('0.0.1', '-v', '--version')
.option('-n, --new [template] [projectName]','Create new project from template')
.option('-e, --express-api [option]','Structure project generator for express api')
.option('-graph, --graphql-api [option]','Structure project generator for graphql api')
.parse(process.argv)

if (program.new) {
  if (process.argv.slice(2).length < 3) erroHandler()
  console.log(`Generating new project ${program.new} named ${chalk.green(program.args[0])}`)
}

program.on('command:*', function () {
  erroHandler()
});
