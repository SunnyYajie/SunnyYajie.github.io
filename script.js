/* ========================== Profession/Description Animation In Home Page ========================== */
var typed = new Typed(".profession",{
    strings:["" ,"Programmer","Web Designer", "Student", "Gamer"],
    typeSpeed: 90,
    BackSpeed: 30,
    loop: true})

/* ========================== Tab Function In About Section ========================== */
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/* ========================== Tab Function In Portfolio Section ========================== */
var tablinks2 = document.getElementsByClassName("tab-links2");
var tabcontents2 = document.getElementsByClassName("tab-contents2");

function opentab2(tabname){
    for(tablink of tablinks2){
        tablink.classList.remove("active-link2");
    }
    for(tabcontent of tabcontents2){
        tabcontent.classList.remove("active-tab2");
    }
    event.currentTarget.classList.add("active-link2");
    document.getElementById(tabname).classList.add("active-tab2");
}

/* ========================== Carousel In Achievements Tab Located In Portfolio Section ========================== */
const track = document.getElementById("slider");

const handleOnDown = (e) => 
    track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = (e) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth;

    if (!isNaN(mouseDelta) && !isNaN(maxDelta)) {
        const percentage = (mouseDelta / maxDelta) * -100;
        const prevPercentage = parseFloat(track.dataset.prevPercentage) || 0;
        const nextPercentageUnconstrained = prevPercentage + percentage;
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -70);

        track.dataset.percentage = nextPercentage;

        track.animate(
            { transform: `translateX(${nextPercentage}%)` },
            { duration: 1200, fill: "forwards" }
        );
    }
}

window.onmousedown = (e) => handleOnDown(e);

window.ontouchstart = (e) => handleOnDown(e.touches[0]);

window.onmouseup = (e) => handleOnUp(e);

window.ontouchend = (e) => handleOnUp(e.touches[0]);

window.onmousemove = (e) => handleOnMove(e);

window.ontouchmove = (e) => handleOnMove(e.touches[0]);

/* ========================== Side Menu Script From Small Screen ========================== */
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}