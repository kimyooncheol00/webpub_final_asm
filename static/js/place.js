
function draw_place_member() {
    const place_members = document.getElementById('place_members');
    fetch(`./static/json/place.json`)
        .then(response => response.json())
        .then(jsonData => {
            jsonData.forEach((item, index)=> {
                item.text = item.text.replace(/\\n/g, '<br>');
                
                let place_member = document.createElement('div');
                let img = document.createElement('img');
                let name = document.createElement('p');
                let subname = document.createElement('p');
                let text = document.createElement('p');
                let box = document.createElement('img');
                img.setAttribute('src', `./static/images/place_imgs/${item.name}.png`);
                img.setAttribute('class', 'place_member_img');
                
                place_member.setAttribute('class', 'place_member');
                box.setAttribute('src', './static/images/place_imgs/line.png');
                box.setAttribute('class', 'place_member_box');

                name.setAttribute('class', 'place_member_name font_size_70pt');
                name.textContent = item.name;
            
                subname.setAttribute('class', 'place_member_subname font_size_40pt');
                subname.textContent = item.subname;
                
                text.setAttribute('class', 'place_member_text font_size_20pt');
                text.innerHTML = item.text;
                place_member.appendChild(img);
                place_member.appendChild(name);
                place_member.appendChild(subname);
                place_member.appendChild(text);
                place_member.appendChild(box);
                Array.from(place_member.children).forEach(element => {
                    if(index%2 === 0) {
                        element.classList.add('even');
                    } else {
                        element.classList.add('odd');
                    }
                });
                
                place_members.appendChild(place_member);
            });
        })

}

document.addEventListener('DOMContentLoaded', function() {
    draw_place_member();
});
