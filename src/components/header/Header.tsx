import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '@/components/ui/sheet'; // Подключение Shadcn для sheet-компонента (burger menu)
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"; // Используем модальный компонент для авторизации
import { Input } from "@/components/ui/input"; // Для ввода email и пароля
import { Separator } from "@/components/ui/separator"; // Импорт separator из shadcn
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, } from "@/components/ui/navigation-menu"

const Header: React.FC = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false); // Состояние для открытия модального окна логина
    const [isAuthenticated] = useState(false); // Состояние авторизации пользователя

    return (
        <div className="w-full bg-white relative">
            <header className="relative flex justify-between items-center h-[170px] px-[100px] max-w-[1400px] m-auto bg-white">
                {/* Burger Menu */}
                <div className="mt-[0px]">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="w-[40px] h-[29px]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/burger.svg" alt="Menu" className="w-[40px] h-[29px]" />
                            </button>
                        </SheetTrigger>
                        <SheetContent className="flex bg-white h-[170px] ">

                                <SheetClose asChild>
                                    <button className="absolute left-[370px] top-[70px]">
                                        <img src="/x.svg" alt="Close" className="w-[24px] h-[24px]"/>
                                    </button>
                                </SheetClose>

                                <div className="flex gap-[80px] absolute left-[480px] top-[70px]">
                                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                    <a href="/about" className="text-lg">О проекте</a>
                                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                    <a href="/help" className="text-lg">Помощь</a>
                                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                    <a href="/faq" className="text-lg">FAQ</a>
                                </div>

                                <div className="flex items-center absolute right-[360px] top-[60px]">
                                    {/* Heart Button */}
                                    <div
                                        className="flex justify-center items-center w-[80px] h-[50px] bg-[#fff] rounded-full mr-[20px]">
                                        <img src="/like.svg" alt="Heart" className="w-[26px] h-[22px]"/>
                                    </div>

                                    {!isAuthenticated ? ( // Показываем кнопку только если пользователь не авторизован
                                        <Button
                                            className="w-[190px] h-[50px] bg-[#bf1313] rounded-[30px] text-white shadow-headb font-semibold text-[16px]"
                                            onClick={() => setIsLoginOpen(true)} // Открытие модального окна логина
                                        >
                                            Войти
                                        </Button>
                                    ) : (
                                        <div className="flex items-center mt-[0px]">
                                            <img src="/Avatarka.png" alt="User Avatar"
                                                 className="w-[50px] h-[50px] rounded-full"/>
                                            <NavigationMenu>
                                                <NavigationMenuList>
                                                    <NavigationMenuItem>
                                                        <NavigationMenuTrigger
                                                            className="text-[18px]">loginname</NavigationMenuTrigger>
                                                        <NavigationMenuContent
                                                            className="bg-white shadow-lg rounded-b-[20px] p-4">
                                                            <div
                                                                className="text-[12px] opacity-30 mb-2 mr-[110px]">Путешественнику
                                                            </div>
                                                            <ul className="space-y-1">
                                                                <li><a href="#"
                                                                       className="text-sm opacity-50 text-black text-[16px]">Мои
                                                                    заказы</a></li>
                                                            </ul>
                                                            <Separator className="my-2"/>
                                                            <div className="text-[12px] opacity-30 mb-2">Гиду</div>
                                                            <ul className="space-y-1 text-[16px] opacity-50">
                                                                <li><a href="#" className="text-sm text-black">Добавить
                                                                    экскурсию</a></li>
                                                                <li><a href="#"
                                                                       className="text-sm text-black">Статистика</a>
                                                                </li>
                                                                <li><a href="#" className="text-sm text-black">Мои
                                                                    предложения</a></li>
                                                                <li><a href="#"
                                                                       className="text-sm text-black">Заказы</a>
                                                                </li>
                                                                <li><a href="#"
                                                                       className="text-sm text-black">Встречи</a>
                                                                </li>
                                                                <li><a href="#"
                                                                       className="text-sm text-black">Календарь</a>
                                                                </li>
                                                            </ul>
                                                            <Separator className="my-2"/>
                                                            <ul className="space-y-1 text-[16px] opacity-50">
                                                                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                                                <li><a href="/profile"
                                                                       className="text-sm text-black">Профиль</a>
                                                                </li>
                                                                <li><a href="#"
                                                                       className="text-sm text-black">Выход</a></li>
                                                            </ul>
                                                        </NavigationMenuContent>
                                                    </NavigationMenuItem>
                                                </NavigationMenuList>
                                            </NavigationMenu>
                                        </div>
                                    )}
                                </div>
                        </SheetContent>


                    </Sheet>
                </div>

                {/* Лого по  центру */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-[0px]">
                    <Link href="/">
                        <img src="/logo.png" alt="Discover Central Asia" className="w-[80px] h-[100px] cursor-pointer" />
                    </Link>
                </div>

                <div className="flex items-center mt-[0px]">
                    {/* Heart Button */}
                    <div className="flex justify-center items-center w-[80px] h-[50px] bg-[#fff] rounded-full mr-[20px]">
                        <img src="/like.svg" alt="Heart" className="w-[26px] h-[22px]" />
                    </div>

                    {!isAuthenticated ? ( // Показываем кнопку только если пользователь не авторизован
                        <Button
                            className="w-[190px] h-[50px] bg-[#bf1313] rounded-[30px] text-white shadow-headb font-semibold text-[16px]"
                            onClick={() => setIsLoginOpen(true)} // Открытие модального окна логина
                        >
                            Войти
                        </Button>
                    ) : (
                        <div className="flex items-center mt-[0px]">
                            <img src="/Avatarka.png" alt="User Avatar" className="w-[50px] h-[50px] rounded-full" />
                            <NavigationMenu>
                                <NavigationMenuList >
                                    <NavigationMenuItem >
                                        <NavigationMenuTrigger className="text-[18px]">loginname</NavigationMenuTrigger>
                                        <NavigationMenuContent className="bg-white shadow-lg rounded-b-[20px] p-4">
                                            <div className="text-[12px] opacity-30 mb-2 mr-[110px]">Путешественнику</div>
                                            <ul className="space-y-1">
                                                <li><a href="#" className="text-sm opacity-50 text-black text-[16px]">Мои заказы</a></li>
                                            </ul>
                                            <Separator className="my-2" />
                                            <div className="text-[12px] opacity-30 mb-2">Гиду</div>
                                            <ul className="space-y-1 text-[16px] opacity-50">
                                                <li><a href="#" className="text-sm text-black">Добавить экскурсию</a></li>
                                                <li><a href="#" className="text-sm text-black">Статистика</a></li>
                                                <li><a href="#" className="text-sm text-black">Мои предложения</a></li>
                                                <li><a href="#" className="text-sm text-black">Заказы</a></li>
                                                <li><a href="#" className="text-sm text-black">Встречи</a></li>
                                                <li><a href="#" className="text-sm text-black">Календарь</a></li>
                                            </ul>
                                            <Separator className="my-2" />
                                            <ul className="space-y-1 text-[16px] opacity-50">
                                                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                                <li><a href="/profile" className="text-sm text-black">Профиль</a></li>
                                                <li><a href="#" className="text-sm text-black">Выход</a></li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>

                        </div>
                    )}
                </div>
            </header>

            {/* Модальное окно логина */}
            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                <DialogContent className="z-50">
                    <div className="bg-white rounded-[20px] p-[30px] w-[380px] h-[495px] relative shadow-lg">
                        <DialogClose asChild>
                            <button className="absolute mt-[6px] right-5">
                                <img src="/x.svg" alt="Close" className="w-[24px] h-[24px]" />
                            </button>
                        </DialogClose>

                        <h2 className="text-center text-[28px] font-medium font-montserrat">Войти</h2>

                        <form className=" mt-[25px] font-montserrat">
                            <div className="space-y-3 mb-[40px]">
                                <Input
                                    type="email"
                                    placeholder="Электронный адрес"
                                    className="w-full border border-gray-300 h-[50px] rounded-[40px]  focus:ring-2 focus:ring-[#334E9F] outline-none"
                                />

                                <Input
                                    type="password"
                                    placeholder="Пароль"
                                    className="w-full border border-gray-300 h-[50px] rounded-[40px]  focus:ring-2 focus:ring-[#334E9F] outline-none"
                                />
                            </div>
                            <Button className="w-full bg-[#bf1313] text-white h-[50px] rounded-[40px]  hover:bg-[#2c3e90] transition">
                                Войти
                            </Button>
                        </form>

                        <div className="text-center mt-[20px] font-montserrat">
                            <p className="text-sm">
                                Нет аккаунта? <a href="/register" className="text-[#bf1313] border-b border-[#bf1313] hover:text-red-800 transition">Создать аккаунт</a>
                            </p>
                            <div className="flex items-center text-center justify-center gap-3 mt-[37px] ">
                                <Separator className="max-w-[90px]  bg-black opacity-20" />
                                <p className="opacity-20 text-[16px]  ">Или</p>
                                <Separator className="max-w-[90px]  bg-black opacity-20" />
                            </div>
                            <Button className="w-full bg-black font-montserrat text-white h-[50px] rounded-[40px] mt-[20px] p-2 hover:bg-gray-800 transition">
                                Вход с Google
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Header;