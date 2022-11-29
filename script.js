// TODO: add code here
window.addEventListener('load', function(){
   const fetchData = async() =>{
    const response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json'); 
    const data = await response.json();
        console.log(data);
        
            const container = document.getElementById("container");
            let astronautData= "";
            for (let astronaut of data) {
                astronautData =+ `<div class = "astronaut>
                <div class = "bio".
                <h3>${astronaut.firstName} ${astronaut.lastName}<h3>
                <h5> Hours In Space: ${astronaut.HoursInSpace}<h5>
                <h5> Active: ${astronaut.Active}<h5>
                <h5>Skills: ${astronaut.skills.join (',')}<h5>
                </div> <img class = "avatar" src= "${astronaut.picture}">
                </div>`;
            }
            container.innerHTML += astronautData;
        }
        fetchData();
        });
    