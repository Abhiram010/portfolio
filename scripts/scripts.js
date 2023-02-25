// navbar
var items = document.getElementById("items");
var closer = document.getElementById("closer");
var toggler = document.getElementById("toggler");
alertNavbar();
liClickEvent();
function liClickEvent(){
if (window.innerWidth < 560) {
        closerAnimation();
        }
        else{
         closerAnimationRemover()
        }
}
window.addEventListener("resize", () => {
     liClickEvent()
    alertNavbar();
});

function alertNavbar() {
    let windowWidth = window.innerWidth;

    if (windowWidth < 550) {
        navbarResize();
    } else {
        navbarReset();
    }
}

function navbarResize() {
    console.log("navbar resized");
    // setting up default styles for items
    items.style.display = "none";
    // displaying button
    toggler.style.display = "block";
    items.style.transition = "smooth";
}
toggler.addEventListener("click", () => {
    items.style.display = "flex";
    items.style.flexDirection = "column";
    items.style.justifyContent = "flex-start";
    items.style.position = "fixed";
    items.classList = "animateOpenSide";
    items.style.height = "100vh";
    items.style.width = "100vw";
    items.style.background = "#222831";
    items.style.top = "0";
    items.style.paddingTop = "100px";

    closer.style.display = "block";

    items.style.transition = "smooth";
});

function navbarReset() {
    toggler.style.display = "none";
    closer.style.display = "none";
    items.style.flexDirection = "row";
    items.style.justifyContent = "space-around";
    items.style.paddingTop = "0";

    items.style.display = "flex";
    items.style.position = "static";
    items.style.height = "auto";
    items.style.width = "auto";
    items.style.background = "none";
    items.style.transition = "smooth";
}

function closerAnimation() {
    let itemsLi = document.getElementById("items").querySelectorAll('li');
    for (let ii = 0; ii < itemsLi.length; ii++) {
        console.log("deployed", window.innerWidth)
        itemsLi[ii].addEventListener('click', clickClearNavbar)
   }
}
function closerAnimationRemover() {
    let itemsLi = document.getElementById("items").querySelectorAll('li');
    for (let ii = 0; ii < itemsLi.length; ii++) {
        console.log("deployed", window.innerWidth)
        itemsLi[ii].removeEventListener("click", clickClearNavbar);
   }
}
function clickClearNavbar(){
     var closer = document.getElementById("closer");
     closer.click()
 }


closer.addEventListener("click", () => {
    items.classList.remove("animateOpenSide");
    items.classList = "animateCloseSide";
    items.style.transition = "smooth";
    items.style.transitionDuration = "100";
    items.style.marginTop = "0";

    setTimeout(() => {
        items.style.display = "none";
    }, 2000);
});

// navbar end

let projectView = document.getElementsByClassName("projectView");
for (let a = 0; a < projectView.length; a++) {
    projectView[a].addEventListener("click", (e) => {
        console.log("hey", projectView[a].parentElement.parentElement.parentElement.id);
        e.preventDefault();
        previewProject(projectView[a].parentElement.parentElement.parentElement.id);
    });
}

