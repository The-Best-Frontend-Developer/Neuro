type Card = {
    textColor: string,
    bgColor: string,
    image: string,
    headline: string,
}

const Second = () => {
    const cards: Card[] = [
        {textColor: 'white', bgColor: '#005466', image: '/Star.png', headline: 'ENERGY & FOCUS'},
        {textColor: '#C47B59', bgColor: '#F7D8BF', image: '/Sunset.png', headline: 'Calm & Clarity'},
        {textColor: '#64BAA1', bgColor: '#F1FAF6', image: '/StarAndSunset.png', headline: 'Ideal State'}
    ]
    return (
        <div className="flex flex-col gap-13">
            <div className="h-42 bg-[#F0FAF7]"></div>
            <div className="flex flex-col my-20 gap-13">
                <div className="flex flex-col items-center w-159 gap-4 mx-auto">
                    <h3 className="mb-2.5">We get the mental game.</h3>
                    <p className="text-xl text-center">That’s why we create products to help shift your mindset with
                        ease and flow. Our functional gum and mints are shortcuts to the ideal state of mind, delivering
                        just the right amount of what you need to energize, calm and focus your mind in the moment.</p>
                    <img src="/SecondSectionImage.png" alt="zone" loading="lazy"/>
                </div>
                <div className="flex flex-col items-center mx-auto gap-5">
                    <h3>Shop by function</h3>
                    <p className="text-base mb-6">Find the right products for any situation.</p>
                    <div className="flex gap-6">
                        {cards.map((el) => (
                            <div className={`flex flex-col items-center px-14 py-10 gap-10`}
                                 style={{backgroundColor: el.bgColor}}>
                                <img src={el.image} alt="photo"/>
                                <p className="text-sm" style={{color: el.textColor}}>{el.headline}</p>
                                <button className="p-2.5 w-45 text-xs bg-white border-2 border-solid border-black">SHOP
                                    NOW
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Second;