import { initialState } from "./state";

export const getCommentaries = (id,comm) =>{
    fetch(`http://localhost:4400/comments/${id}`)
    .then((res) => res.json())
    .then((data) => {
       const main = document.getElementById('root')
    
       const li = document.createElement('ul')
       li.style.width = '580px'
       li.style.margin = 'auto'
       li.style.marginTop = '10px'
       li.style.lineHeight = '1.5'
        li.innerHTML = ''
       
       initialState.comments = data
       
       console.log(initialState.comments);
       for (let i = 0; i < initialState.comments.length; i++) {
        
         const item1 =  document.createElement('li')
         item1.style.listStyleType = 'none'
         const item2 =  document.createElement('li')
         item2.style.listStyleType = 'none'

           item1.textContent = initialState.comments[i].author
           item2.textContent = initialState.comments[i].text
           
           comm.append(item1, item2)
           li.append(comm)
          
       }
       main.append(li)

    })
}

