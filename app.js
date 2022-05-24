const controlDeEscala = new ControlDeEscala("delayCalcForm");

const parseTimeAndFormat = function (timeToParse) {
    const parsedTime = moment(`1989-08-23 ${timeToParse}`, `YYYY-MM-DD HH:mm`)
    return parsedTime.format("HH:mm")
};

const parseTime = function (timeToParse) {
    //parse a string into a date format using moments
    const parsedTime = moment(`1989-08-23 ${timeToParse}`, `YYYY-MM-DD HH:mm`)
    return parsedTime
};

const getDuration = function (time1, time2) {
    let x = parseTime(time1);
    let y = parseTime(time2)
    const result = moment.duration(x.diff(y))
    // const result = parseTime(time1) - parseTime(time2)
    if (result >= 0) {
        return `+ ${result.as("minutes")}`
    }
    if (result < 0) {
        return `${result.as("minutes")}`
    }
};

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(
        new FormData(event.target)
    );

    const delayCode = data.DelayType;

    if (delayCode === "Basico") {

        STA = data.STA
        STD = data.STD
        OnBlocks = data.OnBlocks
        PreEmbarque = data.PreEmbarque
        IniDesEmbarque = data.IniDesEmbarque
        FinDesEmbarque = data.FinDesEmbarque
        PasajeIn = data.PasajeIn
        IniEmbarque = data.IniEmbarque
        FinEmbarque = data.FinEmbarque
        PasajeOut = data.PasajeOut
        CierreEmbarque = data.CierreEmbarque
        EntregaLID = data.EntregaLID
        CierrePuertasAC = data.CierrePuertasAC
        OffBlocks = data.OffBlocks

        const divContainer = document.querySelector("#divResult")
        const newParagraph = document.createElement("p");
        newParagraph.innerText = `STA ${parseTimeAndFormat(STA)}, STD ${parseTimeAndFormat(STD)} ATA STD ${getDuration(OnBlocks, STD)}
        1st pax off STD ${getDuration(IniDesEmbarque, STD)} / Last pax off STD ${getDuration(FinDesEmbarque, STD)} / total time: ${getDuration(FinDesEmbarque, IniDesEmbarque)} min
        1st pax on STD ${getDuration(IniEmbarque, STD)} / Last pax on at STD ${getDuration(FinEmbarque, STD)} / total time: ${getDuration(FinEmbarque, IniEmbarque)} min
        TOB count in & out ${PasajeIn} / ${PasajeOut}
        1st pax scanned STD ${getDuration(PreEmbarque, STD)} / last pax scanned at STD ${getDuration(CierreEmbarque, STD)} / total time: ${getDuration(CierreEmbarque, PreEmbarque)} min
        LID delivered at STD ${getDuration(EntregaLID, STD)}
        A/C doors closed at STD ${getDuration(CierrePuertasAC, STD)}
        On-blox STD ${getDuration(OnBlocks, STD)} / Off-blox STD ${getDuration(OffBlocks, STD)} / total time: ${getDuration(OffBlocks, OnBlocks)} min `

        divContainer.appendChild(newParagraph);

    };

    if (delayCode === "86") {


        OnBlocks = data.OnBlocks
        PreEmbarque = data.PreEmbarque
        // horas especificas de este delay
        PreEmbarqueStop = data.PreEmbarqueStop
        PreEmbarqueStart = data.PreEmbarqueStart
        // 
        IniDesEmbarque = data.IniDesEmbarque
        FinDesEmbarque = data.FinDesEmbarque
        PasajeIn = data.PasajeIn
        IniEmbarque = data.IniEmbarque
        FinEmbarque = data.FinEmbarque
        PasajeOut = data.PasajeOut
        CierreEmbarque = data.CierreEmbarque
        EntregaLID = data.EntregaLID
        CierrePuertasAC = data.CierrePuertasAC
        OffBlocks = data.OffBlocks
        STA = data.STA
        STD = data.STD

        const divContainer = document.querySelector("#divResult")
        const newParagraph = document.createElement("p");
        newParagraph.innerText = `
        STA ${parseTimeAndFormat(STA)}, STD ${parseTimeAndFormat(STD)} ATA STD ${getDuration(OnBlocks, STD)}
        1st pax off STD ${getDuration(IniDesEmbarque, STD)} / Last pax off STD ${getDuration(FinDesEmbarque, STD)} / total time: ${getDuration(FinDesEmbarque, IniDesEmbarque)} min
        1st pax on STD ${getDuration(IniEmbarque, STD)} / Last pax on at STD ${getDuration(FinEmbarque, STD)} / total time: ${getDuration(FinEmbarque, IniEmbarque)} min
        TOB count in & out ${PasajeIn} / ${PasajeOut}
        1st pax scanned STD ${getDuration(PreEmbarque, STD)} / last pax scanned at STD ${getDuration(CierreEmbarque, STD)} / total time: ${getDuration(CierreEmbarque, PreEmbarque)} min
        LID delivered at STD ${getDuration(EntregaLID, STD)}
        A/C doors closed at STD ${getDuration(CierrePuertasAC, STD)}
        On-blox STD ${getDuration(OnBlocks, STD)} / Off-blox STD ${getDuration(OffBlocks, STD)} / total time: ${getDuration(OffBlocks, OnBlocks)} min 
        
        Reduced capacity of pre-boarding area due to COVID restrictions
        1st pax scanned STD ${getDuration(PreEmbarque, STD)} / preboarding stopped STD ${getDuration(PreEmbarqueStop, STD)} / total time ${getDuration(PreEmbarqueStop, PreEmbarque)}
        Boarding re-started STD ${getDuration(PreEmbarqueStart, STD)} / last pax scanned at STD ${getDuration(CierreEmbarque, STD)} / total time ${Math.abs(getDuration(PreEmbarqueStart, CierreEmbarque))}`
        divContainer.appendChild(newParagraph);

    };

    if (delayCode === "firstWave") {

        STD = data.STD
        PreEmbarque = data.PreEmbarque
        IniEmbarque = data.IniEmbarque
        FinEmbarque = data.FinEmbarque
        PasajeOut = data.PasajeOut
        CierreEmbarque = data.CierreEmbarque
        EntregaLID = data.EntregaLID
        CierrePuertasAC = data.CierrePuertasAC
        OffBlocks = data.OffBlocks
        crewArrival = data.CrewArrival

        const divContainer = document.querySelector("#divResult")
        const newParagraph = document.createElement("p");
        newParagraph.innerText = `
        Crew Arrival STD ${getDuration(crewArrival, STD)}
        1st pax scanned STD ${getDuration(PreEmbarque, STD)} / last pax scanned at STD ${getDuration(CierreEmbarque, STD)} / total time: ${getDuration(CierreEmbarque, PreEmbarque)} min
        1st pax on STD ${getDuration(IniEmbarque, STD)} / Last pax on at STD ${getDuration(FinEmbarque, STD)} / total time: ${getDuration(FinEmbarque, IniEmbarque)} min
        LID delivered at STD ${getDuration(EntregaLID, STD)}
        A/C doors closed at STD ${getDuration(CierrePuertasAC, STD)}
        Off-blox STD ${getDuration(OffBlocks, STD)} / total time: ${getDuration(OffBlocks, crewArrival)} min
        
        `
        divContainer.appendChild(newParagraph);
    };

    if (delayCode === "Single") {

        STA = data.STA
        STD = data.STD
        single = data.Single

        const divContainer = document.querySelector("#divResult")
        const newParagraph = document.createElement("p");
        newParagraph.innerText = `
        STA ${parseTimeAndFormat(STA)}, STD ${parseTimeAndFormat(STD)}
        Tiempo relevante: STD ${getDuration(single, STD)}
        
        `
        divContainer.appendChild(newParagraph);
    };

    if (delayCode === "19") {
        STA = data.STA;
        STD = data.STD;
        pmrIn = data.PmrIn;
        iniArrPMR = data.IniArrPMR;
        finArrPMR = data.FinArrPMR;
        pmrOut = data.PmrOut;
        iniDepPMR = data.IniDepPMR;
        finDepPMR = data.FinDepPMR;
        fwdStairsNonPmr = data.FWDstairNonPMR;
        aftStairsNonPmr = data.AFTstairNonPMR;
        OffBlocks = data.OffBlocks


        const divContainer = document.querySelector("#divResult")
        const newParagraph = document.createElement("p");
        newParagraph.innerText = `
        STA ${parseTimeAndFormat(STA)}, STD ${parseTimeAndFormat(STD)}
        Arrival PMR:
        ${pmrIn}
        Departure PMR:
        ${pmrOut}
        Arr PMR started at STD ${getDuration(iniArrPMR, STD)} / finished at STD ${getDuration(finArrPMR, STD)} / total time: ${getDuration(finArrPMR, iniArrPMR)}
        Dep PMR started at STD ${getDuration(iniDepPMR, STD)} / finished at STD ${getDuration(finDepPMR, STD)} / total time: ${getDuration(finDepPMR, iniDepPMR)}

        First Non PMR in FWD stairs at STD ${getDuration(fwdStairsNonPmr, STD)} / First Non PMR in AFT stairs at STD ${getDuration(aftStairsNonPmr, STD)} / total time: ${getDuration(aftStairsNonPmr, fwdStairsNonPmr)}
        Unable to use both stairs for boarding passengers during this time, slowing down the boarding process.
        `
        divContainer.appendChild(newParagraph)
    }

})


