/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.querySelector('form')
form.addEventListener('click', (e) => {
    e.preventDefault()
    let search = document.getElementById("search").value
    if(isNaN(search)){
        return
    }else {
        count(search)
    }
})

const count = (search) => {
    const lb = search * 2.2046
    const gram = search / 0.0010000
    const oz = search * 35.274

    const output = document.getElementById("output")
    output.innerHTML = 
    `
        <h3>${lb.toFixed(2)} lbs</h3>
        <h3>${gram.toFixed(2)} g.</h3>
        <h3>${oz.toFixed(2)} oz</h3>
    `
    output.body.append(output)
}



