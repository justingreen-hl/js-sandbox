// Not ideal - side effects
let sessionState = 'ACTIVE';

const sessionIsActive = (lastLogin, expirationDate) => {
  if(lastLogin > expirationDate) {
    // sessionState gets mutated (FP avoids this)
    sessionState = 'EXPIRED';
    return false;
  }
  return true;
}

const expirationDate = new Date(2020, 10, 01);
const currentDate = new Date();
const isActive = sessionIsActive(currentDate, expirationDate);

if(!isActive && sessionState === 'ACTIVE') {
  logout();
}

// Better implementation - uses newState to check sessionState 
let sessionState = 'ACTIVE';

function sessionIsActive(lastLogin, expirationDate) {
  if(lastLogin > expirationDate) {
    return false;
  }
  return true;
}

function getSessionState(currentState, isActive) {
  if(currentState === 'ACTIVE' && !isActive) {
    return 'EXPIRED'
  }
  return currentState
}

const expirationDate = new Date(2020, 10, 01);
const currentDate = new Date();
const isActive = sessionIsActive(currentDate, expirationDate);
const newState = getSessionState(sessionState, isActive);

// Now this function will only logout when necessary
if(!isActive && sessionState === 'ACTIVE') {
  logout();
}