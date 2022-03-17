import { getNews } from "./getNews"
import { getNewsByCategory } from "./getNewsByCategory"
import { initialState } from "./state"


export const getCats = () =>{
    fetch(`http://localhost:4400/cats/get`)
    .then((res) => res.json())
    .then((data) => {
        const header = document.createElement('div')
        header.className = 'header-all'
        const main = document.getElementById('root')
        main.style.margin = 'auto'
        main.style.width = 'auto'

        const catsList = document.createElement('div')
        const allNews = document.createElement('p') 
        allNews.className = 'item-header'
        const newsText = document.createElement('ul')
        const divOfAllNews = document.createElement('p')
        divOfAllNews.className = 'all-itema'

        catsList.className = 'header-item'


       initialState.categories = data
     
       newsText.style.width = '600px'
       newsText.style.margin = 'auto'
       newsText.className = 'item-news'
  
       allNews.textContent = 'Все новости'
       catsList.prepend(allNews)
       allNews.addEventListener('click', ()=>{
       main.innerHTML = ''
       divOfAllNews.innerHTML = ''
           getNews(divOfAllNews)
           
       }) 

        initialState.categories.forEach((item) => {
            const item12 =  document.createElement('p')
          item12.className = 'item12'
            item12.textContent = item.category
            catsList.append(item12)
            catsList.style.display = 'flex'
            catsList.style.margin = 'auto'
            catsList.style.width = '500px'
            catsList.style.justifyContent = 'space-between'
             

        item12.addEventListener('click', ()=> {
            main.innerHTML = ''
            divOfAllNews.textContent = ''
            newsText.innerHTML = ''
            getNewsByCategory(item._id, newsText)
           
        })
        document.body.prepend(header)
            header.prepend(catsList)
            
        })
    
    })
    
}