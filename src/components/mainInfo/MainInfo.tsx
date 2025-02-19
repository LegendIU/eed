import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const MainInfo: React.FC = () => {
    // step: 0 - первый экран с вопросом и ответами
    // step: 1 - второй экран с правильным ответом, аудио и текстом
    // step: 2 - третий экран с информацией о Рождественской улице
    const [step, setStep] = useState<number>(0);
    const [format, setFormat] = useState<string>("");

    const handleAnswerClick = () => {
        // Переходим на второй экран после ответа
        setStep(1);
    };

    const handleContinueClickFromSecond = () => {
        // Переходим на третий экран после второго экрана
        setStep(2);
    };

    const handleContinueFromThird = () => {
        // К примеру, вернемся на первый шаг или сделаем что-то еще
        setStep(3);
    };
    const handleContinueFrom4 = () => {
        // К примеру, вернемся на первый шаг или сделаем что-то еще
        setStep(4);
    };
    const handleContinueFrom5 = () => {
        // К примеру, вернемся на первый шаг или сделаем что-то еще
        setStep(5);
    };
    const handleContinueFrom6 = () => {
        // К примеру, вернемся на первый шаг или сделаем что-то еще
        setStep(0);
    };

    return (
        <div className="w-full bg-white py-[50px] pb-[100px] shadow-muuu rounded-[40px] mx-[120px] my-[50px]">
            {step === 0 && (
                // Первый экран: вопрос с выбором ответа
                <div>
                    <div className="flex justify-center items-start m-auto w-[1100px]">
                        <p className="text-[30px] font-semibold opacity-70">
                            Что за чушпан изображен на фотке?
                        </p>
                    </div>
                    <div className="flex justify-center items-start m-auto w-[1200px] mt-[50px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/Gorkiy.jpeg"
                            alt="Gorkiy"
                            className="w-[300px] h-[370px] rounded-[20px] shadow-places_shad"
                        />
                        {/* Панель выбора */}
                        <div className="flex flex-col gap-[20px] ml-[90px]">
                            <div className="flex gap-[20px] ">
                                {/* Пушкин */}
                                <div
                                    onClick={() => setFormat("pushkin")}
                                    className={`cursor-pointer border-[2px] ${
                                        format === 'pushkin' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                    } rounded-[8px] p-[16px] flex justify-between w-[340px] h-[110px] transition-colors`}
                                >
                                    <div>
                                        <div className="flex gap-[90px]">
                                            <h2
                                                className={`text-[18px] font-semibold ${
                                                    format === 'pushkin' ? 'text-[#bf1313]' : 'text-[#777]'
                                                }`}
                                            >
                                                Александр Пушкин
                                            </h2>
                                            <div
                                                className={`h-[18px] w-[18px] border-2 rounded-full transition-colors flex justify-center items-center ${
                                                    format === 'pushkin' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                                } ml-[16px]`}
                                            >
                                                {format === 'pushkin' && (
                                                    <div className="h-[13px] w-[13px] bg-[#bf1313] rounded-full"/>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-[12px] text-[#777]">
                                            Чувак отец русской демократии просто о май гад бьюти джуси на тусе
                                        </p>
                                    </div>
                                </div>

                                {/* Горький */}
                                <div
                                    onClick={() => setFormat("gorkiy")}
                                    className={`cursor-pointer border-[2px] ${
                                        format === 'gorkiy' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                    } rounded-[8px] p-[16px] flex justify-between w-[340px] h-[110px] transition-colors`}
                                >
                                    <div>
                                        <div className="flex gap-[115px]">
                                            <h2
                                                className={`text-[18px] font-semibold ${
                                                    format === 'gorkiy' ? 'text-[#bf1313]' : 'text-[#777]'
                                                }`}
                                            >
                                                Максим Горький
                                            </h2>
                                            <div
                                                className={`h-[18px] text-end w-[18px] border-2 rounded-full mt-[5px] transition-colors flex justify-center items-center ${
                                                    format === 'gorkiy' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                                } ml-[16px]`}
                                            >
                                                {format === 'gorkiy' && (
                                                    <div className="h-[13px] w-[13px] bg-[#bf1313] rounded-full"/>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-[12px] text-[#777]">
                                            Алеша Пешков тоже норм тип но ответ точно не он
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-[20px] mt-[30px]">
                                {/* Толстой */}
                                <div
                                    onClick={() => setFormat("tolstoy")}
                                    className={`cursor-pointer border-[2px] ${
                                        format === 'tolstoy' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                    } rounded-[8px] p-[16px] flex justify-between w-[340px] h-[110px] transition-colors`}
                                >
                                    <div>
                                        <div className="flex">
                                            <h2
                                                className={`text-[18px] font-semibold ${
                                                    format === 'tolstoy' ? 'text-[#bf1313]' : 'text-[#777]'
                                                }`}
                                            >
                                                Лев толстой
                                            </h2>
                                            <div
                                                className={`h-[18px] w-[18px] mt-[5px] ml-[170px] border-2 rounded-full transition-colors flex justify-center items-center ${
                                                    format === 'tolstoy' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                                } ml-[16px]`}
                                            >
                                                {format === 'tolstoy' && (
                                                    <div className="h-[13px] w-[13px] bg-[#bf1313] rounded-full"/>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-[12px] text-[#777]">
                                            Такую здоровую тему написал, что я не стал читать
                                        </p>
                                    </div>
                                </div>

                                {/* Минин */}
                                <div
                                    onClick={() => setFormat("minin")}
                                    className={`cursor-pointer border-[2px] ${
                                        format === 'minin' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                    } rounded-[8px] p-[16px] flex justify-between w-[340px] h-[110px] transition-colors`}
                                >
                                    <div>
                                        <div className="flex">
                                            <h2
                                                className={`text-[18px] font-semibold ${
                                                    format === 'minin' ? 'text-[#bf1313]' : 'text-[#777]'
                                                }`}
                                            >
                                                Кузьма Минин
                                            </h2>
                                            <div
                                                className={`h-[18px] w-[17.5px] ml-[150px] mt-[5px] border-2 rounded-full transition-colors flex justify-center items-center ${
                                                    format === 'minin' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                                } ml-[16px]`}
                                            >
                                                {format === 'minin' && (
                                                    <div className="h-[13px] w-[13px] bg-[#bf1313] rounded-full"/>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-[12px] text-[#777]">
                                            Чувак фул Россию защитил, не тип а просто сигма мен
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full justify-end mt-[30px]">
                                <Button
                                    onClick={handleAnswerClick}
                                    className="w-[340px] bg-[#bf1313] font-semibold shadow-muuu text-white h-[50px] rounded-[40px]  hover:bg-[#cf0c0c ] transition"
                                >
                                    Ответить
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {step === 1 && (
                // Второй экран: правильный ответ, аудио, текст (без изменений)
                <div className="w-full flex flex-col items-center justify-center gap-[30px]">
                    <p className="text-[30px] font-semibold opacity-70">
                        Правильный ответ: Максим Горький
                    </p>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2">
                            <audio controls className="outline-none">
                                <source src="/aaa.wav" type="audio/wav"/>
                                Ваш браузер не поддерживает аудио элемент.                                Ваш браузер не поддерживает аудио элемент.
                            </audio>
                        </div>
                        <div className="mt-[20px] text-center">
                            <p className="text-[#777]">
                                Вот тут какой-то мой текст, объяснение почему это Горький, какая была логика и почему так.
                                Добавим ещё детальную информацию и так далее...
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full justify-end mt-[30px] pr-[120px]">
                        <Button
                            onClick={handleContinueClickFromSecond}
                            className="w-[340px] bg-[#bf1313] font-semibold shadow-muuu text-white h-[50px] rounded-[40px] hover:bg-[#cf0c0c] transition"
                        >
                            Продолжить
                        </Button>
                    </div>
                </div>
            )}

            {step === 2 && (
                // Третий экран: Рождественская улица - фото слева, текст справа
                <div>
                    <div className="flex justify-center items-start m-auto w-[1100px]">
                        <p className="text-[30px] font-semibold opacity-70">
                            Рождественская улица
                        </p>
                    </div>
                    <div className="flex justify-center items-start gap-[40px] m-auto w-[1200px] mt-[50px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/Screenshot_20241208_233054.png"
                            alt="Rozda"
                            className="w-[400px] h-[370px] rounded-[20px] shadow-places_shad"
                        />
                        <img
                            src="/Screenshot_20241208_233458.png"
                            alt="Rozda"
                            className="w-[450px] h-[370px] rounded-[20px] shadow-places_shad"
                        />
                        <div className="flex flex-col gap-[20px] w-[700px]">
                            <p className="text-[#777]">
                                Сама улица Рождественская хранит в себе множество тайн. Здесь обитают
                                разномастные призраки. Почти у каждого дома есть своя легенда, но самая поэтичная
                                и убедительная конечно же «Пиковая дама» <br/>
                                «2 сентября 1833 года Нижний Новгород посетил А.С. Пушкин. На улице
                                Рождественская он видел дом С.В. Строгановой, дочери княгини Голицыной,
                                послужившей прообразом Пиковой дамы»
                            </p>
                            <div className="flex w-full justify-end mt-[100px] pr-[50px]">
                                <Button
                                    onClick={handleContinueFromThird}
                                    className="w-[340px] bg-[#bf1313] font-semibold shadow-muuu text-white h-[50px] rounded-[40px] hover:bg-[#cf0c0c] transition"
                                >
                                    Продолжить
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            )}
            {step === 3 && (
                // Третий экран: Рождественская улица - фото слева, текст справа
                <div>
                    <div className="flex justify-center items-start m-auto w-[1100px]">
                        <p className="text-[30px] font-semibold opacity-70">
                            «2 сентября 1833 года Нижний Новгород посетил А.С. Пушкин. На улице
                            Рождественская он видел дом С.В. Строгановой, дочери княгини Голицыной,
                            послужившей прообразом Пиковой дамы»
                        </p>
                    </div>
                    <div className="flex justify-center items-start gap-[40px] m-auto w-[1200px] mt-[50px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/Screenshot_20241208_234351.png"
                            alt="Rozda"
                            className="w-[450px] h-[370px] rounded-[20px] shadow-places_shad"
                        />
                        <div className="flex flex-col gap-[20px] w-[700px]">
                            <p className="text-[#777]">
                                Именно так звучит надпись на фасаде здания. И всё же какое отношение имеет
                                Пушкин к усадьбе Строгановых?
                                По пути в Оренбург в сентябре 1833 года, поэт провел два дня в Нижнем Новгороде.
                                Именно вдохновившись историей усадьбы он написал знаменитую повесть .
                                Наталья Голицына , мать Софии Строгановой, известная как усатая княгиня, очень
                                любила азартные игры. Однажды, будучи в Париже она проиграла в карты всё своё
                                состояние. Сначала она впала в отчаяние, но вскоре сумела отыграться. В этом ей
                                помог некий граф Сен-Жермен. По легенде княгиня продала душу дьяволу, приятелю
                                графа за счастливую комбинацию-тройка, семёрка, туз. Однако тяжесть
                                ответственности легла на плечи её дочери-Софии Строгановой. В 1814 году погиб её
                                сын, а ровно через три года и муж. По одной из версий она же и рассказала писателю
                                эту историю, передав проклятье уже ему. Пушкин погиб на дуэли через три года после
                                выпуска «Пиковой дамы». Но на этом совпадения не заканчиваются. Ещё через три
                                года от холеры скончался Чайковский, поставивший пьесу по мотивам повести. Но, к
                                счастью через аудио гиды проклятье не передаётся, так что беспокоиться не о чем.
                                Если вы конечно не станете играть в азартные игры. Но вы можете побеспокоиться за
                                автора. Мы переписывали этот текст сначала 3 раза, потом 7, потом туз…Даже без
                                помощи дьявола!
                            </p>
                        </div>

                    </div>

                    <div className="flex w-full justify-end mt-[40px] pr-[50px]">
                        <div className="flex items-center pr-[100px]">
                            <audio controls className="outline-none">
                                <source src="/Пиковая дама-enhanced-v2.wav" type="audio/wav"/>
                                Ваш браузер не поддерживает аудио элемент.
                            </audio>
                        </div>
                        <Button
                            onClick={handleContinueFrom4}
                            className="w-[340px] bg-[#bf1313] font-semibold shadow-muuu text-white h-[50px] rounded-[40px] hover:bg-[#cf0c0c] transition"
                        >
                            Продолжить
                        </Button>
                    </div>

                </div>
            )}
            {step === 4 && (
                // Первый экран: вопрос с выбором ответа
                <div>
                    <div className="flex justify-center items-start m-auto w-[1100px]">
                        <p className="text-[30px] font-semibold opacity-70">
                            Кто поставил пьесу по мотивам повести Пушкина «Пиковая дама»? </p>
                    </div>
                    <div className="flex justify-center items-start m-auto w-[1200px] mt-[50px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/photo_2024-12-08_23-53-21.jpg"
                            alt="Gorkiy"
                            className="w-[270px] h-[370px] rounded-[20px] shadow-places_shad"
                        />
                        {/* Панель выбора */}
                        <div className="flex flex-col gap-[20px] ml-[90px]">
                            <div className="flex gap-[20px] ">
                                {/* Пушкин */}
                                <div
                                    onClick={() => setFormat("pushkin")}
                                    className={`cursor-pointer border-[2px] ${
                                        format === 'pushkin' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                    } rounded-[8px] p-[16px] flex justify-between w-[340px] h-[110px] transition-colors`}
                                >
                                    <div>
                                        <div className="flex gap-[90px]">
                                            <h2
                                                className={`text-[18px] font-semibold ${
                                                    format === 'pushkin' ? 'text-[#bf1313]' : 'text-[#777]'
                                                }`}
                                            >
                                                Чайковский Петр И.
                                            </h2>
                                            <div
                                                className={`h-[18px] w-[18px] border-2 rounded-full transition-colors flex justify-center items-center ${
                                                    format === 'pushkin' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                                } ml-[16px]`}
                                            >
                                                {format === 'pushkin' && (
                                                    <div className="h-[13px] w-[13px] bg-[#bf1313] rounded-full"/>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-[12px] text-[#777]">
                                            Чувак отец русской демократии просто о май гад бьюти джуси на тусе
                                        </p>
                                    </div>
                                </div>

                                {/* Горький */}
                                <div
                                    onClick={() => setFormat("gorkiy")}
                                    className={`cursor-pointer border-[2px] ${
                                        format === 'gorkiy' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                    } rounded-[8px] p-[16px] flex justify-between w-[340px] h-[110px] transition-colors`}
                                >
                                    <div>
                                        <div className="flex gap-[115px]">
                                            <h2
                                                className={`text-[18px] font-semibold ${
                                                    format === 'gorkiy' ? 'text-[#bf1313]' : 'text-[#777]'
                                                }`}
                                            >
                                                Максим Горький
                                            </h2>
                                            <div
                                                className={`h-[18px] text-end w-[18px] border-2 rounded-full mt-[5px] transition-colors flex justify-center items-center ${
                                                    format === 'gorkiy' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                                } ml-[16px]`}
                                            >
                                                {format === 'gorkiy' && (
                                                    <div className="h-[13px] w-[13px] bg-[#bf1313] rounded-full"/>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-[12px] text-[#777]">
                                            Алеша Пешков тоже норм тип но ответ точно не он
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-[20px] mt-[30px]">
                                {/* Толстой */}
                                <div
                                    onClick={() => setFormat("tolstoy")}
                                    className={`cursor-pointer border-[2px] ${
                                        format === 'tolstoy' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                    } rounded-[8px] p-[16px] flex justify-between w-[340px] h-[110px] transition-colors`}
                                >
                                    <div>
                                        <div className="flex">
                                            <h2
                                                className={`text-[18px] font-semibold ${
                                                    format === 'tolstoy' ? 'text-[#bf1313]' : 'text-[#777]'
                                                }`}
                                            >
                                                Лев толстой
                                            </h2>
                                            <div
                                                className={`h-[18px] w-[18px] mt-[5px] ml-[170px] border-2 rounded-full transition-colors flex justify-center items-center ${
                                                    format === 'tolstoy' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                                } ml-[16px]`}
                                            >
                                                {format === 'tolstoy' && (
                                                    <div className="h-[13px] w-[13px] bg-[#bf1313] rounded-full"/>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-[12px] text-[#777]">
                                            Такую здоровую тему написал, что я не стал читать
                                        </p>
                                    </div>
                                </div>

                                {/* Минин */}
                                <div
                                    onClick={() => setFormat("minin")}
                                    className={`cursor-pointer border-[2px] ${
                                        format === 'minin' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                    } rounded-[8px] p-[16px] flex justify-between w-[340px] h-[110px] transition-colors`}
                                >
                                    <div>
                                        <div className="flex">
                                            <h2
                                                className={`text-[18px] font-semibold ${
                                                    format === 'minin' ? 'text-[#bf1313]' : 'text-[#777]'
                                                }`}
                                            >
                                                Кузьма Минин
                                            </h2>
                                            <div
                                                className={`h-[18px] w-[17.5px] ml-[150px] mt-[5px] border-2 rounded-full transition-colors flex justify-center items-center ${
                                                    format === 'minin' ? 'border-[#bf1313]' : 'border-[#E0E0E0]'
                                                } ml-[16px]`}
                                            >
                                                {format === 'minin' && (
                                                    <div className="h-[13px] w-[13px] bg-[#bf1313] rounded-full"/>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-[12px] text-[#777]">
                                            Чувак фул Россию защитил, не тип а просто сигма мен
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full justify-end mt-[30px]">
                                <Button
                                    onClick={handleContinueFrom5}
                                    className="w-[340px] bg-[#bf1313] font-semibold shadow-muuu text-white h-[50px] rounded-[40px]  hover:bg-[#cf0c0c ] transition"
                                >
                                    Ответить
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {step === 5 && (
                // Второй экран: правильный ответ, аудио, текст (без изменений)
                <div className="w-full flex flex-col items-center justify-center gap-[30px]">
                    <p className="text-[30px] font-semibold opacity-70">
                        Правильный ответ: Чайковский Петр Ильич
                    </p>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2">
                            <Play className="w-6 h-6 text-[#bf1313]" />
                            <audio controls className="outline-none">
                                <source src="/audio/sample-voice.mp3" type="audio/mpeg" />
                                Ваш браузер не поддерживает аудио элемент.
                            </audio>
                        </div>
                        <div className="mt-[20px] text-center">
                            <p className="text-[#777]">
                                Вот тут какой-то мой текст, объяснение почему это Чайковский, какая была логика и почему так.
                                Добавим ещё детальную информацию и так далее...
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full justify-end mt-[30px] pr-[120px]">
                        <Button
                            onClick={handleContinueFrom6}
                            className="w-[340px] bg-[#bf1313] font-semibold shadow-muuu text-white h-[50px] rounded-[40px] hover:bg-[#cf0c0c] transition"
                        >
                            Продолжить
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainInfo;
