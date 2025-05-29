import * as React from "react";

type Props = {
    setShowCookies: React.Dispatch<React.SetStateAction<boolean>>
}

const Cookies = ({setShowCookies}: Props) => {
    return (
        <div className="flex justify-between items-center bg-black fixed bottom-0 left-0 right-0 px-7 py-4 z-10 opacity-90">
            <span className="flex gap-1 text-white text-base">
                <p>We use cookies to enhance your experience on our website. By using our website, you agree to our privacy policy.</p>
                <a href="https://policies.google.com/technologies/cookies?hl=en-US">Learn more</a>
            </span>
            <button
                className="my-button bg-white rounded-xl cursor-pointer"
                onClick={() => {
                    setShowCookies(false);
                    localStorage.setItem('cookies', 'false')
                }}
            >
                GOT IT
            </button>
        </div>
    );
};

export default Cookies;