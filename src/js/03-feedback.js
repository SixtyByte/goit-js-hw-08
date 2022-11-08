import throttle from 'lodash.throttle';
const formItem = document.querySelector(".feedback-form");
const key="feedback-form-state";
formItem.addEventListener(`submit`,submitClick)
formItem.addEventListener("input",throttle(handleInput,500));
saveInputText();

function handleInput(event){
    const {
        elements: { email, message }
      } = formItem;
const result={email:email.value, message:message.value}


  localStorage.setItem(key,JSON.stringify(result));}
 
  function submitClick(event){
    event.preventDefault(event);
    if(localStorage.getItem(key)){console.log(JSON.parse(localStorage.getItem(key)));
    event.currentTarget.reset();
localStorage.removeItem(key) }
    }  




function saveInputText(){
    if(!JSON.parse(localStorage.getItem(key)))
    {return
    };
if (JSON.parse(localStorage.getItem(key)).email){formItem.email.value=JSON.parse(localStorage.getItem(key)).email;};
if (JSON.parse(localStorage.getItem(key)).message){formItem.message.value=JSON.parse(localStorage.getItem(key)).message;};
}
