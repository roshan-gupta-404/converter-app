function convertLength(value, from, to) {
    const meterToOther = {
        // values of one meter into other lenth units.
        mts: 1,
        kilomts: 0.001,
        cmts: 100,
        millimts: 1000,
        micromts: 1e6,
        nanomts: 1e9,
        mile: 0.000621371,
        yard: 1.09361,
        foot: 3.28084,
        inch: 39.3701,
        lightyear: 1.057e-16,
    };

    const otherToMeter = {
        // values of other length units into meter.
        mts: 1,
        kilomts: 1000,
        cmts: 0.01,
        millimts: 0.001,
        micromts: 1e-6,
        nanomts: 1e-9,
        mile: 1609.34,
        yard: 0.9144,
        foot: 0.3048,
        inch: 0.0254,
        lightyear: 9.461e15,
    };
    if (to === 'mts') {
        return value * (otherToMeter[from])
    }
    else {
        return value * (otherToMeter[from]) * (meterToOther[to])
    }
}

export default convertLength