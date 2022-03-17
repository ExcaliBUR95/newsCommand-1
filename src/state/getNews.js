import { getCommentaries } from "./getCommentaries";
import { initialState } from "./state";
import { getNewsByText } from "./getNewsByText"

export const getNews = (divOfAllNews) => {
    fetch('http://localhost:4400/news')
    .then((res) => res.json())
    .then((data) => {
    
        const main = document.getElementById('root')
        const list = document.createElement('ul')
        list.style.listStyleType = 'none'
        
        initialState.news = data
        const newsTitle = document.createElement('ul')
        const comm = document.createElement('ul')
        comm.style.width = '500px'
        comm.style.margin = 'auto'
      

        newsTitle.style.width = '500px'
        newsTitle.style.margin = 'auto'


        initialState.news.forEach((item) => {
            list.innerHTML =''
            const listItem = document.createElement('li')
          
            listItem.textContent = item.title
            listItem.style.listStyleType = 'none'
            listItem.style.margin = 'auto'
            listItem.style.width = '700px'
            const comm = document.createElement('ul')
            comm.classList.add('vasya')
            listItem.addEventListener('click', ()=>{
                list.innerHTML = ''
                getNewsByText(item._id, newsTitle)
                getCommentaries(item._id, comm)
             })
           
            divOfAllNews.append(listItem)
           
            list.append(divOfAllNews)
        });
        



        main.after(list)
        
    })
}