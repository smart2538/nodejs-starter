import * as admin from 'firebase-admin'

const serviceAccount = './src/model/jittatestapp-firebase-admin.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://jittatestapp.firebaseio.com",
});

const db = admin.database()

const ref = db.ref('user')

function GetUser(req, res) {
  ref.once('value', (snapshot) => {
    console.log(snapshot.val())
    res.json(snapshot.val())
  })
}

function CreateUser(req, res) {
  ref.push().set({
    date_of_birth: "June 26, 2538",
    full_name: "smart"
  }, (value, err) => {
    if (!err) {
      console.log(value)
      res.json(value)
    }
  })
}

module.exports = {
  GetUser,
  CreateUser,
}
