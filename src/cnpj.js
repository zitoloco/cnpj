#!/usr/bin/env node

const axios = require('axios')
const { cnpj } = require('cpf-cnpj-validator')

const cnpjParameter = process.argv[2]

if (!cnpj.isValid(cnpjParameter)) {
  console.log('CNPJ inválido')
  return
}

axios
  .get(`https://www.receitaws.com.br/v1/cnpj/${cnpj.strip(cnpjParameter)}`)
  .then((response) => console.log(response.data))
  .catch((error) => console.log('Erro:', error.response.statusText))
