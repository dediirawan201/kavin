import React from 'react'
import { Bunga,Kavin,Wanita} from '../../../assets/gambar';

import './tanggalPernikahan.css';


const TanggalPernikahan = ({id}) => {
    
  return (  
    <section className="section-tanggal" id={`content${id}`}>
            <span className="title-tanggal" data-aos="fade-up"> بسم الله الرحمن الرحيم</span>
            <p className="desc" data-aos="fade-up">Kavin Ardana Abiputra Supian merupakan anak kedua kami. 
                Usianya menginjak 11 tahun. 
                Dan akan segera melaksanakan khitan. Maka dari itu, kami ingin mengadakan syukuran atas acara tersebut 
                dengan tujuan memanjatkan rasa terima kasih kami kepada yang maha kuasa serta berharap bahwa anak kami 
                kelak menjadi anak yang bermanfaat bagi dirinya, agama, dan bangsa Indonesia</p>
                <p className="desc-2" data-aos="zoom-in">Anak kami yang berkhitan</p>
            <div className="mempelai"> 
                <div className="laki" data-aos="fade-up">
                    <div className="foto-laki"></div>
                    <img src={Kavin} width={200} height={200} alt='pria'/>
                    <div className="desc">
                    <p className="nama">Kavin Ardana Abiputra Supian</p>
                        <p className='orangtua'>Putra dari Asep Supian & Ibu Nurhodjiah</p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default TanggalPernikahan;