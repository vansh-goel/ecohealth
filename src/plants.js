import React from 'react';
import Header from './header';
import Footer from "./footer";

// Add pictures to /public/plants folder when adding more plants in here
const plantData = [
    {
        name: 'Aloe Vera',
        benefits: 'Great for skin, aids in digestion.',
        growthTips: 'Needs well-drained soil and bright light.',
        imageUrl: '/plants/aloe-vera.jpeg'
    },
    {
        name: 'Snake Plant',
        benefits: 'Improves indoor air quality.',
        growthTips: 'Thrives in indirect light, water when soil is dry.',
        imageUrl: '/plants/snake-plant.png'
    },
    {
        name: 'Lavender',
        benefits: 'Relieves stress and anxiety, improves sleep.',
        growthTips: 'Prefers full sun and well-draining soil.',
        imageUrl: '/plants/lavender.avif'
    },
    {
        name: 'Spider Plant',
        benefits: 'Purifies air, non-toxic to pets.',
        growthTips: 'Thrives in bright, indirect sunlight.',
        imageUrl: '/plants/spider-plant.avif'
    },
    {
        name: 'Peace Lily',
        benefits: 'Improves air quality, can boost a room\'s humidity.',
        growthTips: 'Prefers shade and weekly watering.',
        imageUrl: '/plants/peace-lily.avif'
    },
    {
        name: 'Basil',
        benefits: 'Repels mosquitoes, flavorful culinary herb.',
        growthTips: 'Needs full sun and regular watering.',
        imageUrl: '/plants/basil.avif'
    },
    {
        name: 'Mint',
        benefits: 'Aids in digestion, freshens breath.',
        growthTips: 'Grows quickly in partial shade, keep soil moist.',
        imageUrl: '/plants/mint.avif'
    },
    {
        name: 'Rosemary',
        benefits: 'Improves memory, anti-inflammatory properties.',
        growthTips: 'Prefers full sun and well-drained soil.',
        imageUrl: '/plants/rosemary.jpeg'
    },
    {
        name: 'Thyme',
        benefits: 'Antibacterial, good for immune health.',
        growthTips: 'Prefers full sun and light, well-drained soil.',
        imageUrl: '/plants/thyme.jpeg'
    },
    {
        name: 'Chamomile',
        benefits: 'Promotes relaxation and sleep, good for digestion.',
        growthTips: 'Needs full sun and well-drained soil.',
        imageUrl: '/plants/chamomile.jpeg'
    },
    {
        name: 'Lemon Balm',
        benefits: 'Calming herb, helps relieve stress.',
        growthTips: 'Thrives in partial shade, keep soil moist.',
        imageUrl: '/plants/lemon-balm.jpeg'
    },
    {
        name: 'Sage',
        benefits: 'Antioxidant properties, supports oral health.',
        growthTips: 'Needs full sun and light, dry soil.',
        imageUrl: '/plants/sage.jpeg'
    },
    {
        name: 'Chives',
        benefits: 'Rich in vitamins and minerals, enhances flavor.',
        growthTips: 'Prefers full sun and moist, well-drained soil.',
        imageUrl: '/plants/chives.jpeg'
    },
    {
        name: 'Parsley',
        benefits: 'Rich in nutrients, supports bone health.',
        growthTips: 'Prefers full sun or partial shade, keep soil moist.',
        imageUrl: '/plants/parsley.jpeg'
    },
    {
        name: 'Cilantro',
        benefits: 'Rich in antioxidants, aids in digestion.',
        growthTips: 'Prefers full sun or light shade, well-drained soil.',
        imageUrl: '/plants/cilantro.jpeg'
    }
];

function Plants() {
    return (
        <div className="plants-page">
            <Header />
            <h1>Plant Database</h1>
            <div className="plant-cards-container">
                {plantData.map((plant, index) => (
                    <div key={index} className="plant-card">
                        <img src={plant.imageUrl} alt={plant.name} className="plant-image" />
                        <div className="plant-info">
                            <h2>{plant.name}</h2>
                            <p><strong>Benefits:</strong> {plant.benefits}</p>
                            <p><strong>Growth Tips:</strong> {plant.growthTips}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Plants;
