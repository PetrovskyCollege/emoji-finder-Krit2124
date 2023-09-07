import {data} from "./data/emoji.js";

let emojiList = document.querySelector(".emojiList");

function showEmoji(keyword) {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].title)
    }
}