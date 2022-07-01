localStorage.setItem("property", JSON.stringify(property = [{
        id: 1,
        image: 'property1.jpg',
        location: 'Cape Town',
        bedrooms: '1',
        price: '1500000',
    },
    {
        id: 2,
        image: 'property2.jpg',
        location: 'Johannesburg',
        bedrooms: '2',
        price: '2000000',
    },
    {
        id: 3,
        image: 'property3.jpg',
        location: 'Durban',
        bedrooms: '3',
        price: '2500000',
    },
    {
        id: 4,
        image: 'property4.jpg',
        location: 'Pretoria',
        bedrooms: '4',
        price: '3000000',
    },
    {
        id: 5,
        image: 'property5.jpg',
        location: 'Cape Town',
        bedrooms: '5',
        price: '3500000',
    },
    {
        id: 6,
        image: 'property6.jpg',
        location: 'Johannesburg',
        bedrooms: '1',
        price: '4000000',
    },
    {
        id: 7,
        image: 'property7.jpg',
        location: 'Durban',
        bedrooms: '2',
        price: '4500000',
    },
    {
        id: 8,
        image: 'property8.jpg',
        location: 'Pretoria',
        bedrooms: '3',
        price: '5000000',
    },
    {
        id: 9,
        image: 'property9.jpg',
        location: 'Cape Town',
        bedrooms: '4',
        price: '5500000',
    },
    {
        id: 10,
        image: 'property10.jpg',
        location: 'Johannesburg',
        bedrooms: '5',
        price: '6000000',
    },
]));

const properties = JSON.parse(localStorage.getItem("property"));
const propertiesBox = document.getElementById("properties")

createHTML(properties);

function createHTML(prop){
    propertiesBox.innerHTML = ' ';
    prop.forEach( (item) => {
        propertiesBox.innerHTML += `
        <div>
            <div class="card">
                <img src="../images/${item.image}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h5 class=""card-title>${item.location}</h5>
                    <h6 class="card-text">R${item.price}</h6>
                    <p class="card-text"> Bedrooms: ${item.bedrooms}</p>
                </div>
            </div>
        </div>
        `
    })
};

// function location(value) {
//     let newProp = properties.filter(x => {
//         return x.location == value.target.value
//     })
//     createHTML(newProp);
// }

// function bedrooms(value) {
//     let newProp = properties.filter(x => {
//         return x.bedrooms == value.target.value
//     })
//     createHTML(newProp);
// }

// function price(value) {
//     let newProp = properties.filter(x => {
//         return x.price <= value.target.value
//     })
//     createHTML(newProp);
// }

// createHTML(properties);

document.querySelector('#location').addEventListener('change' ,locations);
document.querySelector('#propertySize').addEventListener('change' ,beds);
document.querySelector('#propertyPrice').addEventListener('change' ,prices);


(function addData(){
    localStorage.setItem('prop', JSON.stringify(properties));
})();