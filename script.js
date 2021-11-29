var button = document.getElementById("button");

button.addEventListener('click',function () {

    var inform = {
        names: document.getElementById("name").value,
        number: document.getElementById("number").value,
        data: document.getElementById("data").value,
        email: document.getElementById("email").value,
        nameParent: document.getElementById("NameParent").value,
        numberParent: document.getElementById("NumberParent").value,
        email:document.getElementById("EmailParent").value,
        Zahvor:document.getElementById("Zahvor").value
    }
    if( document.getElementById("contactChoice1").checked){
        inform.language = "Українська"
    }else if(document.getElementById("contactChoice2").checked){
        inform.language = "Російська";
    }else{
        inform.language = "Неважливо";
    }

    if(document.getElementById("contactChoice4".checked)){
        inform.YN = "Да";
    }else{
        inform.YN = "Нет";
    }

    console.log(inform);
});