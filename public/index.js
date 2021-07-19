/*window.addEventListener('load',() =>{
    registerSW();
});

async function registerSW(){
    if('serviceWorker' in navigator){
        try {
            await navigator.serviceWorker.register('./sw.js')
        }
        catch (e) {
            console.log('Sw registeration failed');
        }
    }
}*/
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("sw.js")
        .then(() => console.log("registered service worker!"));
}