let nbStudents = 27;
let element = (
  <div>
<h1>Welcome to WM1</h1>
<p>We are tired after the midterms.</p>
<p>We have {nbStudents} students.</p>
</div>
);
console.log(element);
ReactDOM.render(element,
   document.getElementById("root"));