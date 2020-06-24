class NavBar extends HTMLElement{
    constructor(){
        super();
        this.shadowDom = this.attachShadow({mode : "open"});
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowDom.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .navbar{
            width: 100%;
            height: 50px;
            background-color:rgb(106, 131, 17);
            color: white;
            font-weight: bold;
            font-size: 18px;
            border-radius: 4px;
        }
        .nabvar-span{
            margin-left: 8px;
            float: left;
        }
        .kasus-corona{
            margin-right: 8px;
            float: right;
        }
        </style>
        <nav class="navbar">
            <span class="nabvar-span">Catatan Corona</span>
            <span class="kasus-corona">
            
            </span>
        </nav>
        `;
        
    }
}
customElements.define("nav-bar",NavBar);