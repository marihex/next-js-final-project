import Link from "next/link";
import './footer-styles.css'
import Image from "next/image";
import {getGenres} from "@/src/services/api.services";


export const FooterComponent = async () => {
    const data = await getGenres();
    const genres = data.genres
    return (
        <footer>
            <div className={'footer__container'}><Link href={'/'}><Image src={'/logo.svg'} alt={'logo'} height={80} width={150}/></Link>
                <div className='footer__links'>
                    <div className='footer__movies'>
                        <span className='text-lg'>Movies</span>
                        <ul className='flex flex-col gap-2'>
                            <li className="movie__item"><Link href={'/popular'}>Popular</Link></li>
                            <li className="movie__item"><Link href={'/upcoming'}>Upcoming</Link></li>
                            <li className="movie__item"><Link href={'/trending'}>Trending</Link></li>
                        </ul>
                    </div>
                    <div className='footer__genres__container'>
                        <span className='text-lg'>Genres</span>
                        <ul className='footer__genres'>
                            {
                                genres && genres.map(genre => (<li key={genre.id} className='genres__item'><Link
                                    href={`/genres` + genre.id.toString()}>{genre.name}</Link></li>))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};