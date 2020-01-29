// Write your solution in this file!
const driver = {}

const updateDriverWithKeyAndValue = (driver, key, value) => {
//new driver, update val, key
return Object.assign({}, {[key]: value}, driver)
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
//mutate driver
driver[key] = value
return driver
}

const deleteFromDriverByKey = (driver, key) => {
//do not mutate driver
const obj = Object.assign({}, driver)

if (obj[key]) {
  delete obj[key]
}
return obj
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
//mutate driver
delete driver[key]
return driver
}