function previewProject(projectSelected) {
    console.log(projectSelected);
    let projects = {
        gmritProject: {
            name: "GMRIT Insitute of Technology, Website",
            images: [
                "./images/projects/gmrit/gmritHome.png",
                "./images/projects/gmrit/gmritDept.png",
                "./images/projects/gmrit/gmritPlace.png",
                "./images/projects/gmrit/gmritStatic.png",
                "./images/projects/gmrit/gmritFac.png",
            ],
            desc: "Revamped GMRIT's official website to improve user experience and developed 10+ new services  We are a team of 4, contributed to project by developing the Department module, Grievance cell, other portals and Front-end.  Implemented using PHP, MySQL, Bootstrap. Number of visits: 2,00,000+",
            link: "gmrit.edu.in",
        },
        cseProject: {
            name: "Digitization of Department Services",
            images: [
                "./images/projects/csedept/cseHome.png",
                "./images/projects/csedept/cseLanding.png",
                "./images/projects/csedept/cseProf.png",
                "./images/projects/csedept/cseStudent.png",
                "./images/projects/csedept/cseStudentprofe.png",
            ],
            desc: "To Digitalize the manual services in the department, our team developed 8+ modules. Our main modules are Monthly Information System, Placement Cell, Library Management System, Professional and Open elective modules, Assignment Module, and Attendance Management System. Contributed to project by developing Professional electives, Open Electives Modules and Attendance Management System. The project is implemented using HTML, CSS,Bootstrap 5, PHP and MySQL. Number of Hits: 3000+ ",
            link: "csegmrit.live",
        },
        acmProject: {
            name: "ACM GMRIT Website",
            images: [
                "./images/projects/acm/acmHome.png",
                "./images/projects/acm/acmAbout.png",
                "./images/projects/acm/acmMem.png",
            ],
            desc: "Developed website for ACM GMRIT and built applications like Form Generation, Hackathon score validation, dashboard, and ACM Blog with a Content management system. Number of Hits: 2000+",
            link: "csegmrit.live",
        },
    };
    if (projects[projectSelected] != undefined) {
        let ourProject = projects[projectSelected];
        let projectPrompt = document.getElementsByClassName("projectPrompt")[0];
        let allImages = document.getElementById("allProjectImages");
        allImages.innerHTML = '';
        console.log(allImages)
        // dom manuplation
        document.getElementById("projectTitle").innerText = ourProject.name;
        console.log(ourProject.images[0]);

        document.getElementById("ProjectlandingImage").src = ourProject.images[0];
        document.getElementById("projectDesc").innerText = ourProject.desc;

        for (let pic = 0; pic < ourProject.images.length; pic++) {
            let imgCode = document.createElement("img");
            let aLink = document.createElement('a');
            aLink.setAttribute("data-lightbox", ourProject.name.trim());
            aLink.setAttribute("href", ourProject.images[pic]);
            imgCode.setAttribute("src", ourProject.images[pic]);
            aLink.appendChild(imgCode)
            imgCode.setAttribute("class", "projectOtherPics");

            allImages.appendChild(aLink);
        }
        // end of dom
        projectPrompt.style.display = "block";
        projectPrompt.classList.add("animateOpenProject");
    }
}
document.getElementById("submitBtn").addEventListener("click", (e) => {
    e.preventDefault();
    sendContact(e);
});

document.getElementById("closeProjectPrompt").addEventListener("click", (e) => {
    let projectPrompt = document.getElementsByClassName("projectPrompt")[0];
    e.preventDefault();
    console.log("in");
    projectPrompt.classList.add("animateCloseProject");
    setTimeout(() => {
        projectPrompt.classList.remove("animateCloseProject");
        projectPrompt.style.display = "none";
    }, 900);
    projectPrompt.classList.add("closeProject");
});
async function sendContact(e) {
    e.preventDefault();

    const messagename = document.getElementById("messageName").value;
    const messageEmail = document.getElementById("messageEmail").value;
    const messageItself = document.getElementById("messageItself").value;

    const webhookBody = {
        embeds: [{
            title: "New Message",
            fields: [{
                    name: "Sender",
                    value: messagename
                },
                {
                    name: "SenderMail",
                    value: messageEmail
                },
                {
                    name: "Message",
                    value: messageItself
                },
            ],
        }, ],
    };

    const webhookUrl =
        "https://discordapp.com/api/webhooks/1077578139074560040/IcaK5nNdKN6bqKzhTqVcUiWOeICtjGdlXs5AyLp-0FzS3-ny1Y3qrqRfXa3oHsyNIC59";

    const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
        // alert("I have received your message!");
        let messagePrompt = document.getElementById("messagePrompt");
        messagePrompt.style.display = "flex";
        let body = document.querySelector('body');
        body.classList.add("blockScroll");
    } else {
        alert("There was an error! Try again later!");
    }
}
let promptBtn = document.getElementById("promptBtn");
promptBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let messagePrompt = document.getElementById("messagePrompt");
    messagePrompt.style.display = "none";
    let body = document.querySelector("body");
    body.classList.remove("blockScroll");
})
