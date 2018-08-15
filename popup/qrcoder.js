{
    function logTabs(tabs) {
        let tab = tabs[0]; // Safe to assume there will only be one result
        console.log(tab.url);

        let qr = document.getElementById("qr");
        qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+encodeURI(tab.url);
    }
    
    function onError(err){
        console.error(err);
    }
    
    browser.tabs.query({currentWindow: true, active: true}).then(logTabs, onError);


}