import pattern from '../assets/img/bg-pattern-home-6-about-5.svg';

export function GetStarted() {

    return (
        <section className="get-started">
            <img src={pattern} alt="pattern" />
            <h3>Ready to get started?</h3>
            <button>contact us</button>
        </section>
    )
}