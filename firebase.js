const jsonProductos = require('./productos.json');
const admin = require("firebase-admin");

const serviceAccount = require("./db/test-coder-mongo-firebase-adminsdk-jfh2k-2c4594853d.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
console.log('Conectado a Firebase');
CRUD();
async function CRUD() {
  const db = admin.firestore();
  const query = db.collection('pruebaFirebase');
  try {
  const productosData = {
    jsonProductos
  }
  let doc = query.doc()
  await doc.create(productosData)
  console.log('Productos guardados en Firebase');
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
    CRUD
}