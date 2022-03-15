import { initialState } from "./state";

export const getNews = () => {
    fetch('http://localhost:3000/news')
    .then((res) => res.json())
    .then((data) => {
        const main = document.getElementById('root')
        const list = document.createElement('ul')
        for(let i = 0; i < data.length; i++){
            initialState.news = data[i].title
            const listItem = document.createElement('li')
            listItem.textContent = initialState.news
            list.append(listItem)
        }
        main.append(list)
        
    })
}