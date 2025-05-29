type Section = {
    img: string,
    headline: string,
    paragraph: string,
    bgColor: string,
    button: string
}

const Fourth = () => {
    const sections: Section[] = [
        {
            img: '/FourthSection.png',
            headline: 'The Ideal State',
            paragraph: 'Some days, getting in the zone requires a boost – other days, we need to take it down a notch. Balance the ups and downs of your ambition with a combo pack of Energy & Focus and Calm & Clarity.',
            bgColor: 'white',
            button: 'SHOP NOW'
        },
        {
            img: '/FourthSection2.png',
            headline: 'In the zone. Every day.',
            paragraph: 'Never run out of Neuro with a monthly subscription. Members get 10% off and free shipping straight to your door.',
            bgColor: '#F1FAF6',
            button: 'SUBSCRIBE'
        }
    ]

    return (
        <div className="flex flex-col">
            {sections.map((el) => (
                <div className="flex justify-center items-center py-44 gap-40" style={{backgroundColor: el.bgColor}}>
                    <img src={el.img} alt="photo"/>
                    <div className="flex flex-col gap-6">
                        <h3 className="!font-normal">{el.headline}</h3>
                        <p className="w-101">{el.paragraph}</p>
                        <button className="my-button border-solid border-2 border-black">{el.button}</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Fourth;