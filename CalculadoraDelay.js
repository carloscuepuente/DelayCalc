let ConFinger;
let DesConFinger;
let ConGPU;
let DesConGPU;
let ConACU;
let DesConACU;
let IniFuel;
let FinFuel;
let OnBlocks;
let PreEmbarque
let IniDesEmbarque;
let FinDesEmbarque;
let IniArrPMR;
let FinArrPMR;
let IniEmbarque;
let FinEmbarque;
let IniDepPMR;
let FinDepPMR;
let CierreEmbarque;
let EntregaLID;
let CierrePuertasAC;
let OffBlocks;
let STA;
let STD;
let DelayType;
let ATA;

const delayCalcForm = document.querySelector("#delayCalcForm");
const allTimeInputs = document.querySelectorAll("input");
const forma = document.querySelector("form");
const formaElements = forma.elements;

const parseTimeAndFormat = function (timeToParse) {
    const parsedTime = moment(`1989-08-23 ${timeToParse}`, `YYYY-MM-DD HH:mm`)
    return parsedTime.format("HH:mm")
}

const parseTime = function (timeToParse) {
    //parse a string into a date format using moments
    const parsedTime = moment(`1989-08-23 ${timeToParse}`, `YYYY-MM-DD HH:mm`)
    return parsedTime
}

const getDuration = function (time1, time2) {
    let x = parseTime(time1);
    let y = parseTime(time2)
    const result = moment.duration(x.diff(y))
    // const result = parseTime(time1) - parseTime(time2)
    if (result >= 0) {
        return `+ ${result.as("minutes")}`
    }
    if (result < 0) {
        return result.as("minutes")
    }

}
document.querySelector("button").disabled = true
const delayTypeSelector = document.querySelector("#DelayType")

delayTypeSelector.addEventListener("change", function (event) {
    // alert(event.target.value)
    const delayCode = event.target.value

    if (delayCode === "Basico") {
        document.querySelector("button").disabled = false
        const noBasico = document.querySelectorAll(".noBasico")

        for (let i = 0; i < noBasico.length; i++) {
            noBasico[i].disabled = true
        }
    }

    if (delayCode === "inicial") {

        const allInputs = document.querySelectorAll("input")
        for (let i = 0; i < allInputs.length; i++) {
            allInputs[i].disabled = false;
        }
        document.querySelector("button").disabled = true
    }

})

delayCalcForm.addEventListener("submit", function (event) {
    event.preventDefault();

    STA = formaElements.STA.value
    STD = formaElements.STD.value
    OnBlocks = formaElements.OnBlocks.value
    PreEmbarque = formaElements.PreEmbarque.value
    IniDesEmbarque = formaElements.IniDesEmbarque.value
    FinDesEmbarque = formaElements.FinDesEmbarque.value
    IniEmbarque = formaElements.IniEmbarque.value
    FinEmbarque = formaElements.FinEmbarque.value
    CierreEmbarque = formaElements.CierreEmbarque.value
    EntregaLID = formaElements.EntregaLID.value
    CierrePuertasAC = formaElements.CierrePuertasAC.value
    OffBlocks = formaElements.OffBlocks.value

    const divContainer = document.querySelector("#divResult")
    const newParagraph = document.createElement("p");
    newParagraph.innerText = `STA ${parseTimeAndFormat(STA)}, STD ${parseTimeAndFormat(STD)} ATA STD ${getDuration(OnBlocks, STD)}
    1st pax off STD ${getDuration(IniDesEmbarque, STD)} / Last pax off STD ${getDuration(FinDesEmbarque, STD)} / total time: ${getDuration(FinDesEmbarque, IniDesEmbarque)} min
    1st pax on STD ${getDuration(IniEmbarque, STD)} / Last pax on at STD ${getDuration(FinEmbarque, STD)} / total time: ${getDuration(FinEmbarque, IniEmbarque)} min
    TOB count in & out {insertTOB} / {insertTOB}
    1st pax scanned STD ${getDuration(PreEmbarque, STD)} / last pax scanned at STD ${getDuration(CierreEmbarque, STD)} / total time: ${getDuration(CierreEmbarque, PreEmbarque)} min
    LID delivered at STD ${getDuration(EntregaLID, STD)}
    A/C doors closed at STD ${getDuration(CierrePuertasAC, STD)}
    On-blox STD ${getDuration(OnBlocks, STD)} / Off-blox STD ${getDuration(OffBlocks, STD)} / total time: ${getDuration(OffBlocks, OnBlocks)} min `

    divContainer.appendChild(newParagraph);

    // STA 11:00, STD 11:30 ATA STD+0
    // 1st pax off STD-28 / Last pax off STD-19 / total time: 9 min
    // 1st pax on STD-17 / Last pax on at STD+0 / total time: 17min
    // TOB count in & out 175+3 / 171+2
    // 1st pax scanned STD-28 / last pax scanned at STD-1 / total time: 27min
    // LID delivered at STD+2
    // A/C doors closed at STD+2
    // On-blox STD-30 / Off-blox STD+4 / total time: 34 min

    // console.log(STA)
    // console.log(STD)

    // console.log("----------")
    // console.log(Date())
    // // console.log(parseTime(STD))
    // console.log(parseTime(STD) - parseTime(STA))

})

// input.addEventListener("input", function (event) {

// STA 11:00, STD 11:30 ATA STD+0
// 1st pax off STD-28 / Last pax off STD-19 / total time: 9 min
// 1st pax on STD-17 / Last pax on at STD+0 / total time: 17min
// TOB count in & out 175+3 / 171+2
// 1st pax scanned STD-28 / last pax scanned at STD-1 / total time: 27min
// LID delivered at STD+2
// A/C doors closed at STD+2
// On-blox STD-30 / Off-blox STD+4 / total time: 34 min