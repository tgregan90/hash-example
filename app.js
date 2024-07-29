(function(){
    const tabs = Array.from(document.querySelectorAll(".tab-item"));
    const modals = Array.from(document.querySelectorAll(".modal"));
    
    tabs.forEach(tab => {
        tab.addEventListener("click",(e)=>{
            hideAndShow(tab,tabs);
            const targetID = tab.dataset.name;
            const targetElement = document.getElementById(targetID);
            hideAndShow(targetElement,modals)
        })
    });

    function hideAndShow(target,arrayOfNodes){
        arrayOfNodes.forEach(nodeInstance => {
            nodeInstance.classList.remove("selected");
        });
        target.classList.add("selected");
    }

    const hash = window.location.hash.substring(1);
    let targetTab = "";
    Array.from(document.querySelectorAll(".tab-item")).forEach(tab => {
        if(tab.dataset.name === hash){
            targetTab = tab;
        }
    });
    const idNode = document.getElementById(hash);
    if(hash){
        const target = document.querySelector(hash);
        hideAndShow(targetTab,tabs);
        hideAndShow(idNode,modals);
    }
})()