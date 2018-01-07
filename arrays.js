var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
<<<<<<< HEAD
  array.unshift(element)
  return array
=======
  return [array.unshift(element)]
>>>>>>> c9b736a2b443a69e9376b96947c8295d5e524839
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
<<<<<<< HEAD
  array.push(element)
  return array
=======
  return [array.push(element)]
>>>>>>> c9b736a2b443a69e9376b96947c8295d5e524839
}

function accessElementInArray (array, index) {
  return (array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
<<<<<<< HEAD
  array.shift()
  return array
=======
  return array.shift()
>>>>>>> c9b736a2b443a69e9376b96947c8295d5e524839
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
<<<<<<< HEAD
  array.pop()
  return array
=======
  return array.pop()
>>>>>>> c9b736a2b443a69e9376b96947c8295d5e524839
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}