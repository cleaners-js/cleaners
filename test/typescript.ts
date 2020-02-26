/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  asArray,
  asBoolean,
  asDate,
  asEither,
  asMap,
  asNone,
  asNull,
  asNumber,
  asObject,
  asOptional,
  asString,
  asUndefined
} from '../src/index'

interface Expected {
  boolean: boolean
  number: number
  string: string
  null: null
  undefined: undefined
  none: undefined
  date: Date
  array: string[]
  map: { [key: string]: number }
  optional1: string | undefined
  optional2: string | number
  either: string | number
}

const cleaner = asObject({
  boolean: asBoolean,
  number: asNumber,
  string: asString,
  null: asNull,
  undefined: asUndefined,
  none: asNone,
  date: asDate,
  array: asArray(asString),
  map: asMap(asNumber),
  optional1: asOptional(asString),
  optional2: asOptional(asString, 0),
  either: asEither(asString, asNumber)
})
type Actual = ReturnType<typeof cleaner>

// Check that Actual and Expected are equivalent in both directions:
const checkForward = (value: Actual): Expected => value
const checkReverse = (value: Expected): Actual => value