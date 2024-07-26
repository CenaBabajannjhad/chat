let input = document.getElementById("input");
let sendButton = document.getElementById("send");
let chatContainer = document.querySelector(".chat-container");
// when it was true , meaning i typing , and when it was false , meaning my friend typing
let whoTyping = true;

// return input value
let getInputValue = () => input.value;
// reset input field
let resetInputValue = () => {
  input.value = "";
};
// add event when clicked button
sendButton.addEventListener("click", () => {
  // get input value
  let inputValue = getInputValue();
  // chat context
  let ChatContext = `<div class="${whoTyping ? "me" : "friend"}">
                        <h3>${inputValue}</h3>
                    </div>`;
  //append chat in chatContainer
  chatContainer.insertAdjacentHTML("beforeend", ChatContext);
  // reset input value
  resetInputValue();
});

// add event when enter keyboard pressed
window.addEventListener("keypress", (Event) => {
  // if enter key presed
  if (Event.key === "Enter") {
    // get input value
    let inputValue = getInputValue();
    // chat context
    let ChatContext = `<div class="${whoTyping ? "me" : "friend"}">
                        <h3>${inputValue}</h3>
                      </div>`;
    //append chat in chatContainer
    chatContainer.insertAdjacentHTML("beforeend", ChatContext);
    // reset input value
    resetInputValue();
  }
});
