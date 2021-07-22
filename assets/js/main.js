function openDrinkEvent(evt, name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(name).style.display = 'block';
    evt.currentTarget.className += ' active';
  }

const event_url = 'http://54.144.19.121:8880/api/events';
async function getEvents(){
    info =[
            {
                'event_id': 2,
                'name': 'CBI Event',
                'username': 'CBI',
                'address': '200 Victor NY',
                'time': '2021-07-20T02:22:21.418Z',
                'image': 'https://cms.prod.nypr.digital/images/319325/fill-661x496/',
                'sponsored': true
            },
            {
                'event_id': 1,
                'name': 'Event Time',
                'username': 'alevie',
                'address': '42 Wallaby Way, Syndney',
                'time': '2021-07-22T02:16:01.886Z',
                'image': 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFydHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
                'sponsored': false
            },
            {
                'event_id': 3,
                'name': 'My Houseparty',
                'username': 'alevie',
                'address': 'zoom.com/myzoom',
                'time': '2021-07-29T10:03:08.106Z',
                'image': 'https://media.istockphoto.com/photos/nicelooking-attractive-gorgeous-glamorous-elegant-stylish-cheerful-picture-id1165055006?k=6&m=1165055006&s=612x612&w=0&h=X_d75QPcjQ0Zx-X2tTD4npQOIjD6lKXdDPqxJHuovhc=',
                'sponsored': false
            }
        ]
        user = [];
        ename = [];
        images = [];
        for (i = 0; i < info.length; i++){
            const values = Object.entries(info[i])
            for(z = 0; z< values.length; z++){
                if(values[z][0] == 'username'){
                    user.push(values[z][1])
                }
                if(values[z][0] == 'name'){
                    ename.push(values[z][1])
                }
                if(values[z][0] == 'image'){
                    images.push(values[z][1])
                }
            }
        }
        placeEvents(user, ename, images);

}

async function getDrinks(){
    info =[
            {
                'drink_id': 1,
                'author': 'alevie',
                'name': 'test drink',
                'message': 'Great new experience in terms of taste really new flavor! Gen Z found a great App!',
                'ingredients': [
                    'water',
                    'bubbles'
                ],
                'image': 'https://images.theconversation.com/files/399935/original/file-20210511-21-wi5zfe.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop',
                'alcohol': 'corona'
            },
            {
                'drink_id': 2,
                'author': 'alevie',
                'name': 'drinky drinky',
                'message': 'This had an interesting flavour to it and really surprised! psyched to go to the bar!',
                'ingredients': [
                    'alcohol',
                    'tea'
                ],
                'image': 'https://www.liquor.com/thmb/tVgTKmhOqMwIZtqE_CYlbVwoKnY=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__12__31103100__Shirley-Temple-720x720-recipe-659e8198a2e840fc8ab7f48d9de60ad5.jpg',
                'alcohol': 'SIMI'
            },
            {
                'drink_id': 3,
                'author': 'jt_drinks',
                'name': 'Corona Cocktail',
                'message': "This was one of the best drinks I've ever had in a long time. can't wait to try again",
                'ingredients': [
                    'juice',
                    'lime',
                    'lemon'
                ],
                'image':'https://cdn.vox-cdn.com/thumbor/22hlLxUdY441SXHkKP_9oHqs9Qc=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19753769/shutterstock_672353038.jpg',
                'alcohol': 'corona'
            }
        ]
        author = [];
        dname = [];
        message = [];
        ingredients = [];
        images = [];
        for (i = 0; i < info.length; i++){
            const values = Object.entries(info[i])
            for(z = 0; z< values.length; z++){
                if(values[z][0] == 'author'){
                    author.push(values[z][1])
                }
                if(values[z][0] == 'name'){
                    dname.push(values[z][1])
                }
                if(values[z][0] == 'message'){
                    message.push(values[z][1])
                }
                if(values[z][0] == 'image'){
                    images.push(values[z][1])
                }
            }
        }
        console.log(dname);
        console.log(author);
        console.log(message);
        console.log(images)
        placeDrinks(dname, author, message, images);
    }

    async function placeDrinks(dname, author, message, images){
        for(x = 0; x < dname.length; x++){
            post = "<div class='drinkpost'><div class='drinkinfo'><div class='parent'><a href='recipe.php'><img class='drink base' src=" + images[x] + " alt=''></a><img class='person ontop' src='img/face2.jpg' alt='></div><p>"  + dname[x] +  "</p><h6>By <span class='redtext'>" + author[x] + "</spam></h6><p>" + message[x] + "</p><div class='interact'><div class=tab><button class='tablinks'><img class='white' src='assets/img/like.png' alt=''></button><button class='tablinks'><img class='white' src='assets/img/comments.png' alt=''></button>        <button class='tablinks'><img class='white' src='assets/img/share.png' alt=''></button><button class='tablinks'><img class='white' src='assets/img/save.png' alt=''></button></div></div></div></div>"
            document.getElementById('drink').innerHTML += post;
        }
    }

    async function placeEvents(user, ename, images){
        for(x = 0; x < ename.length; x++){
            post = "<div class=eventpost><div class='drinkinfo'><div class='parent'><img class='event base' src='" + images[x] + "' alt=''><img class='person ontop' src='img/face2.jpg' alt=''></div><p class='redbar'>"+ ename[x] +"</p><br><h6>Organized by <span class='redtext'>"+ user[z] +"</spam></h6><div class='interact'><br><div class=tab><button class='tablinks'><img class='white' src='assets/img/like.png' alt=''></button><button class='tablinks'><img class='white' src='assets/img/comments.png' alt=''></button><button class='tablinks'><img class='white' src='assets/img/share.png' alt=''></button><button class='tablinks'><img class='white' src='assets/img/rsvp.png' alt=''></button></div></div></div></div>"
            document.getElementById('event').innerHTML += post;
        }
    }

    async function reset(number){
        if(number == 1){
            document.getElementById('drink').innerHTML = '';
        } else {
            document.getElementById('event').innerHTML = '';
        }
    }