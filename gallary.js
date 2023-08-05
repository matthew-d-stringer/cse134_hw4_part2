function init() {
    let localBtn = document.getElementById("localBtn");
    let remoteBtn = document.getElementById("remoteBtn");

    document.getElementById("clearBtn").addEventListener("click", function() {
        document.getElementById('flex-cont').innerHTML = "";
    });

    localBtn.addEventListener("click", function () {
        loadLocal();
    });
    
    remoteBtn.addEventListener("click", function () {
        loadRemote();
    });

    loadLocal();
}

function loadLocal() {
    let container = document.getElementById('flex-cont');
    let data;
    try {
        data = JSON.parse(localStorage.getItem("projects"));
    }catch(error) {
        container.innerHTML = "Local Storage is empty!";
        return;
    }

    container.innerHTML = "";
    for(project of data) {
        let proj = document.createElement("project-card");
        proj.setAttribute("img-src", project.imgSrc);
        proj.setAttribute("img-alt", project.imgAlt);
        proj.setAttribute("read-more", project.readMore);
        proj.innerHTML = `
            <span slot="p-name">${project.name}</span>
            <span slot="p-desc">${project.desc}</span>
        `;

        container.appendChild(proj);
    }
}

function loadRemote() {
    let container = document.getElementById('flex-cont');
    container.innerHTML = "Loading ...";
    returnData()
    .then(data => {
        window.localStorage.setItem("projects", JSON.stringify(data));
        container.innerHTML = "";
        for(project of data) {
            let proj = document.createElement("project-card");
            proj.setAttribute("img-src", project.imgSrc);
            proj.setAttribute("img-alt", project.imgAlt);
            proj.setAttribute("read-more", project.readMore);
            proj.innerHTML = `
                <span slot="p-name">${project.name}</span>
                <span slot="p-desc">${project.desc}</span>
            `;

            container.appendChild(proj);
        }
    });
}

async function returnData() {
    try {
        const res = await fetch(
            "https://my-json-server.typicode.com/matthew-d-stringer/cse134_hw4_part2/projects",
            {
                method: "GET",
                redirect: "error"
            }
        );
        if(res.status != 200) throw new Error("Request status not 200!");
        return res.json();
    }catch(error) {
        console.error(`Error: ${error.message}`);
    }
}

window.addEventListener("DOMContentLoaded", init);