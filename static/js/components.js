class header extends HTMLElement {
    connectedCallback() {
        let logo = document.createElement('a');
        logo.setAttribute('class', 'header_text font_size_70pt');
        logo.setAttribute('href', './index.html');
        logo.textContent = 'Jecheon';
        this.appendChild(logo);

        let food = document.createElement('a');
        food.setAttribute('class', 'header_text_s font_size_30pt');
        food.setAttribute('href', './food.html');
        food.textContent = '맛집 보러가기';

        let place = document.createElement('a');
        place.setAttribute('class', 'header_text_s font_size_30pt');
        place.setAttribute('href', './place.html');
        place.textContent = '명소 보러가기';

        let header_elements = document.createElement('div');
        header_elements.setAttribute('id', 'header_menu');
        header_elements.append(food);
        header_elements.append(place);
        const name = this.getAttribute('id'); 
        if (name == 'place') {
            food.classList.add('gray');
        }
        else if (name == 'food') {
            place.classList.add('gray');
        }
        this.appendChild(header_elements); 
        if (name == 'index') {
            this.querySelectorAll('*').forEach((element) => {
                element.classList.add('white');
            })
            this.appendChild(header_elements); 
        }
    }
}
customElements.define('j-header', header);

class footer extends HTMLElement {
    connectedCallback() {
        let text_div = document.createElement('div');
        let tmp1 = document.createElement('p');
        let tmp2 = document.createElement('p');
        let tmp3 = document.createElement('p');
        tmp1.textContent = '세명대 컴퓨터학부 화이팅!';
        tmp1.setAttribute('class', 'font_size_20pt white');
        text_div.appendChild(tmp1);
        tmp2.textContent = '(우) 27136  충청북도 제천시 세명로 세명대학교  컴퓨터학부(첨단관)'
        tmp2.setAttribute('class', 'font_size_20pt white');
        tmp2.setAttribute('style', 'margin-top: 1vh;');
        tmp3.textContent = 'COPYRIGHT (C) 2024 JECHEON SEMYUNG UNIVERSITY COMPUTER SCIENCE';
        tmp3.setAttribute('class', 'font_size_20pt white');
        text_div.appendChild(tmp2);
        text_div.appendChild(tmp3);
        

        text_div.setAttribute('id', 'footer_div')
        this.appendChild(text_div);
        this.style.backgroundImage = 'url(./static/images/footer.png)';
    }
}
customElements.define('j-footer', footer);