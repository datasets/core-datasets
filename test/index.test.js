const path = require('path')
const test = require('ava')
const sinon = require('sinon')
const {DataHub} = require('datahub-cli/lib/utils/datahub.js')
const {Dataset} = require('data.js')

const {CoreTools} = require('../index.js')

const statusCsv = path.join(__dirname, 'status-test.csv')

test('it loads', async t => {
  const tool = await CoreTools.load(statusCsv)
  t.is(tool.statuses.length, 2)
  t.is(tool.statuses[0].local, 'data/finance-vix')
})

test.serial('it checks', async t => {
  const tool = await CoreTools.load(statusCsv, 'test/fixtures')
  tool.save = sinon.spy()
  const path_ = 'test/status-test.csv'
  await tool.check(path_)
  t.true(tool.statuses[0].validated_metadata)
  t.true(tool.statuses[0].validated_data)
  t.true(tool.statuses[0].validated_data_message.includes('valid'))
  t.true(tool.statuses[0].validated_metadata_message.includes('valid'))
  t.true(tool.statuses[1].validated_data.includes('N/A'))
  t.true(tool.statuses[1].validated_data_message.includes('N/A'))
  t.false(tool.statuses[1].validated_metadata)
  t.true(tool.statuses[1].validated_metadata_message.includes('Invalid type: object (expected array)'))
})

test.serial('it publishes', async t => {
  const datahub = new DataHub({
    apiUrl: 'https://api-test.com',
    token: 'token',
    owner: 'test'
  })
  datahub.push = sinon.spy()
  const tool = await CoreTools.load(statusCsv, 'test/fixtures')
  tool.save = sinon.spy()
  const path_ = 'test/status-test.csv'
  await tool.push(datahub, path_)
  t.true(tool.statuses[0].published.includes('https:/testing.datahub.io/core/finance-vix'))
  t.true(tool.statuses[1].published.includes('-'))
  t.true(datahub.push.calledOnce)
  t.true(datahub.push.firstCall.args[0] instanceof Dataset)
})

