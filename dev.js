
window.addEventListener('load', (event) => {
  let load = false
//   repeat if dom not render
  var count = 0
  function repeat(){
    setTimeout(function(){
      
      if(document.querySelector('.rc-widget select') == null){
        count ++
//      if rc-widget is not in page it will run off after 6s.
        if(count < 60){
        	repeat()
        }
      }else {
//         When dom render
        document.querySelector('.rc-container').style.display = 'none'
        load = true
        
//         run code after rendering dom
        runMain()
      }
      count ++
    }, 120)
  }
  repeat()

  function runMain(){
      if(load){
      		// Define Your Selected Element
            let selectElem = document.querySelector('#SingleOptionSelector-0');
            // Define Your Targeted Element
            let trgElement =  document.querySelector('.rc-widget select');
			document.querySelector('.rc-widget select').selectedIndex = selectElem.selectedIndex
             // Make event
            console.log("paiche")

             selectElem.addEventListener('change', () => {
                  // Get your selected item index
                  var index = selectElem.selectedIndex;
                  // Change your targeted element value
                  for(var i = 0; i < selectElem.length ; i++){
                      selectElem[i].removeAttribute('selected')
                      trgElement[i].removeAttribute('selected')
                  }
                  selectElem[index].setAttribute('selected', "selected")
                  trgElement[index].setAttribute('selected', "selected")
                  trgElement.value = trgElement[index].value
             });
    	}
  }
  
});
