let a = document.getElementsByTagName("input")[0];
let b = document.querySelectorAll('.zz');
emptystring = '';
let it = Array.from(b);
it.forEach(b => {
    b.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            try {
                emptystring = eval(emptystring)
                a.value = emptystring
            }
            catch (error) {
                a.value = "dafa hoooo"
            }
            emptystring = eval(emptystring)

            a.value = emptystring
        }

        else if (e.target.innerHTML == "AC") {
            emptystring = "";
            a.value = emptystring
        }
        else if (e.target.innerHTML == "DEL") {
            emptystring = emptystring.substring(0, emptystring.length - 1)
            a.value = emptystring
        }


        else {
            emptystring += e.target.innerHTML
            a.value = emptystring
        }
    })
});

// switch case

var month = 2;
switch (month) {
    case 1:
         console.log("junary")
        break;
    case 2: console.log("feb")
        break;
    case (3): console.log("march")
        break;
    case (4): console.log("april")
        break;
    case (5): console.log("may")
        break;
    case (6): console.log("june")
        break;
    case (7):console.log ("july")
        break;
    case (8): console.log("august")
        break;
    case (9):console.log ("september")
        break;
    case (10):console.log ("october")
        break;
    case (11):console.log("november") 
        break;

    default:
        console.log("enter the")
        break;
}




