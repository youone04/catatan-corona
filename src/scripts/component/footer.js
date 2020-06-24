class Footer extends HTMLElement{
    constructor(){
        super();
        this.shadowDom = this.attachShadow({mode:"open"});
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowDom.innerHTML = `
        <style>
            footer{
                width: 100%; 
                clear: both;
                margin-top:750px;
                padding: 2px;
                color: white;
                background-color:rgb(106, 131, 17);
                text-align: center;
                font-weight: bold;
                font-family: 'Century Gothic';
                border-radius: 4px;
            }
        </style>
        <footer>
        <p>Belajar Dasar Pemrograman Web &#169; 2020, Yudi Gunawan</p>
        </footer>
        `;
    }
}
customElements.define("footer-footer",Footer);