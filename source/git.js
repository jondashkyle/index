var p = require('path')
var x = require('xtend')
var fse = require('fs-extra')
var sg = require('simple-git')

var dir = p.join(__dirname, '../')

function readJson () {
  return fse.readJson(p.join(dir, 'data.json'), function (err, data) {
    return err
      ? console.warn('can not read json')
      : getCommits(data)
  })
}

function getCommits (json) {
  sg(dir).log(function (err, log) {
    var result = log.all.map(commit => ({
      date: commit.date,
      message:commit.message
    }))
    fse.writeJson(p.join(dir, 'data.json'), x(json, {
      git: {
        title: 'git history',
        hidden: true,
        commits: result
      }
    }))
  })
}

readJson()