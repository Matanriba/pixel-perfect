import person from '../assets/img/icon-person.svg';
import cog from '../assets/img/icon-cog.svg';
import chart from '../assets/img/icon-chart.svg';
import pattern from '../assets/img/bg-pattern-home-3.svg';

export function BuildManage() {

    return (
        <div className="color-container">
            <section className="build-manage flex">
                <h3>
                    Build & manage distributed teams like no one else.
                </h3>
                <div className="right-container flex column">
                    <div className="example-preview">
                        <div className="img-container">
                            <img src={person} alt="person" />
                        </div>
                        <div className="example-preview-text">
                            <p className="preview-header">Experienced Individuals</p>
                            <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                        </div>
                    </div>
                    <div className="example-preview">
                        <div className="img-container">
                            <img src={cog} alt="cog" />
                        </div>
                        <div className="example-preview-text">
                            <p className="preview-header">Easy to Implement</p>
                            <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                        </div>
                    </div>
                    <div className="example-preview">
                        <div className="img-container">
                            <img src={chart} alt="chart" />
                        </div>
                        <div className="example-preview-text">
                            <p className="preview-header">Enhanced Productivity</p>
                            <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                        </div>
                    </div>
                </div>
            </section>
            <img className="pattern" src={pattern} alt="pattern" />
        </div>
    )
}