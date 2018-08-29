var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

addElementToBeginningOfArray(array, element){
  newArray = [element, ...array]
  return newArray
}

destrctivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}