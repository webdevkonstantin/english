
var nav = document.getElementById('navigation');
// Формирование ссылок на пункты меню
function linkHref(link, name){
    // return ('<a href="'+ link +'">'+ name + '</a>');
    return ('<a href="#" type="button" onclick=selectTheme('+ link + ')>'+ name + '</a>');
}

function subsubmenu(parent, childdata){
    var submenumainlink = document.getElementById('submenu-' + parent.keyName);
    var submenu = document.createElement("ul");
    submenu.setAttribute('id', 'submenu-' + parent.keyName + '-menu');

    submenumainlink.appendChild(submenu);

    var submenuId =  document.getElementById('submenu-' + parent.keyName + '-menu');

    for(item of childdata){
        var line = document.createElement("li");
        line.className = item.submenu ? 'nav-item submenu': 'nav-item';
        line.innerHTML = linkHref(item.link, item.title)

        if(item.submenu){
            submenuId.appendChild(line);
            line.setAttribute('id', 'submenu-' + item.keyName);
            subsubmenu(item, item.submenu);
        }else{
            submenuId.appendChild(line);
        }
    }
}

function submenu(parent, childdata){
    var submenumainlink = document.getElementById('submenu-' + parent.keyName);
    var submenu = document.createElement("ul");
    submenu.setAttribute('id', 'submenu-' + parent.keyName + '-menu');

    submenumainlink.appendChild(submenu);

    var submenuId =  document.getElementById('submenu-' + parent.keyName + '-menu');

    for(item of childdata){
        var line = document.createElement("li");
        line.className = item.submenu ? 'nav-item submenu': 'nav-item';
        line.innerHTML = linkHref(item.link, item.title)

        if(item.submenu){
            submenuId.appendChild(line);
            line.setAttribute('id', 'submenu-' + item.keyName);
            subsubmenu(item, item.submenu);
        }else{
            submenuId.appendChild(line);
        }
    }
}

function createLink(data){
    for(navLink of data){
        var line = document.createElement("li");
        line.className = navLink.submenu ? 'nav-item submenu': 'nav-item';
        line.innerHTML = linkHref(navLink.link, navLink.title)
        if(navLink.submenu){
            //submenu(navLink, navLink.submenu);
            line.setAttribute('id', 'submenu-' + navLink.keyName);
            nav.appendChild(line);
            submenu(navLink, navLink.submenu);


        }else{
            nav.appendChild(line);
        }
    }
}

//TODO: Реализовать подгрузку из файла.

// Replace ./data.json with your JSON feed
fetch('./data.json').then(response => {
    return response.json();
}).then(data => {
    // Work with JSON data here
    console.log(data);
}).catch(err => {
    // Do something for an error here
});

const navData = [
    {"title": "Game", "link": "/games"},
    {"title": "Повседневное",  "link": "/community", "keyName": "community", "submenu": [
            {"title": "Время",  "link": "/time", "keyName": "media2", "submenu": [
                    {"title": "Дни недели",  "link": "1", "en":[ "Ford", "BMW", "Fiat"], "ru":[ "Форд", "БМВ", "Фиат"]},
                    {"title": "Месяцы года",  "link": "2"},
                    {"title": "Monk",  "link": "3"},
                    {"title": "Witch Doctor",  "link": "4"}
                ]},
            {"title": "Gameplay", "link": "/games"},
            {"title": "Classes",  "link": "/community", "keyName": "classes2", "submenu": [
                    {"title": "Barbarian",  "link": "/barbarian"},
                    {"title": "Demon Hunter",  "link": "/demon-hunter"},
                    {"title": "Monk",  "link": "/monk"},
                    {"title": "Witch Doctor",  "link": "/witch-doctor"}
                ]},
            {"title": "Beta",  "link": "/beta"},
            {"title": "Support",  "link": "/support"}
        ]},
    {"title": "Forums", "link": "/forums", "keyName": "forums", "submenu": [
            {"title": "Media",  "link": "/media", "keyName": "media", "submenu": [
                    {"title": "Barbarian",  "link": "/barbarian"},
                    {"title": "Demon Hunter",  "link": "/demon-hunter"},
                    {"title": "Monk",  "link": "/monk"},
                    {"title": "Witch Doctor",  "link": "/witch-doctor"}
                ]},
            {"title": "Gameplay", "link": "/games"},
            {"title": "Classes",  "link": "/community", "keyName": "classes", "submenu": [
                    {"title": "Barbarian",  "link": "/barbarian"},
                    {"title": "Demon Hunter",  "link": "/demon-hunter"},
                    {"title": "Monk",  "link": "/monk"},
                    {"title": "Witch Doctor",  "link": "/witch-doctor"}
                ]},
            {"title": "Beta",  "link": "/beta"},
            {"title": "Support",  "link": "/support"}
        ]},
    {"title": "Services",  "link": "/services"}
];

createLink(navData);