window.addEventListener("load", checkInternetConnection);

function checkInternetConnection(){
    const statusText = document.getElementById("statusText");
    const ipaddress = document.getElementById("ipaddressText");
    const natwokertxt = document.getElementById("networkText");

    statusText.textContent ="checking...";


    if(navigator.onLine){
          fetch('https://api.ipify.org/?format=json').then((Response)=>Response.json())
         .then((data)=>{
            ipaddress.textContent = data.ip;
            statusText.textContent = "connected";
            
           const netspeed = connection?connection.downlink+"mbps" :"unkown";
           natwokertxt.textContent = netspeed;

         })
        }
    else{
        statusText.textContent="disconnected";
        ipaddress.textContent ="-";
        natwokertxt.textContent="-";
    }

}