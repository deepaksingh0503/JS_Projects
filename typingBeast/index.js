let textData = [
  "in a quaint little town nestled amidst rolling hills, there lay an ancient oak tree with a secret. legend had it that within its hollow trunk rested a key that could unlock unimaginable treasures. generations sought it, but it remained elusive until a curious child stumbled upon it while chasing fireflies. ignorant of its significance, the child tossed it aside, unaware of the dreams it could fulfill and the mysteries it could solve. the key lay forgotten, as did the secrets it held, buried beneath the roots of the old oak tree",

  "in the heart of bustling city streets, amidst the cacophony of everyday life, there bloomed a love as quiet as a whisper. two souls, strangers until fate intervened, found solace in each other’s company. their love story was woven through stolen glances, shy smiles, and tender moments shared under the moonlit sky. but like all beautiful things, their love faced challenges – distance, doubt, and the passage of time. yet, against all odds, their love endured, echoing through the bustling streets as a testament to the power of true love",

  "in a world ravaged by greed and neglect, where concrete jungles replaced lush forests, a lone seed held the promise of renewal. it was the last of its kind, preserved by those who remembered the beauty of nature. with tender care, they planted it in the barren soil, hoping against hope for a miracle. days turned into weeks, and weeks into months, until finally, a tiny green shoot emerged, defying the odds. it was a symbol of hope, a reminder that even in the darkest of times, life finds a way to persevere",

  "within the hallowed halls of an ancient library, books whispered secrets of bygone eras and lost civilizations. each dusty tome held the key to unlocking worlds unknown, inviting readers on a journey through time and space. but amidst the whispers of forgotten lore, there was one book that remained silent, its pages untouched for centuries. scholars speculated about its contents, but none dared to open it, fearing the power it might unleash. and so, it sat upon the shelves, a mystery waiting to be unraveled by the brave of heart",

  "in a tiny attic studio, bathed in the soft glow of candlelight, a painter sat with his brush poised before a blank canvas. he longed for inspiration, for a muse to ignite his creativity and breathe life into his art. days turned into nights as he waited, searching for that elusive spark. and then, one fateful evening, she appeared – a vision of beauty and grace, with eyes that held the wisdom of the ages. with each stroke of his brush, he captured her essence, weaving her likeness into a masterpiece that would transcend time itself",

  "In a secluded corner of the countryside, a hidden garden bloomed with vibrant colors and fragrant blooms. Tucked away from prying eyes, it thrived in solitude, a sanctuary for nature's wonders. Lush foliage cascaded over ancient stone walls, while butterflies danced among the flowers, their delicate wings a kaleidoscope of hues. Amidst the tranquility, whispers of magic lingered, weaving tales of forgotten enchantments and untold mysteries  Tucked away from prying eyes, it thrived in solitude, a sanctuary for nature's wonders",

  "Along the banks of a winding river, the soothing melody of flowing water echoed through the air. Trees swayed gently in the breeze, their leaves rustling in harmony with nature's symphony. Sunlight danced upon the rippling surface, casting shimmering reflections upon the water's edge. As day turned to night, the river's song grew softer, a lullaby for the weary soul, soothing away the cares of the day  Tucked away from prying eyes, it thrived in solitude, a sanctuary for nature's wonders  Tucked away from",

  "In a sunlit studio, an artist stood before an easel, brush in hand, capturing the essence of beauty upon canvas. With each stroke, colors danced and swirls of paint took shape, bringing to life visions of distant lands and forgotten dreams. Time seemed to stand still as the artist lost themselves in the act of creation, their soul pouring forth upon the blank expanse before them  Tucked away from prying eyes, it thrived in solitude, a sanctuary for nature's wonders Tucked away from prying eyes, it thrived in solitude, a sanctuary",

  "High atop a majestic peak, the mountain's rugged silhouette loomed against the sky, a silent sentinel standing guard over the land below. Snow-capped peaks glistened in the sunlight, while valleys stretched out in a patchwork of green and gold. Here, amidst the grandeur of nature's embrace, one could find solace and peace, a sanctuary from the chaos of the world below  Tucked away from prying eyes, it thrived in solitude, a sanctuary for nature's wonders  Tucked away from prying eyes, it thrived in solitude, a sanctuary for nature's wonders",

  "Across vast plains and rolling hills, the whispering winds carried secrets untold, their soft breath a gentle caress upon the land. Blades of grass swayed in rhythm with their song, while clouds drifted lazily across the endless expanse of sky. In the distance, the faint cry of a lone bird echoed through the air, a reminder of the beauty and wonder that surrounded them  Tucked away from prying eyes, it thrived in solitude, a sanctuary for nature's wonders Tucked away from prying eyes, it thrived in solitude, a sanctuary for nature's wonders"
];

