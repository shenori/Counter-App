import "./OurStory.css";

function OurStory() {
    const milestones = [
        { year: "2009", event: "Founded with a dream and one espresso machine" },
        { year: "2012", event: "Expanded to full brunch menu and pastry kitchen" },
        { year: "2016", event: "Won our first Best Independent Café award" },
        { year: "2019", event: "Head barista reached World Barista Championship finals" },
        { year: "2023", event: "Celebrated 15 years and 15,000 happy guests" },
    ];

    const values = [
        {
            id: 1,
            icon: "🫘",
            title: "Ethically Sourced",
            description: "Every bean is selected directly from farmers we trust and visit personally.",
        },
        {
            id: 2,
            icon: "🤍",
            title: "Made with Care",
            description: "Every recipe is refined by hand — no shortcuts, no compromise.",
        },
        {
            id: 3,
            icon: "🌿",
            title: "Sustainability",
            description: "Zero-waste operations and compostable packaging across everything we do.",
        },
    ];

    return (
        <div className="our-story">

            {/* Hero Banner */}
            <div className="story-hero">
                <div className="story-hero-inner">
                    <span className="section-tag">Est. 2009</span>
                    <h1 className="story-hero-title">Our <em>Story</em></h1>
                    <div className="divider" />
                </div>
            </div>

            {/* Main Story */}
            <section className="story-section">
                <div className="story-grid">
                    <div className="story-image-box">
                        <div className="story-image-inner">
                            <span className="story-image-icon">☕</span>
                            <p className="story-image-caption">Where it all began</p>
                        </div>
                    </div>

                    <div className="story-text">
                        <blockquote className="story-quote">
                            "I opened this café not as a business — but as a love letter to mornings."
                        </blockquote>
                        <div className="divider story-divider" />
                        <p className="story-body">
                            In 2009, with little more than a dream and a battered espresso machine,
                            this café was born in the quiet corner of an old city street. What began
                            as a small passion project grew into a gathering place — for artists,
                            dreamers, and anyone who needed a moment of stillness in a noisy world.
                        </p>
                        <p className="story-body">
                            Every bean is sourced with intention. Every recipe is refined with care.
                            We believe the best café is one where you feel completely at home the
                            moment you walk through the door.
                        </p>
                        <p className="story-signature">— The Founder</p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="values-section">
                <div className="values-header">
                    <span className="section-tag">What We Stand For</span>
                    <h2 className="section-title">Our <em>Values</em></h2>
                </div>
                <div className="values-grid">
                    {values.map((value) => (
                        <div key={value.id} className="value-card">
                            <span className="value-icon">{value.icon}</span>
                            <h3 className="value-title">{value.title}</h3>
                            <p className="value-description">{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Timeline */}
            <section className="timeline-section">
                <div className="timeline-header">
                    <span className="section-tag">How We Got Here</span>
                    <h2 className="section-title">Our <em>Journey</em></h2>
                </div>
                <div className="timeline">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-year">{milestone.year}</div>
                            <div className="timeline-dot" />
                            <div className="timeline-event">{milestone.event}</div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}

export default OurStory;