<form>
  <div>
    <input id="name" type="text" name="text"></input>
    <input id="city" type="text" name="text"></input>
  </div>

  <div>
    <input type="submit" value="Send"></input>
  </div>
</form>

// First, you need to generate a pair for your app and store it somewhere securely... 
const pair = await SEA.pair()


// Then you need to log your app in:
const gun.user().auth(pair)
// or
gun.user().auth(alias, password)

//or
const user = gun.user()
user.auth(...)



// you can validate your login with
gun.on('auth', ack => { /* if ack has a value, you are authenticated */})

// That will be after your app has signed in and you want to store a graph of your data.. so probably inside gun.on('auth', ...)
SEA.sign(pair, data)


// npmjs.com/package/dotenv