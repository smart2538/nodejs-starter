import Promise from 'bluebird'

function controllerWrapper(fn) {
  return (req, res) => Promise.method(res.json(fn))
}

module.exports = { controllerWrapper }
