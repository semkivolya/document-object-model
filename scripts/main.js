const tribes_info = {
    apache_info : 
    {
        name: "Apache",
        img: "images/apache.webp",
        link:"https://en.wikipedia.org/wiki/Apache",
        text: "The Apache are a group of culturally related Native American tribes in the Southwestern United States, which include the Chiricahua, Jicarilla, Lipan, Mescalero, Mimbreño, Ndendahe (Bedonkohe or Mogollon and Nednhi or Carrizaleño and Janero), Salinero, Plains (Kataka or Semat or 'Kiowa-Apache') and Western Apache (Aravaipa, Pinaleño, Coyotero, Tonto). Distant cousins of the Apache are the Navajo, with whom they share the Southern Athabaskan languages. There are Apache communities in Oklahoma and Texas, and reservations in Arizona and New Mexico. Apache people have moved throughout the United States and elsewhere, including urban centers. The Apache Nations are politically autonomous, speak several different languages, and have distinct cultures.",
        population: 111810  
    },
    blackfeet_info: 
    {
        name: "Blackfeet",
        img: "images/blackfeet.webp",
        link:"https://en.wikipedia.org/wiki/Blackfeet_Nation",
        text: "The Blackfeet Nation, officially named the Blackfeet Tribe of the Blackfeet Indian Reservation of Montana, is a federally recognized tribe of Siksikaitsitapi people with an Indian reservation in Montana. Tribal members primarily belong to the Piegan Blackfeet (Ampskapi Piikani) band of the larger Blackfoot Confederacy that spans Canada and the United States.",
        population: 10938
    },
    cherokee_info:
    {
        name: "Cherokee",
        img: "images/cherokee.webp",
        link:"https://en.wikipedia.org/wiki/Apache",
        text:"The Cherokee are one of the indigenous peoples of the Southeastern Woodlands of the United States. Prior to the 18th century, they were concentrated in their homelands, in towns along river valleys of what is now southwestern North Carolina, southeastern Tennessee, edges of western South Carolina, northern Georgia, and northeastern Alabama",
        population: 819105 
    },
    chippewa_info:
    {
        name: "Chippewa",
        img: "images/chippewa.webp",
        link:"https://en.wikipedia.org/wiki/Ojibwe",
        text: "The Ojibwe, Ojibwa, Chippewa, or Saulteaux are an Anishinaabe people in what is currently southern Canada, the northern Midwestern United States, and Northern Plains. According to the U.S. census, in the United States Ojibwe people are one of the largest tribal populations among Native American peoples. The Ojibwe language is Anishinaabemowin, a branch of the Algonquian language family",
        population: 170742 
    },
    choctaw_info:
    {
        name: "Choctaw",
        img: "images/choctaw.webp",
        link:"https://en.wikipedia.org/wiki/Choctaw",
        text: "The Choctaw (in the Choctaw language, Chahta) are a Native American people originally based in the Southeastern Woodlands, in what is now Alabama and Mississippi. Their Choctaw language is a Western Muskogean language. Today, Choctaw people are enrolled in three federally recognized tribes: the Choctaw Nation of Oklahoma, Mississippi Band of Choctaw Indians, and Jena Band of Choctaw Indians in Louisiana.",
        population: 214884 
    },
    creek_info:
    {
        name: "Creek",
        img: "images/creek.webp",
        link:"https://en.wikipedia.org/wiki/Muscogee",
        text: "The Muscogee, also known as the Mvskoke, Muscogee Creek, and the Muscogee Creek Confederacy (pronounced [məskóɡəlɡi] in the Muscogee language), are a group of related indigenous (Native American) peoples of the Southeastern Woodlands[2] in the United States of America. Their original homelands are in what now comprises southern Tennessee, much of Alabama, western Georgia and parts of northern Florida.",
        population: 88332 
    },
    iroquois_info:
    {
        name: "Iroquois",
        img: "images/iroquois.webp",
        link:"https://en.wikipedia.org/wiki/Iroquois",
        text: "The Iroquoi are an Iroquoian-speaking confederacy of First Nations peoples in northeast North America/Turtle Island. They were known during the colonial years to the French as the Iroquois League, and later as the Iroquois Confederacy. The English called them the Five Nations, comprising the Mohawk, Oneida, Onondaga, Cayuga, and Seneca (listed geographically from east to west). After 1722, the Iroquoian-speaking Tuscarora people from the southeast were accepted into the confederacy, which became known as the Six Nations",
        population: 81000 
    },
    navajo_info:
    {
        name: "Navajo",
        img: "images/navajo.webp",
        link:"https://en.wikipedia.org/wiki/Navajo",
        text: "The Navajo are a Native American people of the Southwestern United States. At more than 399,494 enrolled tribal members as of 2021,[1][3] the Navajo Nation is the largest federally recognized tribe in the U.S. (the Cherokee Nation being the second largest); the Navajo Nation has the largest reservation in the country. The reservation straddles the Four Corners region and covers more than 27,000 square miles (70,000 square km) of land in Arizona, Utah and New Mexico. The Navajo language is spoken throughout the region, and most Navajos also speak English.",
        population: 399494 
    },
    sioux_info:
    {
        name: "Sioux",
        img: "images/sioux.webp",
        link:"https://en.wikipedia.org/wiki/Sioux",
        text: "The Sioux or Oceti Sakowin are groups of Native American tribes and First Nations peoples in North America. The modern Sioux consist of two major divisions based on language divisions: the Dakota and Lakota; collectively they are known as the Očhéthi Šakówiŋ ('Seven Council Fires'). The term 'Sioux' is an exonym created from a French transcription of the Ojibwe term 'Nadouessioux', and can refer to any ethnic group within the Great Sioux Nation or to any of the nation's many language dialects",
        population: 170110 
    }
};



addEventListener('DOMContentLoaded', (event) => {
    //here we will be loading content
    const mainSectionContainer = document.getElementById("main_content");
    const tribesList = document.getElementById("tribes-list");
    tribesList.addEventListener('click', (event) => {
        let previousActive = document.querySelector(".navigation__category.active");
        if(previousActive !== null){
            previousActive.classList.remove('active');
        }
        let targetRef = event.target.dataset.ref;
        event.target.classList.add('active');
        mainSectionContainer.innerHTML = generateContent(targetRef);
    });
});

function generateContent(contentId){
    
    return `<div class="tribe-info__container">
        <a href="${tribes_info[contentId].link}" target="_blank">
            <img class="tribe-logo" src=${tribes_info[contentId].img} alt="${tribes_info[contentId].name}">
        </a>
        <div class="tribe-info">
            <p>${tribes_info[contentId].text}</p>
            <br>
            <p>Population: ${tribes_info[contentId].population.toLocaleString()}</p>
        </div>
        </div>`;
}

