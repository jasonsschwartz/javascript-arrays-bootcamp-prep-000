var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

addElementToBeginningOfArray(array, element){
  newArray = [element, ...array]
  return newArray
}

destrctivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

addElementToEndOfArray(array, element){
  newArray = [...array, element]
  return newArray
}

destrctivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

accessElementInArray(array, element){
  return array[element]
}

destrctivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

removeElementFromBeginningOfArray(array){
 newArray = array.slice(1)
  return newArray
}

destrctivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}