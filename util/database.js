import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient 

let _db

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://thapar-vansh:tacmptal1105@cluster0.6t5pn.mongodb.net/book-shop?retryWrites=true&w=majority'
  )
    .then(client =>{
        console.log('CONNECTED')
        _db = client.db()
        callback()
    })
    .catch((err) =>{ 
        console.log(err)
        throw err
    })
}

const getDb = () => {
  if (_db) {
    return _db
  }
  else{
    console.log('database not found')
  }
}

export default {
    mongoConnect:mongoConnect,
    getDb:getDb
}
