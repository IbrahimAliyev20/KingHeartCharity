import React, { useState } from 'react'
import '../css/content6.css'
function Content6() {

    const yazilar = [
        {
            id: 1,
            isim: "Maria, Boss",
            rey: "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito charity theme",
            sekil: "/images/musteri1.jpg"
        },
        {
            id: 2,
            isim: "Thomas, Partner",
            rey: "Sed leo nisl, posuere at molestie ac, suscipit auctor mauris quis metus tempor orci",
            sekil: "/images/musteri2.jpg"
        },
        {
            id: 3,
            isim: "Jane, Advisor",
            rey: "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito charity theme",
            sekil: "/images/musteri3.jpg"
        },
        {
            id: 4,
            isim: "Bob, Entreprenuer",
            rey: "Sed leo nisl, posuere at molestie ac, suscipit auctor mauris quis metus tempor orci",
            sekil: "/images/musteri4.jpg"
        },
    ];

    const [seciliRey, SetSeciliRey] = useState(yazilar[0]);

    const reyiDeyisdir = (yazi) => {
        SetSeciliRey(yazi)
    };


    return (
        <div className='rey-bolumu'>
            <h2>Happy Customers</h2>
            <p className='rey-metni'>"{seciliRey.rey}"</p>
            <p className='rey-adi'>{seciliRey.isim}</p>
            <div className='sekiller' style={{ display: "flex", justifyContent: "center" }}>
                {yazilar.map((yazi) => (
                    <img
                        key={yazi.id}
                        src={yazi.sekil}
                        alt={yazi.isim}
                        onClick={() => reyiDeyisdir(yazi)}
                    />
                ))}
            </div>
        </div>

    )
}

export default Content6