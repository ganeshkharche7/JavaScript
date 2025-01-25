
    let userInput = document.getElementById("date");

    let result = document.getElementById("result");

    let btn = document.querySelector(".input-box button");

    userInput.max = new Date().toISOString().split("T")[0];

    btn.addEventListener("click",() => {
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();//4
    let m1 = birthDate.getMonth();//1
    let y1 = birthDate.getFullYear();//1999

    let today = new Date();

    let d2 = today.getDate(); //30
    let m2 = today.getMonth();//12
    let y2 = today.getFullYear();//2024

    let d3 ,m3, y3;

    y3 = y2 - y1; //y3=2024-1999=25

    if(m2 >= m1){ //12>1
        m3 = m2 - m1; //m3=12-1=11
    }else{
        y3--; 
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){  //30>4
        d3 = d2 - d1; //d3=30-4=26
    }else{
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if(m3<0){ 
        m3=11;
        y3--;
    }
    result.innerHTML = `You are <span>${y3}</span> years,<span>${m3}</span> months and <span>${d3}</span> days old`;
    
})

function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}
