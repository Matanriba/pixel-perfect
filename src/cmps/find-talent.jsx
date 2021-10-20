import findTalentPattern from '../assets/img/bg-pattern-home-2.svg'

export function FindTalent() {

    return (
        <section className="find-talent flex column">
            <div className="text-container flex">
                <h1>
                    Find the best <span>talent</span>
                </h1>
                <div className="find-talent-text flex column">
                    <p>Finding the right people and building high performing teams can be hard. Most companies aren't tapping into the abundance of global talent.</p>
                    <p>We're about to change that</p>
                </div>
            </div>
            <div className="img-container">
                <img src={findTalentPattern} alt="pattern" />
            </div>
        </section>
    )
}