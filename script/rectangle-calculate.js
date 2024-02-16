function calculateRectangleArea(){
   const lenghtInput = document.getElementById('rectangle-base');
   const lenghtText = lenghtInput.value;
   const length = parseFloat(lenghtText);
   console.log(length);

   const widthInput = document.getElementById('rectangle-height');
   const widthText = widthInput.value;
   const width = parseFloat(widthText);
   console.log(width);

   const area = length * width;
   console.log(area);

   const rectangleAreaSpan = document.getElementById('rectangle-area');
   rectangleAreaSpan.innerText = area;
}