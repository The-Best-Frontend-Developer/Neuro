const Sixth = () => {
    return (
        <div className="flex flex-col">
            <svg className="w-[100vw] -mt-25 -mb-1" width="1439" viewBox="0 0 1439 79" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1439 78.9998V22.4887C1427.24 24.4369 1415.54 26.4998 1403.91 28.6776C1201.92 66.7776 976.589 66.7776 774.611 28.6776C572.622 -9.44462 347.303 -9.44462 145.314 28.6776C97.6378 37.6665 48.6541 44.5554 -1 49.2665V78.9998H1439Z"
                    fill="#64BAA1"/>
            </svg>
            <div className="flex justify-between items-center bg-[#64BAA1]">
                <div className="flex flex-col text-white gap-4 ml-30">
                    <h3 className="!font-normal leading-[45px]">There’s a science<br/> to the science.</h3>
                    <p className="text-xl">We have gone through dozens of formulations,<br/>processes and tests to ensure each gum
                        and<br/> mint we make delivers on our promise of getting<br/>you in the right state at the
                        right
                        time.
                    </p>
                    <a href="#" className="!underline text-[#0A644A]">HOW WE DO IT</a>
                </div>
                <img src="/SixthSection.png" alt="flower" className="-mt-45"/>
            </div>
        </div>
    );
};

export default Sixth;