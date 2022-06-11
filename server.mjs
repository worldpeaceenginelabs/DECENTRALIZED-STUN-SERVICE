import http from 'http'
import Gun from 'gun'
import publicIp from 'public-ip';



const server = http.createServer()

const host = 'localhost'
const port = 8765

var gun = Gun({
  web: server,
  peers: ['https://'],
  axe: true
})

server.listen(8080, () => {
  console.log(
    'Server started on port ' + port + ' with /gun',
  )
  gun.get('test').on(data => console.log(data))
})

// console.log(await publicIp.v6());