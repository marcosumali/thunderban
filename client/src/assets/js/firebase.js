import { initializeApp } from 'firebase'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyC6JYBl7j2QvHEQ3Knu_t3JrT7U3OJJetw',
  authDomain: 'thunderban-4737d.firebaseapp.com',
  databaseURL: 'https://thunderban-4737d.firebaseio.com',
  projectId: 'thunderban-4737d',
  storageBucket: 'thunderban-4737d.appspot.com',
  messagingSenderId: '646627543587'
})

// export const db = app.database()
// export const namesRef = db.ref('names')

export const db = firebaseApp.database()