let textContainer = document.getElementById("textContainer");
let inputText = document.getElementById("inputText");
let wordPerMin = document.getElementById("wordPerMin");
let timer = document.getElementById("timer");
let started = false;
let correctWordCount= 0;
let time = 60;
let currentIndex = 0;
let intervalId=undefined;
timer.innerText = `${time}`;
wordPerMin.innerText = `${currentIndex}`;
let wordData = [];

const  calculateTypingSpeed = (wordsTyped, timeTakenInSeconds)=> {
    const timeTakenInMinutes = timeTakenInSeconds / 60;
    const wordsPerMinute = (wordsTyped / timeTakenInMinutes).toFixed(2); 
    return wordsPerMinute;
}



const stopCounter = ()=>{
    clearInterval(intervalId);
}


const startCounter = ()=>{
    intervalId =  setInterval(() => {
        time--;
        timer.innerText = `${time}`;
        if(time!=0){
            wordPerMin.innerText = `${calculateTypingSpeed(correctWordCount,61-time)}`;
        }
        if(time<=0){
            stopCounter();
            inputText.value="";
            inputText.disabled=true;
        }
      }, 1000);
}


for (let i = 0; i < textData.length; i++) {
  let data = textData[i].split(" ");
  wordData.push(data);
}
let randomNum = Math.ceil(Math.random() * textData.length) - 1;

const refreshText = () => {
  textContainer.innerHTML = "";
  inputText.focus();
  randomNum = Math.ceil(Math.random() * textData.length) - 1;
  for (let i = 0; i < wordData[randomNum].length; i++) {
    let newHtml = `<span class="px-1 rounded-md" id="text${i}">${wordData[randomNum][i]}</span>`;
    textContainer.innerHTML = textContainer.innerHTML + newHtml;
  }
  currentIndex = 0;
  time=60;
  inputText.disabled=false;
  wordPerMin.innerText="0";
timer.innerText = `${time}`;
  clearInterval(intervalId);
  inputText.value="";
  correctWordCount=0;
  document.getElementById(`text${currentIndex}`).style.backgroundColor = "gray";
};

const textFieldChanged = (e) => {
  const mainString = wordData[randomNum][currentIndex];
  const substring = inputText.value.trim();
    if(!started){
        startCounter();
        started=true;
    }
  
  if (mainString.indexOf(substring) != 0 ) {
    let textSpan = document.getElementById(`text${currentIndex}`);
    textSpan.style.backgroundColor = "red";
  } else {
    let textSpan = document.getElementById(`text${currentIndex}`);
    textSpan.style.backgroundColor = "gray";
  }
 
};
inputText.addEventListener("input", (e) => {
  textFieldChanged(e);
 
});
inputText.addEventListener("keydown", (e) => {
  if (e.keyCode == 32) {
    let substring = inputText.value.trim();
    let textSpan = document.getElementById(`text${currentIndex}`);
    let mainString = wordData[randomNum][currentIndex];
    if (substring == 0) {
      return;
    }
    if (mainString == substring) {
      textSpan.style.backgroundColor = "green";
      inputText.value = "";
      correctWordCount++;
      currentIndex++;
    } else {
      textSpan.style.backgroundColor = "red";
      inputText.value = "";
      currentIndex++;
    }
  }
});

refreshText();
