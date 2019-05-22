
import './hello-world-button.css';

class HelloWorldButton
{
 render(){
    const button=document.createElement('button');
    button.innerHTML='Hello World';
    button.classList.add('hello-world-button');
    button.onclick=function(){
        alert('button click');
    }
    const body=document.querySelector('body');
    body.appendChild(button);
}
}

export default HelloWorldButton;