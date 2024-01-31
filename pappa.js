let img = document.querySelector("img");

async function getData() {
    try {
        const api = "https://dog.ceo/api/breeds/image/random";
        const response = await fetch(api);
        if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
        const obj = await response.json();
        console.log(obj);
        img.src = obj.message;
    } catch (error) {
        console.log(error.message);
    }
}

let btn = document.querySelector("button");
btn.addEventListener("click", () => getData());

