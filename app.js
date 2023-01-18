const textarea = document.getElementById('textarea');
const tagsElement = document.getElementById('tags');

textarea.focus()


textarea.addEventListener('keyup', (evnt) => {
    createTags(evnt.target.value)

    if (evnt.key === 'Enter') {
        setTimeout(() => {
            evnt.target.value = '';
        }, 10);
    }
    randomSelect()
})



function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !==
        '').map(tag => tag.trim())
    tagsElement.innerHTML = ''

    tags.forEach(tag => {
        const tagElement = document.createElement('span')
        tagElement.classList.add('tag')
        tagElement.innerText = tag
        tagsElement.appendChild(tagElement)

    });
}




// textarea.addEventListener('keyup', (evnt) => {
//     if (evnt.key === 'Enter') {
//         const value = textarea.value
//         tags.innerHTML = value
//         console.log(textarea)
//         tags.classList.add('.tags')
//         tags.appendChild(value)

//     }
// })