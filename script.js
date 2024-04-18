// Task 1: Select the paragraph element with the id paragraph and change its content to "Hello World".
document.getElementById("paragraph").textContent = "Hello World";

// Task 2: Using JavaScript, create an image element with the source attribute set to "image.jpg".
var imgElement = document.createElement("img");
imgElement.src = "image.jpg";

// Task 3: Append the created image element to the div element with the id imageContainer.
document.getElementById("imageContainer").appendChild(imgElement);