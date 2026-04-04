// For Active Nav Links
function setActive(elem) {
      document.querySelectorAll('a').forEach(f => f.classList.remove('active'));
      elem.classList.add('active');
    }
  // Careers List In Home section
  let careersdetail= document.querySelector(".careers-details");
  let careers = ["Web Developer" , "Programmar" , "Content writter"];
  let careerindex= 0;
  let characterindex= 0;
  updatecareers();
  function updatecareers(){
    characterindex++;
    careersdetail.innerHTML=`
    <p>and I'm a <span>${careers[careerindex].slice(0,characterindex)}</span>.</p>
    `;
    if(characterindex === careers[careerindex].length){
      careerindex++;
      characterindex = 0;
    }
    if(careerindex === careers.length){
      careerindex = 0;
    }
    setTimeout(updatecareers,300);
  }