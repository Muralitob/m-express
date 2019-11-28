module.exports=(app)=>{
  app.use('/api',require('./users.js'))
}