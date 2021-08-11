const form= document.querySelector('#myForm')
const siteName= document.querySelector('#siteName')
const siteUrl= document.querySelector('#siteUrl')
const bookmarksResults= document.querySelector('#bookmarksResults')
let isInUpdateMode=false
let updateBookmarkId=''

form.addEventListener('submit',function(e){
e.preventDefault()    
const Name= siteName.value
const Url= siteUrl.value
const bookmarkObj = {
    id: uuidv4(),
    name: Name,
    url: Url,
   }
   const records= localStorage.getItem('bookmarks')
   if (records){
    const parsedData = JSON.parse(records)
    if (!isInUpdateMode){
    parsedData.push(bookmarkObj)
    }else{
      for (const data of parsedData){
        if (data.id === updateBookmarkId){
          data.name=siteName.value
          data.url=siteUrl.value
        }
      }

    }
    const stringData=JSON.stringify(parsedData)
    localStorage.setItem('bookmarks',stringData)
   }
   else{
    const bookmarkList= []
    bookmarkList.push(bookmarkObj)
    const stringData= JSON.stringify(bookmarkList)
    localStorage.setItem('bookmarks',stringData)
   }
   this.reset()
   showBookmarks()
   isInUpdateMode=false
   updateBookmarkId=''
})

function showBookmarks(){
    const storedBookmarks= localStorage.getItem('bookmarks')
     if (storedBookmarks){
    bookmarksResults.innerHTML=''    
    const parsedStoredBookmarks= JSON.parse(storedBookmarks)
    for (const bookmark of parsedStoredBookmarks){
        const {id,name,url}=bookmark;
        bookmarksResults.innerHTML +=
        `
        <div class="well">
          <h3>
            ${name}
            <a class="btn btn-default" target="_blank"  href="` +
        `${url}` +
        `">Visit</a>
            <a class="btn btn-primary" href="#" onclick="editBookmark(` +
        `'${id}'` +
        `)">Edit</a>
            <a class="btn btn-danger" href="#" onclick="removeBookmark(` +
        `'${id}'` +
        `)">Delete</a>
          </h3>
        </div>
      `;
    }
     }
}

function removeBookmark(id){
    const stored= localStorage.getItem('bookmarks')
    let bookmarksList= JSON.parse(stored)
    bookmarksList = bookmarksList.filter(bookmark => bookmark.id !== id);
    const stringData= JSON.stringify(bookmarksList)
    localStorage.setItem('bookmarks',stringData)
    showBookmarks()

}

function editBookmark(id){
  isInUpdateMode=true
  updateBookmarkId=id
  const stored= localStorage.getItem('bookmarks')
  let bookmarksList= JSON.parse(stored)
  bookmarksList = bookmarksList.find(bookmark => bookmark.id === id);
  siteName.value=bookmarksList.name
  siteUrl.value=bookmarksList.url
}

showBookmarks()