function sleepIn(weekday, vacation) {
  if(weekday===true || vacation ===true) {
    return true
  }
  else if (weekday===true || vacation === false) {
    return false
  }
  else if (weekday===false || vacation === true) {

    return true
  }
  else {

    return true
  }
}

function monkeyTrouble(aSmile, bSmile) {

  if(aSmile === true && bSmile === true) {

    return true
  }
  else if (aSmile === false && bSmile === false) {

    return true
  }
  else {

    return false
  }

}

function stringTimes(str,n) {

  var org=""
  for (i=1;i<=n;i++) {

    org=org+str
  }
  return org
}
