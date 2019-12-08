// Note JS stands for JavaScript

let map;
// names the variable "map" for use in our function        
document.addEventListener("DOMContentLoaded", () => {
// DOMContentLoaded waits until the web page is ready
// we want to make sure that everything else is loaded before we run any JS

// when we are inside of these symbols {} we are in the code to be executed 

    let m = document.createElement("script");
    // names m as a variable we can call to
            document.head.appendChild(m);
            // creates a script that points to google maps using viable m
            m.addEventListener("load", () => {
    // here we are grabbing variable m and using it as a load listener
// all of the rest of the code you see below goes into line 15
// so we have the script, we load the head, we add the listener, then set the source (SRC)
    
                console.log("script has loaded");
                // we use console.log as a test to verify that the 
                // script is working to this point
            map = new google.maps.Map(document.getElementById("map"), {
            // Inside map we have two parameters map and center
                // getElementById is what is the html element you want to put the map inside of?
                center: {
                        lat: 35.514706,
                        lng: -89.912506
                        // this is the general location of the mississippi river for security reasons no specific location was chosen
                        },
                    // Latitude and longitude points
                    zoom: 10,
                    // there a 17 different zoom choices (17 you are zoomed in on a building, 10 city view, 1 view of the planet) 
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                    // there are different map types to choose (hybrid, satellite, etc) from in this example we are using roadmap
                });
                // is an object that consisting of center(which hold lat and lng), zoom, and mapTypeId
            });
            m.src = `https://maps.googleapis.com/maps/api/js?key=${MAPKEY}`;
            // the url is the place we are going to go to grab all the information we have listed in the object
        });
        

// Same code found below without comments for easier reading

    // let map;
    //     document.addEventListener("DOMContentLoaded", () => {
    //         let m = document.createElement("script");
    //         document.head.appendChild(m);
    //         m.addEventListener("load", () => {
    //             map = new google.maps.Map(document.getElementById("map"), {
    //                 center: {
    //                     lat: 35.514706,
    //                     lng: -89.912506
    //                 },
    //                 zoom: 10,
    //                 mapTypeId: google.maps.MapTypeId.ROADMAP
    //             });
    //         });
    //         m.src = `https://maps.googleapis.com/maps/api/js?key=${MAPKEY}`;
    //     });