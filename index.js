var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");
var btnSubmit = document.getElementById("btnSubmit");
var tableBody = document.getElementById("tableBody");
var products = [];

if(localStorage.getItem('products') != null){
    products = JSON.parse(localStorage.getItem('products')) ;
    display()
}

function getproduct(){
    var product = {
        name:siteName.value,
        url:siteURL.value,
    };
    products.push(product);
    localStorage.setItem("products" , JSON.stringify(products));
    display();
    clear();
};

function clear(){
    siteName.value = "";
    siteURL.value = "";
};

function ckeckinputs(){
    if(siteName.value !== "" && siteURL.value !== "" ){
        getproduct()
    }
}

function display(){
    cartona = ``;
       for(var i = 0 ; i<products.length ; i++){
           cartona += `<tr>
           <td>${i}</td>
           <td>${products[i].name}</td>
           <td><a class="btn btn-visit " href="${products[i].url}" target="_blank"><i class="fa-solid fa-eye pe-2"></i>visit</a></td>
           <td><button class="btn btn-danger"  onclick="deleteproduct(${i})"><i class="fa-solid fa-trash-can"></i>Delete</button></td>
           </tr>`;
       }
       tableBody.innerHTML = cartona;
   };

function deleteproduct(deleteIndex){
    products.splice(deleteIndex , 1)
    localStorage.setItem("products" , JSON.stringify(products));
    display()
}