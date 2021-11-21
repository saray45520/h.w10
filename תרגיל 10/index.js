// תרגיל1
const lessononetime = () => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    alert("start")
    alert(dateTime)
    alert("end")
}
//תרגיל 2
const lessontwotime = () => {

    alert("start")
    setTimeout(() => {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        alert(dateTime)

    }, 3000);
    alert("end")
}
//תרגיל 3
const lessonthreetime = () => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    alert("start")
    setTimeout(() => {

        alert(dateTime)

    }, 3000);
    alert("end")
}
//תרגיל 4
const lessonfourtime = () => {
    alert("start")
    setTimeout(() => {
        let rundomNumber = Math.floor(Math.random() * 100);
        alert(rundomNumber)
    }, 3000);
    setTimeout(() => {
        let rundomNumber = Math.floor(Math.random() * 100);
        alert(rundomNumber)
    }, 5000);
    setTimeout(() => {
        let rundomNumber = Math.floor(Math.random() * 100);
        alert(rundomNumber)
    }, 7000);
    alert("end")
}
//תרגיל 5
const lessonfivetime = () => {
    let inputNumber = document.getElementById("numberinput").value
    let viewNumber = document.getElementById("displayofnumber")
    IntervalId = setInterval(() => {
        let rundomNumber = Math.floor(Math.random() * inputNumber);
        viewNumber.innerText = rundomNumber
    }, 1000);
}
const stoprun = () => {
    clearInterval(IntervalId)

}
//תרגיל 6
const lessonsixtime = () => {
    IntervalId = setInterval(() => {
        let colorList = ["red", "bleak", "grey", "ping", "yellow"]
        let backgroundBody = document.getElementById("body")
        let randomColor = Math.floor(Math.random() * colorList.length)
        backgroundBody.style.backgroundColor = colorList[randomColor]
    }, 1000);

}
// תרגיל 7
// document.body.style.backgroundColor = "Green";
// alert("Done")
//א 
// לא
//ב
//  כי הדף קודם בונה את הדף ואז את העיצובים
//ג 
// document.body.style.backgroundColor = "Green";
// setTimeout(() => {
//     alert("Done")
// }, 0);
 
// תרגיל 8
const getRandomNumberAfterDelay = () => {
    let massage = document.getElementById("p")
    setTimeout(() => {
        let randomNumber = Math.floor(Math.random() * 100)
        massage.innerText = randomNumber
    }, 5000);
}
const runcode = (callback) => {
    callback()
}
const lessoneighttime = () => {
    runcode(getRandomNumberAfterDelay)
}
//תרגיל 9
const getRandomNumberAfterDelayNine = (limit) => {
    let massage = document.getElementById("p")
    setTimeout(() => {
        let randomNumber = Math.floor(Math.random() * limit);
        massage.innerText = randomNumber
    }, 5000);
}
const runCodeNine = (callback, num) => {
    callback(num)
}
const lessonNinettime = () => {
    runcode(getRandomNumberAfterDelayNine, 5)
}
//תרגיל 10
const getRandomNumberAfterDelayTen = (first, last) => {
    let massage = document.getElementById("p")
    setTimeout(() => {
        let randomNumber = Math.floor(Math.random() * (last - first)) + first;

        massage.innerText = randomNumber
    }, 5000);
}
const runCodeTen = (callback, num1, num2) => {
    callback(num1, num2)
}
const lessonTenettime = () => {
    runCodeTen(getRandomNumberAfterDelayTen, 5, 10)
}
//תרגיל 11

const getRandomNumberAfterDelayEleve = (first, last) => {
    let massage = document.getElementById("p")
    setTimeout(() => {

        do {
            randomNumber = Math.floor(Math.random() * (last - first)) + first;
        }
        while (randomNumber % 2 !== 0)



        massage.innerText = randomNumber
    }, 5000);
}
const runCodeEleve = (callback, num1, num2) => {
    callback(num1, num2)
}
const lessonElevenetime = () => {
    runCodeEleve(getRandomNumberAfterDelayEleve, 5, 10)
}
//תרגיל 12

function getUserFromServer(callback) {
    setTimeout(() => {
        const user = { firstName: "Moishe", lastName: "Ufnik" }
    }, 4000);
    callback(user)
}
const lessonTwelvtime = () => {
    getUserFromServer((user) => console.log(user))
}
//תרגיל 13
function getUserFromServer13(callback) {

    setTimeout(() => {
        const grades = [100, 98, 75, 80, 100, 87];
        callback(grades)
    }, 1000);
}

const runcode13 = () => {
let p=document.getElementById("para")
    getUserFromServer13((grades) =>p.innerText=grades)
}
//תרגיל 14

