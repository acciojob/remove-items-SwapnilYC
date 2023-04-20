const myFun = () => {
  let removeElId = selectEl.value;
  console.log(removeElId);
  let elementToBeRemoved = document.getElementById(removeElId);
  console.log(elementToBeRemoved);
  elementToBeRemoved.remove();
}