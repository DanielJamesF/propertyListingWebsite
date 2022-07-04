const properties = JSON.parse(localStorage.getItem("property"));
const propertiesBox = document.querySelector(".boxes")

createHTML(properties);

function createHTML(props){
    propertiesBox.innerHTML = '';
    
    props.forEach( (item, index = 0)=> {
        propertiesBox.innerHTML +=
        `    
        <div class="col-2 text-black">${item.id}</div>
        <div class="col-2">
        <div>
        <img src="../images/${item.image}" style="height: 50px; width:100px">
        </div>
        </div>
        <div class="col-3 text-black">${item.location}</div>
        <div class="col-2 text-black">${item.bedrooms}</div>
        <div class="col-3 text-black">$${item.price}</div>
        `    
    });
}