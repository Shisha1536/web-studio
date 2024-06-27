import Link from 'next/link';
import style from "../../styles/navigation.module.css";

export default function Navigation() {
    return (
    <nav>
        <ul className={style.list}>
            <li>
                <Link href="/" className={style.nav}>
                    Главная
                </Link>
            </li>
            <li>
                <Link href="/about" className={style.nav}>
                    О компании
                </Link>
            </li>
            <li>
                <Link href="/contacts" className={style.nav}>
                    Контакты
                </Link>
            </li>
        </ul>
    </nav>
    );
}