const twilio = require('twilio');

const accountSid = 'ACaff6db7044ba385a30a0925eba462274'
const authToken = '817ffc5ff4611f791cec0885a9027143'

const client = twilio(accountSid, authToken)
const {rutas, registro} = require('./routes/session.js');

try {
    //async
    if(registro){
   const message =  client.messages.create({
    
      body: `Bienvenido: ${registro.username}`,
      from: '+19377447141',
      to: '+541133398915',

     
   })}
    else{
        console.log('No se envio el mensaje');
    }
   
} catch (error) {
   console.log(error)
}
