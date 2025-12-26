import Header from "./components/Header.js";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="body">
        <section className="main_sec">
          <span className="h_text_home">Привет, друг!</span>
          <p className="p_text_home">
            На связи команда дизайна СС ИИТММ, год почти закончился, а это
            значит время подвести итоги, что-то ещё там ляляля пупуупукпккпв.
          </p>
        </section>
        <Link href="/about">
          <button className="button_main">посмотреть статистику!</button>
        </Link>
      </main>
      <footer className="gifts">
        <img className="gift_img" src="/pink_gift.svg"></img>
        <img className="gift_img" src="/red_gift.svg"></img>
        <img className="gift_img" src="/yellow_gift.svg"></img>
      </footer>
    </div>
  );
}
