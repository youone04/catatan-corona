function main() {
    const getCoronaGlobal = () => {
        fetch("https://api.covid19api.com/summary")
        .then(data =>{
            return data.json();
        })
        .then(dataJson=> {
            renderDataCorona(dataJson.Global);
        })
        .catch(error => {
            showResponseMessage(error);
        })
    };
    const getCoronaIndonesia = () => {
        // tuliskan kode di sini!
        fetch("https://api.covid19api.com/summary")
        .then(data =>{
            return data.json();
        })
        .then(dataJson=> {
            // console.log(dataJson.Global)
            // console.log(dataJson.Countries[77])
            renderCoronaIndonesia(dataJson.Countries[77]);
        })
        .catch(error => {
            console.log(error);
            // showResponseMessage(error);
        })
    };
    const renderDataCorona = (datas) => {
        const listBookElement = document.querySelector("#corona-global");
        let coronaGlobal = datas.TotalConfirmed;
        let	jumlahCorona = coronaGlobal.toString(),
            sisa 	= jumlahCorona.length % 3,
            hasil 	= jumlahCorona.substr(0, sisa),
            ribuan 	= jumlahCorona.substr(sisa).match(/\d{3}/g);        
        if (ribuan) {
            let separator = sisa ? ',' : '';
            hasil += separator + ribuan.join(',');
        }

        let coronaGlobal2 = datas.TotalDeaths;
        let	jumlahCorona2 = coronaGlobal2.toString(),
            sisa2 	= jumlahCorona2.length % 3,
            hasil2 = jumlahCorona2.substr(0, sisa2),
            ribuan2 	= jumlahCorona2.substr(sisa2).match(/\d{3}/g);        
        if (ribuan2) {
            let separator2 = sisa2 ? ',' : '';
            hasil2 += separator2 + ribuan2.join(',');
        }

        let coronaGlobal3 = datas.TotalDeaths;
        let	jumlahCorona3 = coronaGlobal3.toString(),
            sisa3 	= jumlahCorona3.length % 3,
            hasil3 = jumlahCorona3.substr(0, sisa3),
            ribuan3 = jumlahCorona3.substr(sisa3).match(/\d{3}/g);        
        if (ribuan3) {
            let separator3 = sisa3 ? ',' : '';
            hasil3 += separator3 + ribuan3.join(',');
        }
        listBookElement.innerHTML = "";
            listBookElement.innerHTML += `
                <style>
                    .custome-card{
                            box-shadow: 3px 3px 4px black;
                            transition: all ease 0.30s;
                            float: left;
                            margin-left: 50px;
                            font-family: cursive; 
                            
                        }
                    .custome-card:hover{
                            transform: translateX(2px);
                            
                        }
                    img{
                            width: 40px;
                            height: 40px;
                        }
                    @media screen and (max-width: 600px) {
                        .custome-card{
                            margin-left: 0px;
                            margin-right: 18px;
                        }
                        }
                </style>
                <div style="margin-top: 12px;">
                            <h3>Corona Global
                            <img src="http://3.bp.blogspot.com/-La8emAzGHfw/VJ6fLQkrUdI/AAAAAAAAAmQ/BERwvzYd4es/s1600/earth.png" alt="">
                            </h3>
                            <hr>
                            <div class="col-lg-3 col-sm-12 p-3 mb-2 bg-warning text-white custome-card rounded">
                            <p>
                            <h5><b>Terkonfirmasi</b></h5>
                                ${hasil}
                            </p>
                            Orang
                            </div>
                            <div class="col-lg-4 col-sm-12 custome-card p-3 mb-2 bg-danger text-white rounded">
                            <P>
                            <h5><b>Jumlah Meninggal</b></h5>
                                ${hasil2}
                            </P>
                            Orang
                            </div>
                            <div class="col-lg-3 col-sm-12 custome-card p-3 mb-2 bg-success text-white rounded">
                            <P>
                            <h5><b>Jumlah Sembuh</b></h5>
                                ${hasil3}
                            </P>
                            Orang
                            </div>
                </div>
                
            `;
    };
    const renderCoronaIndonesia = (data) => {
        const coronaIndonesia = document.querySelector('#corona-global');
        let cIndonesia = data.TotalConfirmed;
        let	jumlahCorona = cIndonesia.toString(),
            sisa 	= jumlahCorona.length % 3,
            hasil 	= jumlahCorona.substr(0, sisa),
            ribuan 	= jumlahCorona.substr(sisa).match(/\d{3}/g);        
        if (ribuan) {
            let separator = sisa ? ',' : '';
            hasil += separator + ribuan.join(',');
        }
        let cIndonesia2 = data.TotalDeaths;
        let	jumlahCorona2 = cIndonesia2.toString(),
            sisa2 	= jumlahCorona2.length % 3,
            hasil2 = jumlahCorona2.substr(0, sisa2),
            ribuan2 	= jumlahCorona2.substr(sisa2).match(/\d{3}/g);        
        if (ribuan2) {
            let separator2 = sisa2 ? ',' : '';
            hasil2 += separator2 + ribuan2.join(',');
        }
        let cIndonesia3 = data.TotalDeaths;
        let	jumlahCorona3 = cIndonesia3.toString(),
            sisa3 	= jumlahCorona3.length % 3,
            hasil3 = jumlahCorona3.substr(0, sisa3),
            ribuan3 = jumlahCorona3.substr(sisa3).match(/\d{3}/g);        
        if (ribuan3) {
            let separator3 = sisa3 ? ',' : '';
            hasil3 += separator3 + ribuan3.join(',');
        }
        coronaIndonesia.innerHTML = "";
        coronaIndonesia.innerHTML += `
        <style>
                    .custome-card{
                            box-shadow: 3px 3px 4px black;
                            transition: all ease 0.30s;
                            float: left;
                            margin-left: 50px;
                            font-family: cursive; 
                            
                        }
                    .custome-card:hover{
                            transform: translateX(2px);
                            
                        }
                    img{
                            width: 40px;
                            height: 30px;
                            box-shadow: 3px 3px 4px #333;
                        }
                    @media screen and (max-width: 600px) {
                        .custome-card{
                            margin-left: 0px;
                            margin-right: 18px;
                        }
                        }
                </style>  
        <div style="margin-top: 18px;">
            <h3>Corona Indonesia
            <img src="https://upload.wikimedia.org/wikipedia/id/2/2d/Bendera_Indonesia_%28Merah_Putih%29_by_Vibriel.jpg" alt=""></h3>
            <hr>
                <div class="col-lg-3 col-sm-12 p-3 mb-2 bg-warning text-white custome-card rounded">
                <p>
                <h5>Terkonfirmasi</h5>
                    ${hasil}
                </p>
                Orang
                </div>
                <div class="col-lg-4 col-sm-12 custome-card p-3 mb-2 bg-danger text-white rounded">
                <P>
                <h5>Jumlah Meninggal</h5>
                    ${hasil2}
                </P>
                Orang
                </div>
                <div class="col-lg-3 col-sm-12 custome-card p-3 mb-2 bg-success text-white rounded">
                <P>
                <h5>Jumlah Sembuh</h5>
                ${hasil3}
                </P>
                Orang
                </div>
                </div>
`;
    }
    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };
    document.addEventListener("DOMContentLoaded", () => {
        const pilihanSelect = document.querySelector("#statuskasus");
        pilihanSelect.addEventListener("change", function () {
            let tampil = pilihanSelect.options[ pilihanSelect.selectedIndex ].value;
            // alert(tampil);
            if(tampil==="true"){
                getCoronaGlobal();
            }else{
                getCoronaIndonesia();
            }
        });
    });
    getCoronaGlobal();
}
export default main;
