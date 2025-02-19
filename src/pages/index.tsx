import Header from '../components/header/Header';
import MainInfo from "@/components/mainInfo/MainInfo";
export default function Home() {
    return (
        <div className="home-page">
            <div className="">
                <Header/>
            </div>
            <div className="flex">
                <MainInfo/>
            </div>
        </div>
    );
}