function openMenu(){
    const hamburger = document.getElementById("ham");
    hamburger.style.display = "none";
    const menu = document.getElementById("navHam");
    menu.style.width = "50vw";
    const openDivs = document.getElementsByClassName("open");
    for (let i=0; i<openDivs.length; i++) {
        openDivs[i].style.fontSize = "clamp(20px, 3vw, 3vw)";
        openDivs[i].style.paddingLeft = "2vw";
    }
    const open2divs = document.getElementsByClassName("open2");
    for (let i=0; i<open2divs.length; i++) {
        open2divs[i].style.fontSize = "clamp(20px, 3vw, 3vw)";
    }
    const menuLink = document.querySelector(".menuLink");
    menuLink.style.width = "50vw";
    const menuLinkA = document.querySelector(".open2");
    menuLinkA.style.paddingLeft = "2vw";
}
function closeMenu(){
    const hamburger = document.getElementById("ham");
    hamburger.style.display = "block";
    const menu = document.getElementById("navHam");
    menu.style.width = "0";
    const openDivs = document.getElementsByClassName("open");
    for (let i=0; i<openDivs.length; i++) {
        openDivs[i].style.fontSize = "0";
        openDivs[i].style.paddingLeft = "0";
    }
    const open2divs = document.getElementsByClassName("open2");
    for (let i=0; i<open2divs.length; i++) {
        open2divs[i].style.fontSize = "0";
    }
    const menuLink = document.querySelector(".menuLink");
    menuLink.style.width = "0";
    const menuLinkA = document.querySelector(".open2");
    menuLinkA.style.paddingLeft = "0";
}

function addToCart(priceId, name){
    var price = document.getElementById(priceId);
    price = Number(price.textContent);
    alert(price);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.name === name);
    if (existingItem){
        existingItem.quantity += 1;
    } 
    else{
        cart.push({name, price, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} has been added to cart!`);
    //localStorage.removeItem("cart");
}
function removeItem(index){
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); 
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart(); 
}
function displayCart(){
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    alert(cart);
    const container = document.getElementById("cart");

    if (cart.length === 0) {
      container.innerHTML = "<p class='empty'>Head to the menu to add some plant-powered goodness!</p>";
      return;
    }

    let html = "<ul>";
    let total = 0;

    cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
  
        html += `
          <li class="item">
            <p>${item.name} - $${item.price} x ${item.quantity} = $${subtotal}</p>
            <button onclick="removeItem(${index})">Remove</button>
          </li>
        `;
      });
    
    html += `</ul><br><p class="item"><strong>Total: $${total}</strong></p>`;
    container.innerHTML = html;
}
