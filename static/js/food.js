class food_member extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute('id');
        const img_src = `./static/images/food_imgs/${name}.png`;
        let img = document.createElement('img');
        let food_member_div = document.createElement('div');
        food_member_div.setAttribute('class', 'food_member_div');
        img.setAttribute('class', 'food_member_img');
        img.setAttribute('src', img_src);
        food_member_div.appendChild(img);
        let food_name_div = document.createElement('div');
        let food_name = document.createElement('p');
        food_name_div.setAttribute('class', 'food_member_text_div');
        food_name.setAttribute('class', 'food_member_text font_size_40pt');
        food_name.textContent = name;
        food_name_div.appendChild(food_name);
        food_member_div.appendChild(food_name_div);
        this.appendChild(food_member_div);
    }
}
customElements.define('food-member', food_member);

function draw_food_member(index) {
    const food_members = document.getElementById('food_members');
    fetch(`./static/json/food_${index}.json`)
        .then(response => response.json())
        .then(jsonData => {
            jsonData.forEach(function(item) {
                let food_member = document.createElement('food-member');
                food_member.id = item.name;
                food_members.appendChild(food_member);
            });
        })

}

document.addEventListener('DOMContentLoaded', function() {
    const index = new URLSearchParams(window.location.search).get('index');
    if (index===null) {
        draw_food_member(1); 
        let page_select = document.getElementById(`pg_1`);
        page_num.textContent = `1 / 9`;
        page_select.setAttribute('style', 'background-color: #636363;')
    } else {
        draw_food_member(index);
        let page_select = document.getElementById(`pg_${index}`);
        let page_num = document.getElementById(`page_num`);
        page_num.textContent = `${index} / 9`;
        page_select.setAttribute('style', 'background-color: #636363;')
    } 
});