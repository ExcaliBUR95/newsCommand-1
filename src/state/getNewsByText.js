import { getCommentaries } from "./getCommentaries";
import { initialState } from "./state";
export const getNewsByText = (id, newsTitle) => {
    fetch(`http://localhost:4400/news/${id}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        const main = document.getElementById('root')
  
     
        newsTitle.innerHTML = ''
        initialState.news = data
        
        const listItem1 = document.createElement('li')
        listItem1.style.listStyleType = 'none'
       
        listItem1.textContent = initialState.news.text
         newsTitle.append(listItem1)
        

  

        
        main.prepend(newsTitle)
        
    })
}