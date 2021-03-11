var calculate = document.getElementById('calculate');
var burger_name = document.getElementById('burger_name');
var ingredients = document.getElementsByClassName('add_ingredients');
var coupon = document.getElementById('discount');
var coupon_codes = ["abc123", "Potato Salad", "123ABC"];


calculate.addEventListener( "click", 
    function () {
        if (burger_name.value != "") {
            var price = 50;
            console.log(price);
            // cicla sugli ingredienti e se l'ingrediente è selezionato, somma i value nella variabile price
            for (var i = 0; i < ingredients.length; i++ ) {

                console.log("inside for", price, i, ingredients[i]);

                if (ingredients[i].checked == true) {
                    price += parseInt(ingredients[i].value) 
                    console.log("inside if", price);

                }
            }
            if (coupon_codes.includes(coupon.value) ) {
                price -= 0.2 * price;
            }
            console.log(price);
            document.getElementById("price").innerHTML = price.toFixed(2) + "€";
        } else {
            alert("Inserisci il nome del tuo panino!!");
        }
    }
);
