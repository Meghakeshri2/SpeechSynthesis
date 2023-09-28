const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const option = document.querySelectorAll('[type ="range"],[name="text"]');
const speekbutton = document.querySelector('#speak');
const stopbutton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;;
function populatevoices(){
    voices=this.getVoices();
    voicesDropdown.innerHTML = voices
   .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}
function setVoice(){
msg.voice = voices.find(voice => voice.name === this.value);
toggle();
}

function toggle(startOver=true){
    speechSynthesis.cancel();
    if(startOver){
        speechSynthesis.speak(msg);
    }
    
}
function setOption() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
  }

speechSynthesis.addEventListener('voiceschanged',populatevoices);
voicesDropdown.addEventListener('change',setVoice);
option.forEach(option => option.addEventListener('change', setOption));
speekbutton.addEventListener('click', toggle);
stopbutton.addEventListener('click', () => toggle(false));