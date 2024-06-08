class food_member extends HTMLElement {
    connectedCallback() {

        const name = this.getAttribute('id'); 
        const food_type = this.getAttribute('food_type');
        const img_src = this.getAttribute('src');
        
        let a_link = document.createElement('a');
        a_link.setAttribute('href', './food.html');

        let food_div = document.createElement('div');
        food_div.setAttribute('class', 'food_member_div');
        
        let p_food_type = document.createElement('p');
        p_food_type.setAttribute('class', 'food_type font_size_15pt white');
        p_food_type.textContent = food_type;
        food_div.appendChild(p_food_type);

        let p_food_name = document.createElement('p');
        p_food_name.setAttribute('class', 'food_name font_size_30pt white');
        p_food_name.textContent = name;
        food_div.appendChild(p_food_name);
        
        let p_sp = document.createElement('p')
        p_sp.setAttribute('class', 'food_sp font_size_15pt white');
        p_sp.textContent = '자세히 보기';
        food_div.appendChild(p_sp);
        a_link.appendChild(food_div);
        let img = document.createElement('img');
        img.setAttribute('class', 'food_member_img');  
        img.setAttribute('src', img_src);  
        a_link.appendChild(img);
        
        this.appendChild(a_link)
        
    }
}
customElements.define('j-food-member', food_member);

class place_member extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute('id'); 
        const img_src = this.getAttribute('src');
        
        let p_place_name = document.createElement('p');
        p_place_name.setAttribute('class', 'place_name font_size_20pt white');
        p_place_name.textContent = name;
        this.appendChild(p_place_name);

        let img = document.createElement('img');
        img.setAttribute('class', 'place_member_img');
        img.setAttribute('src', img_src);
        this.appendChild(img);
        this.style.backgroundColor = '#F4A7A7';
        if (this.getAttribute('selected')=='selected') {
            this.style.backgroundColor = '#F27F7F';
        }

        this.addEventListener('click', () => {
            const url = './place.html';
            window.open(url, '_self');
        });        
    }
}
customElements.define('j-place-member', place_member);