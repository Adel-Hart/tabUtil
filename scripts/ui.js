


async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions, function (tabs){
        alert(tabs[0]);
    });

    return tab;
};


document.addEventListener('DOMContentLoaded', () => { //요소가 로딩 덜 될수 있어서 하는 것

    const btn_saveTabs = document.getElementById('btn_saveTabs');

    



    const div_saveTabs = document.getElementById('div_saveTabs');


    btn_saveTabs.addEventListener('mousedown', () => {

        chrome.tabs.query({}, (tabs) =>{

            alert(tabs[0].title);
        });

        
    });




    // btn_saveTabs.addEventListener('mouseover', () => {

    //     btn_saveTabs.style.animation = "concealMotherBtn 0.5s forwards"        

    // });

    // btn_saveTabs.addEventListener('mouseout', () => {


    //     btn_saveTabs.style.animation = ""

    // });



});

