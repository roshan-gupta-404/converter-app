function convertMass(value, from, to) {
    console.log(typeof value, typeof from , typeof to);
    const gramToOther = {
        // values of one gram into other mass units.
        kgms: 0.001,
        gms: 1,
        mgms: 1000,
        metricton: 1e-6,
        longton: 9.84107012554618e-7,
        shortton: 1.102311310924388e-6,
        pound: 0.00220462,
        ounce: 0.03527396,
        carrat: 5,
        atomicmass: 6.02214076e+23,
    };

    const otherToGram = {
        // values of other mass units into gram.
        kgms: 1000,
        gms: 1,
        mgms: 0.001,
        metricton: 1e6,
        longton: 1.01604691e6,
        shortton: 907184.74,
        pound: 453.592,
        ounce: 28.3495,
        carrat: 0.2,
        atomicmass: 1 / 6.02214076e+23,
    };

    if (to === 'gms') {
        return value * (otherToGram[from]);
    } else {
        return value * (otherToGram[from]) * (gramToOther[to]);
    }
}

export default convertMass;
