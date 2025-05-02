function changeText() {
    const textElement = document.getElementById("dynamicText");
    textElement.textContent = "Text Changed with JavaScript!";
  }
  
  function toggleStyle() {
    const textElement = document.getElementById("dynamicText");
    textElement.classList.toggle(".highlight");
  }
  
  function addRemoveElement() {
    const container = document.getElementById("container");
    const existing = document.getElementById("newElement");
  
    if (existing) {
      container.removeChild(existing);
    } else {
      const newEl = document.createElement("p");
      newEl.id = "newElement";
      newEl.textContent = "This is an added element.";
      container.appendChild(newEl);
    }
  }
  