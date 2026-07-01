import desktopImage from '../../assets/images/image-web-3-desktop.jpg';
import mobileImage from '../../assets/images/image-web-3-mobile.jpg';
import NewArticle from './NewArticle.jsx';
import OldArticle from './OldArticle.jsx';
import laptopTop from '../../assets/images/image-top-laptops.jpg';
import retroPc from '../../assets/images/image-retro-pcs.jpg';
import gamingGrowth from '../../assets/images/image-gaming-growth.jpg';

const newArticles = [
    {heading: 'Hydrogen VS Electric Cars', body: 'Will hydrogen-fueled cars ever catch up to EVs?'},
    {heading: 'The Downsides of AI Artistry', body: 'What are the possible adverse effects of on-demand AI image generation?'},
    {heading: 'Is VC Funding Drying Up?', body: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'},
]

const oldArticles = [
    {image: retroPc, number: '01', heading: 'Reviving Retro PCs', subheading: 'What happens when old PCs are given modern upgrades?'},
    {image: laptopTop, number: '02', heading: 'Top 10 Laptops of 2022', subheading: 'Our best picks for various needs and budgets.'},
    {image: gamingGrowth, number: '03', heading: 'The Growth of Gaming', subheading: 'How the pandemic has sparked fresh opportunities.'},
]
export default function Main(){
    return (
        <main>
            <div className='hero-section'>
                <div className='flex-column'>
                    <div className='hero-image'>
                        <picture>
                            <source srcSet={desktopImage} media='(orientation: landscape)'/>
                            <source srcSet={mobileImage} media='(orientation: portrait)'/>
                            <img src={desktopImage} alt="Hero Image"/>
                        </picture>
                    </div>
                    <section className='hero-text'>
                        <h1 className='fs-700 ff-sans fw-800' style={{lineHeight: '3.5rem'}}>The Bright Future of Web 3.0?</h1>
                        <article className='flex-column' style={{gap: '1.5rem'}}>
                            <p className='fs-400 ff-sans text-blue-2' style={{lineHeight: '1.5rem'}}>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                            <button className='small-button bg-red uppercase fw-700 text-white letter-space-03' style={{alignSelf: 'flex-start'}}>Read more</button>
                        </article>
                    </section>
                </div>
                <section className="text-white bg-blue-3 padding-inline-2 padding-block-1">
                    <h2 className="text-orange fw-700 fs-600 mb-1-5">New</h2>
                    <div className='new-articles'>
                        {newArticles.map(article=> <NewArticle {...article} />)}
                    </div>
                </section>
            </div>
            
            <section className="old-articles">
                {oldArticles.map(article => <OldArticle {...article} />)}
            </section>
    </main>
    )
}