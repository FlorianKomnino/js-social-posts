const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const postArea = document.querySelector('div.posts-list');

let postsCreator = posts.forEach((postObject, index) => {
    postArea.innerHTML += `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${postObject.author.image}" alt="${postObject.author.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${postObject.author.name}</div>
                    <div class="post-meta__time">${postObject.created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${postObject.content}<div class="post__image">
            <img src="${postObject.media}" alt="${postObject.author.name}'s post image">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <div class="like-button  js-like-button" href="#" data-postid="${index}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </div>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${postObject.id}" class="js-likes-counter">${postObject.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`;


    // creo variabile assegnata all'elemento like button
    document.querySelector(`[data-postid="${index}"]`).id = `${index}`;

});

let buttonIndex0 = false;
let buttonIndex1 = false;
let buttonIndex2 = false;
let buttonIndex3 = false;
let buttonIndex4 = false;

let likeIndexes = [
    buttonIndex0,
    buttonIndex1,
    buttonIndex2,
    buttonIndex3,
    buttonIndex4
];

let likeButtons = [
    document.getElementById('0'),
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4')
];

for (let i = 0; i < posts.length; i++) {
    let singleLikeButton = likeButtons[i];
    console.log(singleLikeButton);
    singleLikeButton.addEventListener('click', () => {
        singleLikeButton.classList.toggle('like-button--liked');
        if (likeIndexes[i] === false) {
            likeIndexes[i] = true;
            likeButtons[i] = likeButtons[i] + 1;
            posts[i].likes = posts[i].likes + 1;
            document.getElementById(`like-counter-${i + 1}`).innerHTML = posts[i].likes;

        } else if (likeIndexes[i] === true) {
            likeIndexes[i] = false;
            likeButtons[i].innerHTML = likeButtons[i].innerHTML - 1;
            posts[i].likes = posts[i].likes - 1;
            document.getElementById(`like-counter-${i + 1}`).innerHTML = posts[i].likes;
        }
    })
}

const postsWithoutProfilePic = [
    {
        postId: '',
        postAuthorInitials: '',
        myQuerySelector: ''
    }
];

posts.forEach((post) => {
    if (post.author.image == null) {
        postsWithoutProfilePic.push({
            postId: `${post.id}`,
            postAuthorInitials: `${post.author.name[1]}`
        })
    } else {
        console.log('con immagine');
    }
})

let findElement = document.querySelector('div#container div:nth-child(4)');
console.log(findElement);

function getFirstLettersUppercase(words) {
    const firstLetters = words
        .split(' ')
        .map(word => word[0])
        .join('');

    return firstLetters;
}

