import quotes from '../assets/img/icon-quotes.svg';
import kady from '../assets/img/avatar-kady.jpg';
import aiysha from '../assets/img/avatar-aiysha.jpg';
import arthur from '../assets/img/avatar-arthur.jpg';

export function SuccessStories() {
    return (
        <section className="success-stories">
            <h3>
                Delivering real results for top companies. Some of our <span>success stories.</span>
            </h3>
            <div className="stories flex">
                <div className="story-preview">
                    <img src={quotes} alt="quotes" />
                    <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                    <div className="user-avatar">
                        <span>Kady Baker</span>
                        <small>Product Manager at Bookmark</small>
                            <img src={kady} alt="" />
                    </div>
                </div>
                <div className="story-preview">
                    <img src={quotes} alt="quotes" />
                    <p>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                    <div className="user-avatar">
                        <span>Aiysha Reese</span>
                        <small>Founder of Manage</small>
                            <img src={aiysha} alt="" />
                    </div>
                </div>
                <div className="story-preview">
                    <img src={quotes} alt="quotes" />
                    <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                    <div className="user-avatar">
                        <span>Arthur Clarke</span>
                        <small>Co-founder of MyPhysio</small>
                            <img src={arthur} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}