import "./Menu.css";

function Menu() {
    const menuItems = [
        // ── Cakes ──────────────────────────────────────────────
        {
            id: 1,
            category: "Cakes",
            name: "Chocolate Cake",
            description: "Rich cocoa layers topped with creamy chocolate frosting and a dusting of cacao.",
            price: "$20",
        },
        {
            id: 2,
            category: "Cakes",
            name: "Vanilla Chiffon",
            description: "Light and airy chiffon cake with fresh vanilla bean cream and seasonal berries.",
            price: "$18",
        },
        {
            id: 3,
            category: "Cakes",
            name: "Carrot & Walnut",
            description: "Spiced carrot cake with cream cheese frosting and a crunch of toasted walnuts.",
            price: "$19",
        },

        // ── Pastries ───────────────────────────────────────────
        {
            id: 4,
            category: "Pastries",
            name: "Butter Croissant",
            description: "72-hour laminated dough, baked golden with a shattering crust and soft interior.",
            price: "$6",
        },
        {
            id: 5,
            category: "Pastries",
            name: "Pain au Chocolat",
            description: "Flaky pastry wrapped around a bar of Valrhona 70% dark chocolate.",
            price: "$7",
        },
        {
            id: 6,
            category: "Pastries",
            name: "Almond Financier",
            description: "Brown butter and almond flour petit gâteau, crisp outside, tender within.",
            price: "$5",
        },

        // ── Coffee ─────────────────────────────────────────────
        {
            id: 7,
            category: "Coffee",
            name: "Espresso",
            description: "Single origin, pulled at 9 bar with a rich golden crema.",
            price: "$4",
        },
        {
            id: 8,
            category: "Coffee",
            name: "Flat White",
            description: "Ristretto shot with silky steamed milk, poured with a delicate latte art.",
            price: "$6",
        },
        {
            id: 9,
            category: "Coffee",
            name: "Pour Over",
            description: "V60 single origin, slow-brewed to highlight floral and fruity notes.",
            price: "$8",
        },

        // ── Brunch ─────────────────────────────────────────────
        {
            id: 10,
            category: "Brunch",
            name: "Avocado Toast",
            description: "Sourdough, smashed avocado, poached egg, chilli flakes and za'atar.",
            price: "$14",
        },
        {
            id: 11,
            category: "Brunch",
            name: "Eggs Benedict",
            description: "Toasted brioche, smoked salmon, poached eggs and house hollandaise.",
            price: "$18",
        },
        {
            id: 12,
            category: "Brunch",
            name: "Granola Maison",
            description: "House-toasted granola with seasonal compote and honey yogurt.",
            price: "$12",
        },
    ];

    // get unique categories in the order they first appear
    const categories = [...new Set(menuItems.map((item) => item.category))];

    return (
        <section id="menu" className="menu">
            <div className="menu-container">

                {/* Header */}
                <div className="menu-header">
                    <span className="section-tag">What We Offer</span>
                    <h2 className="section-title">Our Menu</h2>
                    <p className="section-subtitle">
                        Every item is prepared fresh daily with care and quality ingredients.
                    </p>
                    <div className="divider" />
                </div>

                {/* Render one block per category */}
                {categories.map((category) => (
                    <div key={category} className="menu-category">

                        <h3 className="category-title">{category}</h3>

                        <div className="menu-grid">
                            {menuItems
                                .filter((item) => item.category === category)
                                .map((item) => (
                                    <div key={item.id} className="menu-card">
                                        <div className="menu-card-top">
                                            <h4 className="item-name">{item.name}</h4>
                                            <span className="item-price">{item.price}</span>
                                        </div>
                                        <p className="item-description">{item.description}</p>
                                    </div>
                                ))}
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}

export default Menu;