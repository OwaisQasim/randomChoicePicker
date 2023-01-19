const textarea = document.getElementById('textarea');
const tagsElement = document.getElementById('tags');

textarea.focus()

textarea.addEventListener('keyup', (evnt) => {
    createTags(evnt.target.value)
    if (evnt.key === 'Enter') {
        setTimeout(() => {
            evnt.target.value = '';
        }, 10);
        randomSelect()
    }
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

function randomSelect() {
    const times = 30; //The variable 'times' represents the number of times the randomSelect() function will execute the highlighting of a random tag before it stops.
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            rmHighlightTag(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function rmHighlightTag(tag) {
    tag.classList.remove('highlight')
}
