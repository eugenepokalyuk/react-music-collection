import { FC, useEffect, useState } from "react";

interface ShapeWidgetProps {
    visible: boolean
}

const ShapeWidget: FC<ShapeWidgetProps> = ({ visible }) => {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;

        if (showMessage) {
            timeoutId = setTimeout(() => {
                setShowMessage(false);
            }, 3000);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [showMessage]);

    const handleClick = () => {
        setShowMessage(true);
    };

    return (
        <div className={`fixed bottom-10 right-10 md:flex-1 flex justify-center mb-6 md:mb-0 shape-widget ${visible ? 'shape-widget-visible z-10' : 'shape-widget-hidden'}`} onClick={handleClick}>
            <div className="shape max-sm:w-24 max-sm:h-24 md:w-48 md:h-48 bg-blue-300 rounded-full"></div>

            <div className={`message ${showMessage ? "message-show" : "message-hidden"}`}>
                <h1>Привет!</h1>
                
                <p>Я помощник Евгения, умею только здороваться!</p>
            </div>
        </div>
    );
};

export default ShapeWidget;
