//////////////////////  Generate Data

const profile = {

    general: [
        {
        agree1: "INFPs are led by the purity of their intent, not rewards and punishments.",
        agree2: "People with the INFP personality type have no interest in having power over others, and don’t much care for domineering attitudes at all.",
        agree3: "Their shyness keeps them from the podium, but they are the first to lend a helping hand where it’s needed.",
        disagree1: "People who share the INFP personality type are proud of this quality('purity of intent').",
        disagree2: "INFPs are in tune with emotions and morality, and when the facts and data contradict their ideals, it can be a real challenge for them.",
        disagree3: "INFPs often take challenges and criticisms personally, rather than as inspiration to reassess their positions."
        }
    ],
    likeMeTitle: "People like me include:",
    likeMe: [
        "William Shakespeare",
        "J.R.R. Tolkien",
        "Björk",
        "Johnny Depp",
    ],
    communicate: [
        {
        lilSib: "Reaching out to them first, establishing a healthy relationship with a good first impression, checking in with them often--this is how I would best communicate with my little Sib.",
        instructors: "I best communicate with instructors by first examining a problem until I know how to explain all the specifics about why and how I need help.",
        teammates: "Communication with teammates works best through dimplomatic conversation, asking each individual to speak up when only one person is doing the talking."
        }            
    ]
}

//////////////////////  Stringify & Parse Data w/JSON

const saveProfileData = function(databaseObject,localStorageKey) {
    const stringifiedProfileData = JSON.stringify(databaseObject)
    localStorage.setItem(localStorageKey, stringifiedProfileData)
}

const loadProfileData = function (localStorageKey) {
    const profileDataString = localStorage.getItem(localStorageKey)
    return JSON.parse(profileDataString)
}

saveProfileData(profile, "Profile")

const profileJSONData = loadProfileData("Profile")

//////////////////////  Populate DOM General

var general = document.getElementsByClassName("general")[0];
var generalJson = profileJSONData.general;

for(var i = 0; i < generalJson.length; i++) {

    let currentItem = generalJson[i];

    general.innerHTML+=`
    <h3>Agrees with:</h3>
    <ul>
    <li class="p-2">${currentItem.agree1}</li>
    <li class="p-2">${currentItem.agree2}</li>
    <li class="p-2">${currentItem.agree3}</li> 
    </ul> 
    <h3>Disagrees with:</h3>
    <ul>
    <li class="p-2">${currentItem.disagree1}</li>
    <li class="p-2">${currentItem.disagree2}</li>
    <li class="p-2">${currentItem.disagree3}</li>
    </ul>`
}

//////////////////////  Populate Like Me

var likeMe = document.getElementsByClassName("likeMe")[0];
var likeMeJSON = profileJSONData.likeMe;
var likeMeTitleJson = profileJSONData.likeMeTitle;

likeMe.innerHTML+=`
<h3 class="p-1">${likeMeTitleJson}</h3>`

for(var i = 0; i < likeMeJSON.length; i++) {
    let likeMeItem = likeMeJSON[i];

    likeMe.innerHTML+=`
    <div class="d-flex flex-row">
    <ul>
    <li class="p-1">${likeMeItem}</li>
    </ul>
    </div>
    `
}

//////////////////////  Populate DOM Communicate

var communicate = document.getElementsByClassName("communicate")[0];
var communicateJson = profileJSONData.communicate;

for(var i = 0; i < communicateJson.length; i++) {

    let currentItem = communicateJson[i];

    communicate.innerHTML+=`
    <h3>Communication styles:</h3>
    <ul>
    <li class="p-2">${currentItem.lilSib}</li>
    <li class="p-2">${currentItem.instructors}</li>
    <li class="p-2">${currentItem.teammates}</li> 
    </ul>
    `
}