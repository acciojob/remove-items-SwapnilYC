const myFun = () => {
   let selectEl = document.getElementById('colorSelect');
      let removeElId = selectEl.value;
      console.log(removeElId);
      let elementToBeRemoved = document.getElementById(removeElId);
      console.log(elementToBeRemoved);
      elementToBeRemoved.remove();
}