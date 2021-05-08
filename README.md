# ts-enum-helpers

A small collection of utility methods to help parse typescript enums into objects, keys and values.

# Installation

Install using yarn or npm

```
yarn add ts-enum-helpers
npm install ts-enum-helpers --save
```

# Methods

Given the following enums:

```typescript
enum StringEnum {
    ONE = "one",
    TWO = "two",
    THREE = "three"
}

enum NumberEnum {
    ONE,
    TWO,
    THREE
}
```

`parseEnum` - convert an enum to an object

```typescript
import {parseEnum} from "ts-enum-helpers"

const stringEnum = parseEnum(StringEnum);
const numericEnum = parseEnum(NumberEnum);

console.log(stringEnum)
console.log(numericEnum)

> {"ONE": "one", "TWO": "two", "THREE": "three"}
> {"ONE": 0, "TWO": 1, "THREE": 2}
```

`getEnumNames` - convert an enum to an array of its keys

```typescript
import {getEnumNames} from "ts-enum-helpers"

const stringEnum = getEnumNames(StringEnum);
const numericEnum = getEnumNames(NumberEnum);

console.log(stringEnum)
console.log(numericEnum)

> ["ONE", "TWO", "THREE"]
> ["ONE", "TWO", "THREE"]
```

`getEnumValues` - convert an enum to an array of its values

```typescript
import {getEnumValues} from "ts-enum-helpers"

const stringEnum = getEnumValues(StringEnum);
const numericEnum = getEnumValues(NumberEnum);

console.log(stringEnum)
console.log(numericEnum)

> ["one", "two", "three"]
> [0, 1, 2]
```

`getEnumNamesAndValues` - convert an enum to an array of `({name: string, value: T extends (number | string)})`

```typescript
import {getEnumNamesAndValues} from "ts-enum-helpers"

const stringEnum = getEnumNamesAndValues(StringEnum);
const numericEnum = getEnumNamesAndValues(NumberEnum);

console.log(stringEnum)
console.log(numericEnum)

> [
    {"name": "ONE", "value": "one"}, 
    {"name": "TWO", "value": "two"}, 
    {"name": "THREE", "value": "three"}
  ]

> [
    {"name": "ONE", "value": 0}, 
    {"name": "TWO", "value": 1}, 
    {"name": "THREE", "value": 2}
  ]
```
