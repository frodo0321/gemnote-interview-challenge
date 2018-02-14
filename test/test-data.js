

const product1 = {
    title: "Kinto Carat Coffee Dripper and Pot",
    images: [{
        label: null,
        url: "https://gemnote-images-production.s3-us-west-2.amazonaws.com/items/default_images/000/000/610/full_size/kinto_carat_coffee_dripper_and_pot.jpg?1510489804"
    }],
    information: [
        "4.4\" x 8\" x 5.5\"",
        "Superior stainless-steel and heat-resistant glass glass",
        "Set comes with a stainless-steel filter that allows for greater extraction of coffee oils than a paper filter, resulting in a richer and smoother coffee",
        "Pot, dripper, lid: microwave and dishwasher safe",
        "Filter, holder, silicone ring: dishwasher safe",
        "24.3oz"
    ],
    price: {
        amount: 6400,
        quantity: 1
    },
    category: "Drinkware"
}

const product2 = {
    title: "Patagonia Hybrid Jacket",
    images: [{
        label: "black patagonia jacket",
        url: "https://gemnote-images-production.s3-us-west-2.amazonaws.com/items/default_images/000/000/610/full_size/kinto_carat_coffee_dripper_and_pot.jpg?151048980://gemnote-images-production.s3-us-west-2.amazonaws.com/images/images/000/000/899/full_size/patagonia_women_s_adze_hybrid_jacket___black.jpg?1510663389"
    }, {
        label: "white patagonia jacket",
        url: "https://gemnote-images-production.s3-us-west-2.amazonaws.com/images/images/000/000/899/full_size/patagonia_women_s_adze_hybrid_jacket___black.jpg?1510663389"
    }],
    information: [
        "93% polyester/7% spandex stretch woven with fleece grid backer",
        "3-layer Polartec Windbloc stretch-woven polyester soft-shell with a DWR (durable water repellent) finish",
        "Stretchy, breathable, double-weave soft-shell fabric on side panels, underarms and cuffs",
        "High, harness- and pack-compatible handwarmer pockets and one interior chest pocket have brushed tricot lining",
    ],
    price: {
        amount: 18900,
        quantity: 1
    },
    category: "Apparel - Women's",
    types: {
        name: "Color",
        values: ["black", "white"],
        uiType: "squares"
    }
}

const product3 = {
    title: "Dick Taylor Bars",
    images: [{
        label: "Brown butter with nibs + sea salt",
        url: "https://gemnote-images-production.s3-us-west-2.amazonaws.com/images/images/000/001/717/full_size/dick_taylor_bars_with_inclusions___brown_butter_with_nibs___sea_salt.jpg?1510664223"
    }, {
        label: "Fleur De Sel",
        url: "https://gemnote-images-production.s3-us-west-2.amazonaws.com/images/images/000/001/716/full_size/dick_taylor_bars_with_inclusions___fleur_de_sel.jpg?1510664222"
    }, {
        label: "Black Fig",
        url: "https://gemnote-images-production.s3-us-west-2.amazonaws.com/images/images/000/001/715/full_size/dick_taylor_bars_with_inclusions___black_fig.jpg?1510664221"
    }, {
        label: "Maple Coconut",
        url: "https://gemnote-images-production.s3-us-west-2.amazonaws.com/images/images/000/001/714/full_size/dick_taylor_bars_with_inclusions___maple_coconut.jpg?1510664221"
    }],
    information: [
        "Using the finest cacao, and a modern take on traditional European technique, we are able to fully realize the potential of the beans we source.",
        "All of our chocolate is carefully crafted from the bean in our small factory in Northern California.",
        "2 oz"
    ],
    price: {
        amount: 850,
        quantity: 1
    },
    category: "Food/Beverage",
    types: {
        name: "Flavor",
        values: ["Brown butter with nibs + sea salt", "Fleur De Sel", "Black Fig", "Maple Coconut"],
        uiType: "dropdown"
    }
}

module.exports = [product1, product2, product3];
