var theArray=[];

function forLoop(theArray) {
  for (var i=0;i<25;i++) {
  theArray.push('I am ${i} strange loop${i===0 ? "":"s"}.')
  }
  return theArray;
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
  return 'done'
}

function doWhileLoop(theArray) {
  do {
    theArray.pop();
  } while (maybeTrue() && theArray.length>0)
  return theArray
}

function maybeTrue() {
  return Math.random() >= 0.5
}
