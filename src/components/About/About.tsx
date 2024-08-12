const About = () => {
    return (
        <>
            <div className="container mx-auto flex flex-col md:flex-row items-center py-12">
                <div className="md:flex-1 flex justify-center mb-6 md:mb-0">
                    <div className="shape max-sm:w-60 max-sm:h-60 w-48 h-48 bg-blue-300 rounded-full"></div>
                </div>
                
                <div className="md:flex-1 px-6">
                    <p className="text-gray-600 text-lg">Я очень рад поделиться со всеми вами своей музыкой. Ничто так не объединяет звук и душу, и я дорожу каждым моментом этого.</p>
                </div>
            </div>
        </>
    );
};

export default About;
