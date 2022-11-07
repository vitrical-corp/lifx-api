export const SIZE = 6

export interface SetPowerObject {
  level: number
  duration: number
}

export const toObject = (buf: Buffer): SetPowerObject => {
  if (buf.length !== SIZE) {
    throw new Error('Invalid length given for setPower LIFX packet')
  }

  return {
    level: buf.readUInt16LE(0),
    duration: buf.readUInt32LE(2),
  }
}

export const toBuffer = (obj: SetPowerObject) => {
  const buf = Buffer.alloc(SIZE)
  buf.fill(0)

  if (obj.level !== 0 && obj.level !== 65535) {
    throw new RangeError(
      'Invalid level given for setPower LIFX packet, only 0 and 65535 are supported'
    )
  }

  buf.writeUInt16LE(obj.level, 0)
  buf.writeUInt32LE(obj.duration || 0, 2)

  return buf
}
