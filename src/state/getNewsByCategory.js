
import { getCommentaries } from "./getCommentaries";
import { initialState } from "./state";
import { getNewsByText } from "./getNewsByText"

export const getNewsByCategory = (id, newsText) => {
    fetch(`http://localhost:4400/news/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
        
        const main = document.getElementById('root')
  
     

        initialState.news = data

        const newsTitle = document.createElement('ul')
        newsTitle.style.width = '500px'
     
        newsTitle.className = 'newsTitle'


        initialState.news.forEach((item) => {
            const listItem = document.createElement('li')
            listItem.style.listStyleType = 'none'
            listItem.textContent = item.title
            newsText.append(listItem)
            const comm = document.createElement('ul')
            listItem.addEventListener('click', ()=>{
                main.innerHTML = ''
               getNewsByText(item._id, newsTitle)
               getCommentaries(item._id, comm)
            })
        });
        
    
        
        main.append(newsText)
        
    })
}