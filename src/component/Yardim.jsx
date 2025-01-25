import React, { useState } from 'react';
import "../css/yardim.css";

function Yardim() {

    const data = [
        {
            id: 1,
            basliq: "Su quyusu",
            aciqlama: "İnsanlar bir qurtum su üçün kilometrlərlə yol qət etməli olurlar.",
            sekil: "https://static.kardeselidernegi.org.tr/files/2021/11/serbest-su-kuyusu-bagisi.jpg"
        },
        {
            id: 2,
            basliq: "Çeşmə suyu",
            aciqlama: "Su bütün canlılar üçün əsas ehtiyacdır.",
            sekil: "https://static.kardeselidernegi.org.tr/files/2021/11/sadirvanli-su-kuyusu-serbest-bagis-2.jpg"
        },
        {
            id: 3,
            basliq: "Ərzaq yardımı",
            aciqlama: "İnsanların ərzaq yardımına ehtiyacı var.",
            sekil: "https://static.kardeselidernegi.org.tr/files/2020/09/erzak-bagisi.jpg"
        },
        {
            id: 4,
            basliq: "Gigiyena paketi",
            aciqlama: "Təmizlik və Gigiyena Setlərinə hər zamankindən daha çox ehtiyacımız var.",
            sekil: "https://static.kardeselidernegi.org.tr/files/2020/11/hijyen-paketi--4.jpg"
        },
        {
            id: 5,
            basliq: "Təhsil dəstəyi",
            aciqlama: "Dünyanın bir çox ölkələrində milyonlarla uşaq təhsildən məhrum böyüyür.",
            sekil: "https://static.kardeselidernegi.org.tr/files/2021/11/egitim-destegi-6.jpg"
        },
        {
            id: 6,
            basliq: "Uşaq bezi",
            aciqlama: "Körpələrin sağlam böyüməsi üçün hər gün təxminən 5 uşaq bezi lazımdır.",
            sekil: "https://static.kardeselidernegi.org.tr/files/2020/10/bebek-bezi-2.jpg"
        }
    ];


    const [sebet, setSebet] = useState([]);
    const [miqdar, setMiqdar] = useState({});


    const SebeteAt = (item) => {
        const miqdarValue = miqdar[item.id] || 0;
        if (miqdarValue > 0) {
            const uniqueId = `${item.id}-${Date.now()}`;
            const newItem = { ...item, miqdar: parseFloat(miqdarValue), uniqueId };
            setSebet([...sebet, newItem]);
            setMiqdar({ ...miqdar, [item.id]: "" });
        } else {
            alert("Bir dəyər girin");
        }
    };

    const SebetdenSil = (uniqueId) => {
        setSebet(sebet.filter(item => item.uniqueId !== uniqueId));
    };

    const InputChange = (id, value) => {
        setMiqdar({ ...miqdar, [id]: value });
    };

    const toplam = sebet.reduce((acc, item) => acc + item.miqdar, 0);

    return (
        <div className='yardim'>
            <div className='sebet'>
                <div className='sebet-daxil'>
                    {sebet.length === 0 ? (
                        <p style={{ marginTop: "30px" }}>Səbət boşdur <b>!</b></p>
                    ) : (
                        <ul>
                            {sebet.map((item) => (
                                <li key={item.uniqueId}>
                                    <span className='sebet-yazi'><img src={item.sekil} />{item.basliq} - {item.miqdar} ₼</span>
                                    <button onClick={() => SebetdenSil(item.uniqueId)} className='sil-button'>Sil</button>
                                </li>
                            ))}
                        </ul>
                    )}
                    <p className='toplam'><b>Toplam:</b> {toplam.toFixed(2)} ₼</p>
                </div>
            </div>

            <div>
                {data.map(item => (
                    <div className="cards-yardm" key={item.id}>
                        <div className='yardm-sekil'>
                            <img src={item.sekil} alt={item.basliq} />
                        </div>
                        <div className='basliq-aciqlama'>
                            <h2>{item.basliq}</h2>
                            <p>{item.aciqlama}</p>
                        </div>
                        <input
                            type="number"
                            placeholder='0.00'
                            value={miqdar[item.id] || ""}
                            onChange={(e) => InputChange(item.id, e.target.value)}
                        />
                        <button onClick={() => SebeteAt(item)}>Dəstək ol</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Yardim;