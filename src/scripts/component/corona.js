class Corona extends HTMLElement{
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
            .corona-penjelasan{
                width: 45%;
                margin-top: 80px;
                height: 375px;
                background-color: white;
                border-radius: 4px;
                box-shadow: 3px 3px 4px black;
                font-family: 'Courier New', Courier, monospace;
                margin-left: 50px;
                float: left;
            }
            .corona-penjelasan p{
                margin-left: 10px;
            }
            .tips-corona .ml-50{
                margin-left: 300px;
            }
            @media screen and (max-width: 600px){
                .corona-penjelasan{
                    width: 100%;
                    height: auto;
                    margin-top: 40px;
                    margin-left: 0px;
                }
            }
        </style>
            <div class="corona-penjelasan">
            <p class="ml-50">
            <b>Corona</b>
                Apakah Coronavirus dan COVID-19 itu?
                Coronavirus merupakan keluarga besar virus yang menyebabkan penyakit pada manusia dan hewan. Pada manusia biasanya menyebabkan penyakit infeksi saluran pernapasan, mulai flu biasa hingga penyakit yang serius seperti Middle East Respiratory Syndrome (MERS) dan Sindrom Pernafasan Akut Berat/ Severe Acute Respiratory Syndrome (SARS). Coronavirus jenis baru yang ditemukan pada manusia sejak kejadian luar biasa muncul di Wuhan Cina, pada Desember 2019, kemudian diberi nama Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-COV2), dan menyebabkan penyakit Coronavirus Disease-2019 (COVID-19).
            </p>
            </div>

            <div class="corona-penjelasan tips-corona">
            <p>
            <b>Tips Corona</b>
            <center><h2><b>LAKUKAN 5 HAL</b></h2></center>
            <center><h3>Bantu hentikan virus corona</h3></center>
                1.TANGANCuci lebih sering </br>
                2.SIKUUntuk menutup mulut saat batuk </br>
                3.WAJAHJangan disentuh</br>
                4.JARAKJaga jarak aman </br>
                5.RUMAHUsahakan di rumah saja
            </p>
            </div>
        `;
    }
}
customElements.define("corona-virus",Corona);