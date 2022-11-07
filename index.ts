import dgram from 'dgram'
import * as setPowerOptions from './packets/setPower'

import { LIFX_DEFAULT_PORT } from './constants'

const headerToBuffer = (size: number) => {
  const buf = Buffer.alloc(36)
  buf.fill(0)
  buf.writeUint16LE(size, 0)
  
}

interface LifxState {
  powered: boolean
  colorHue: string
  colorSaturation: string
  colorBrightness: number
  colorKelvin: number
}

const setPower = (address: string, level: number, duration: number) => {
  const socket = dgram.createSocket('udp4')
  const packetBufferHeader = 
  const packetBufferContent = setPowerOptions.toBuffer({
    level,
    duration
  })
  socket.send()
}

const getLifxState = (address: string) => {
  const socket = dgram.createSocket('udp4')
  socket.on('error', (err) => {
    console.log(err)
  })
  socket.on('message', (msg, rinfo) => {
    console.log(msg)
    console.log(rinfo)
  })
  socket.send('getInfo', LIFX_DEFAULT_PORT, address, (err, bytes) => {
    console.log(err)
    console.log(bytes)
  })
}

getLifxState('192.168.1.78')
