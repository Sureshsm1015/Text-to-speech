let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");


function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    console.log("Available voices:", voices); 
    voiceSelect.innerHTML = ""; 

    voices.forEach((voice, i) => {
        const option = document.createElement("option");
        option.textContent = voice.name;
        option.setAttribute("value", i);
        voiceSelect.appendChild(option);
    });
}


window.speechSynthesis.onvoiceschanged = populateVoiceList;


voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

           //Event listener for button click to start speaking
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    console.log("Text to speak:", speech.text); 
    window.speechSynthesis.speak(speech);
});










// let speech = new SpeechSynthesisUtterance();
// let voices = [];
// let voiceSelect = document.querySelector("select");

// // Function to populate the dropdown menu with available voices
// function populateVoiceList() {
//     voices = window.speechSynthesis.getVoices();
//     voiceSelect.innerHTML = ""; // Clear the existing options

//     voices.forEach((voice, i) => {
//         const option = document.createElement("option");
//         option.textContent = voice.name;
//         option.setAttribute("value", i);
//         voiceSelect.appendChild(option);
//     });
// }

// // Trigger the population of voice list when voices are changed
// window.speechSynthesis.onvoiceschanged = populateVoiceList;

// // Event listener for voice selection change
// voiceSelect.addEventListener("change", () => {
//     speech.voice = voices[voiceSelect.value];
// });

// // Event listener for button click to start speaking
// document.querySelector("button").addEventListener("click", () => {
//     speech.text = document.querySelector("#textInput").textContent;
//     window.speechSynthesis.speak(speech);
// });

