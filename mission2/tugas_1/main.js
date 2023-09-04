let shop = document.getElementById("shop");
let newChart = document.getElementById("newChart");

let shopItemData = [];

let loadShopData = () => {
    fetch('data.json')
      .then((response) => {
        return response.json();
      })
      .then((dataJson) => {
        shopItemData = dataJson;
        generateShop();
      });
};
  
window.addEventListener('load', loadShopData);

let generateShop = () => {
    return (shop.innerHTML=shopItemData.map((desc)=>{
        let {id,name,description,price,img} = desc;
        return `
        <div id="product-id-${id}" class="item">
        <img style="text-align: center;" width="297px" src="${img}" alt="">
        <div class="detail">
            <h3>${name}</h3>
            <p>${description}</p>
            <div class="price">
                <h2>Rp${(price).toLocaleString("id-ID")}</h2>
                <div class="button-container">
                    <div class="button">
                        <button onclick="minusItem('${id}')" class="btn btn-danger">-</button>
                        <input id="${id}" type="text" class="quantity" value="0" disabled>
                        <button onclick="plusItem('${id}')" class="btn btn-primary">+</button>
                    </div>
                    <button onclick="addItem('${name}','${price}','${id}')" class="btn btn-success">Tambah Barang</button>
                </div>
            </div>
        </div>
        </div>
        `
    }).join(""));
};


let plusItem = (id) => {
    const inputElement = document.getElementById(id);
    let quantity = parseInt(inputElement.value);
        quantity++;
    inputElement.value = quantity;
};

let minusItem = (id) => {
    const inputElement = document.getElementById(id);
    let quantity = parseInt(inputElement.value);
    if(quantity != 0){
        quantity--;
    }
    inputElement.value = qty;
};


var totalPrice = 0;
let addItem = (name,price,id) => {
    var listCart = document.getElementById("shopCart");
    var qty = document.getElementById(id);

    totalPrice += price * qty.value;

    const rowDiv = document.createElement("div");
    rowDiv.className = "row";
    rowDiv.innerHTML = `
            <div class="col-4">
                ${name}
            </div>
            <div class="col-4">
                x${qty.value}
            </div>
            <div class="col-4">
                Rp. ${(price*qty.value).toLocaleString("id-ID")}
            </div>
            <hr style="width:100%;">
    `;

    if(qty.value != 0){
        showTotalPrice()
        listCart.appendChild(rowDiv);

    }
    else{
        alert("Tidak ada barang)")
    }
    qty.value = 0;
}

function showTotalPrice() {
    const hargaTotal = document.getElementById('invoice');
    hargaTotal.innerHTML = `<h5>Total Harga : Rp. ${totalPrice.toLocaleString("id-ID")}</h5>`;
}

