let BaseURL = 'http://thungghuan.xyz:3000'

window.onload = function () {

    let container = document.getElementById("container");
    let getRequest = new XMLHttpRequest()
    getRequest.open('GET', BaseURL + '/users')
    getRequest.send()

    getRequest.onreadystatechange = function () {
        if (getRequest.readyState == 4) {
            if (getRequest.status == 200) {

                // list.innerHTML=getRequest.responseText
                let arr = Object(eval(getRequest.responseText))
                for (let i = 0; i < arr.length; i++) {
                    let list = document.createElement('li')
                    list.innerHTML = arr[i]
                    container.appendChild(list)
                }
            }
        }
    }

}
function postData() {


    let name = document.getElementById("name").value
    let num = document.getElementById("num").value
    let postData = {
        name: String(name),
        num: String(num)
    }

    let postRequest = new XMLHttpRequest()
    postRequest.open('POST', BaseURL + '/add')
    postRequest.setRequestHeader("Content-type", "application/json")
    postRequest.send(JSON.stringify(postData))
    postRequest.onreadystatechange = function () {
        if (postRequest.readyState == 4) {
            if (postRequest.status == 200) {
                console.log(postRequest.responseText)
            }
            else {
                alert(postRequest.responseText)
            }
        }
    }
}