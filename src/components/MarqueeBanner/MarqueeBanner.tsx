const MarqueeBanner = () => {
    const texts = [
        "СОЗДАЁМ ВМЕСТЕ • ДИВИМСЯ ИННОВАЦИЯМ • СТРОИМ БУДУЩЕЕ • ТЕХНОЛОГИИ И ИСКУССТВО • ВОПЛОЩАЕМ МЕЧТЫ В ЖИЗНЬ • МЫСЛИМ ГЛОБАЛЬНО",
        "КОДИРУЕМ С УВЛЕЧЕНИЕМ • ЦЕНИМ КАЖДЫЙ ПИКСЕЛЬ • ИГРАЕМ С ДАННЫМИ • РАЗРУШАЕМ ГРАНИЦЫ • СОТВОРЯЕМ ЧУДЕСА • ОТКРЫТЫ ДЛЯ ИДЕЙ",
        "НЕПРЕРЫВНОЕ ОБУЧЕНИЕ • РАЗВИТИЕ И РОСТ • ВМЕСТЕ К СВЕТЛОМУ БУДУЩЕМУ • ПРОГРАММИРУЕМ МИР • НОВЫЕ ВОЗМОЖНОСТИ КАЖДЫЙ ДЕНЬ • ОБЩАЕМСЯ С КОДОМ",
        "ВДОХНОВЛЯЕМ ИННОВАЦИЯМИ • ПРЕОДОЛЕВАЕМ ВЫЗОВЫ • СТРОИМ КОД И СООБЩЕСТВО • СКЕТЧИМ, КОДИМ, СОЗДАЁМ • ДЕЛИМСЯ ЗНАНИЯМИ И ОПЫТОМ",
        "ХАКАТОНЫ КАЖДУЮ НЕДЕЛЮ • ПРОЕКТИРУЕМ БУДУЩЕЕ • ЖИВЁМ КРЕАТИВОМ • РАБОТАЕМ ИГРАЯ • МЕЧТАЕМ И РЕАЛИЗУЕМ • НЕТ ГРАНИЦ ДЛЯ ФАНТАЗИИ"
    ]
    return (
        <section>
            <div className="marquee p-2 border-t-[2px] border-b-[2px] border-white/50">
                <span className="marquee-content text-white/50 text-9xl" data-text={texts[0]}>{texts[0]}</span>
            </div>
            <div className="marquee p-2 border-b-[2px] border-white/50">
                <span className="marquee-content-reverse text-white/50 text-9xl" data-text={texts[1]}>{texts[1]}</span>
            </div>
            <div className="marquee p-2 border-b-[2px] border-white/50">
                <span className="marquee-content text-white/50 text-9xl" data-text={texts[2]}>{texts[2]}</span>
            </div>
            <div className="marquee p-2 border-b-[2px] border-white/50">
                <span className="marquee-content-reverse text-white/50 text-9xl" data-text={texts[3]}>{texts[3]}</span>
            </div>
            <div className="marquee p-2 border-b-[2px] border-white/50">
                <span className="marquee-content text-white/50 text-9xl" data-text={texts[4]}>{texts[4]}</span>
            </div>
        </section>
    );
};

export default MarqueeBanner;