class ControlDeEscala {
    constructor(containerId) {
        this.containerId = document.getElementById(containerId); // contenedor del template de la forma
        this.displayContainerTemplate(); //funcion que se llama para mostrar el template de la forma pre opcion seleccionada
        this.optionsContainer = this.containerId.querySelector("#options");
        this.displayContainer = this.containerId.querySelector("#display")
        this.displayOptionsTemplate();
        this.delayCode = null;
        this.getAndDisplayDelayOption()
    };

    //template de la forma, contiene todos los campos de la forma
    displayContainerTemplate() {
        this.containerId.innerHTML = `

            <div id="options" class="mb-4">
              
            </div>

            <div id="display" class="mb-4">
              
            </div>
            
        `;
    };

    displayOptionsTemplate() {
        this.optionsContainer.innerHTML = `
        <div class="form-group col-md-3 col-6">
            <label for="DelayType">Tipo de Delay</label>
            <select class="form-control" name="DelayType" id="DelayType">
                <option value="inicial">Selecciona un delay</option>
                <option value="Basico">Tiempos estándar</option>
                <option value="firstWave">First Wave tiempos estándar</option>
                <option value="86">86</option>
                <option value="Single">Único tiempo relevante</option>
            </select>
        </div>
        `
    };

    displayInicial() {
        this.displayContainer.innerHTML = ``
    }

    diplayTiemposEstandar() {
        this.displayContainer.innerHTML = ``
        this.displayContainer.innerHTML = `
        <div class="row">


            <div class="row">
                <div class="form-group col">
                    <label class="my-1" for="OnBlocks">On Blocks</label>
                    <input type="time" class="form-control" id="OnBlocks" name="OnBlocks">
                </div>
            </div>

            <div class="row">
                <div class="form-group col">
                    <label class="my-1" for="PreEmbarque">Incio Pre-Embarque</label>
                    <input type="time" class="form-control" id="PreEmbarque" name="PreEmbarque">
                </div>
            </div>


            <div class="row">
                <div class="form-group col-md-4">
                    <label class="my-1" for="IniDesEmbarque">First Pax Off</label>
                    <input type="time" class="form-control" id="IniDesEmbarque" name="IniDesEmbarque">
                </div>

                <div class="form-group col-md-4">
                    <label class="my-1" for="FinDesEmbarque">Last Pax Off</label>
                    <input type="time" class="form-control" id="FinDesEmbarque" name="FinDesEmbarque">
                </div>

                <div class="form-group col-md-4">
                    <label class="my-1" for="PasajeIn">Pasaje In <span class="badge bg-success">New</span></label>
                    <input type="text" class="form-control" id="PasajeIn" name="PasajeIn" pattern="\d{1,3}\+\d{1,2}"
                        placeholder="189+3" required>
                </div>

            </div>

            <div class="row">
                <div class="form-group col-md-4">
                    <label class="my-1" for="IniEmbarque">First Pax On</label>
                    <input type="time" class="form-control" id="IniEmbarque" name="IniEmbarque">
                </div>

                <div class="form-group col-md-4">
                    <label class="my-1" for="FinEmbarque">Last Pax On</label>
                    <input type="time" class="form-control" id="FinEmbarque" name="FinEmbarque">
                </div>

                <div class="form-group col-md-4">
                    <label class="my-1" for="PasajeOut">Pasaje Out <span class="badge bg-success">New</span></label>
                    <input type="text" class="form-control" id="PasajeOut" name="PasajeOut" pattern="\d{1,3}\+\d{1,2}"
                        placeholder="189+3" required>
                </div>
            </div>

            <div class="row">
                <div class="form-group col">
                    <label class="my-1" for="CierreEmbarque">Cierre Embarque</label>
                    <input type="time" class="form-control" id="CierreEmbarque" name="CierreEmbarque">
                </div>
            </div>

            <div class="row">
                <div class="form-group col">
                    <label class="my-1" for="EntregaLID">Entrega de LID</label>
                    <input type="time" class="form-control" id="EntregaLID" name="EntregaLID">
                </div>
            </div>

            <div class="row">
                <div class="form-group col">
                    <label class="my-1" for="CierrePuertasAC">Cierre Puertas A/C</label>
                    <input type="time" class="form-control" id="CierrePuertasAC" name="CierrePuertasAC">
                </div>
            </div>

            <div class="row">
                <div class="form-group col">
                    <label class="my-1" for="OffBlocks">Off Blocks</label>
                    <input type="time" class="form-control" id="OffBlocks" name="OffBlocks">
                </div>
            </div>

            <div class="row">
                <div class="form-group col-md-6">
                    <label class="my-1" for="STA">STA</label>
                    <input type="time" class="form-control" id="STA" name="STA">
                </div>

                <div class="form-group col-md-6">
                    <label class="my-1" for="STD">STD</label>
                    <input type="time" class="form-control" id="STD" name="STD">
                </div>
            </div>

            <div>

                <button type="submit" class="btn btn-success my-3">Calcular</button>

            </div>
        `
    };

    display86() {
        this.displayContainer.innerHTML = ``
        this.displayContainer.innerHTML = `
        <div class="row">
                <div class="form-group col">
                    <label class="my-1" for="OnBlocks">On Blocks</label>
                    <input type="time" class="form-control" id="OnBlocks" name="OnBlocks">
                </div>
        </div>

        <div class="row">
                <div class="form-group col">
                    <label class="my-1" for="PreEmbarque">Incio Pre-Embarque</label>
                    <input type="time" class="form-control" id="PreEmbarque" name="PreEmbarque">
                </div>
        </div>

        <div class="row">
                <div class="form-group col-md-6">
                    <label class="my-1 hide PreEmbarqueOptional" for="PreEmbarqueStop">Pre-Embarque Stop <span
                            class="badge bg-success">New</span></label>
                    <input type="time" class="form-control hide PreEmbarqueOptional" id="PreEmbarqueStop"
                        name="PreEmbarqueStop">
                </div>

                <div class="form-group col-md-6">
                    <label class="my-1 hide PreEmbarqueOptional" for="PreEmbarqueStart">Pre-Embarque Start <span
                            class="badge bg-success">New</span></label>
                    <input type="time" class="form-control hide PreEmbarqueOptional" id="PreEmbarqueStart"
                        name="PreEmbarqueStart">
                </div>
        </div>

        <div class="row">

                <div class="form-group col-md-4">
                    <label class="my-1" for="IniDesEmbarque">First Pax Off</label>
                    <input type="time" class="form-control" id="IniDesEmbarque" name="IniDesEmbarque">
                </div>

                <div class="form-group col-md-4">
                    <label class="my-1" for="FinDesEmbarque">Last Pax Off</label>
                    <input type="time" class="form-control" id="FinDesEmbarque" name="FinDesEmbarque">
                </div>

                <div class="form-group col-md-4">
                    <label class="my-1" for="PasajeIn">Pasaje In <span class="badge bg-success">New</span></label>
                    <input type="text" class="form-control" id="PasajeIn" name="PasajeIn" pattern="\d{1,3}\+\d{1,2}"
                        placeholder="189+3" required>
                </div>


        </div>

        <div class="row">

            <div class="form-group col-md-4">
                <label class="my-1" for="IniEmbarque">First Pax On</label>
                <input type="time" class="form-control" id="IniEmbarque" name="IniEmbarque">
            </div>

            <div class="form-group col-md-4">
                <label class="my-1" for="FinEmbarque">Last Pax On</label>
                <input type="time" class="form-control" id="FinEmbarque" name="FinEmbarque">
            </div>

            <div class="form-group col-md-4">
                <label class="my-1" for="PasajeOut">Pasaje Out <span class="badge bg-success">New</span></label>
                <input type="text" class="form-control" id="PasajeOut" name="PasajeOut" pattern="\d{1,3}\+\d{1,2}"
                    placeholder="189+3" required>
            </div>

        </div>

        <div class="row">
            <div class="form-group col">
                <label class="my-1" for="CierreEmbarque">Cierre Embarque</label>
                <input type="time" class="form-control" id="CierreEmbarque" name="CierreEmbarque">
            </div>
        </div>

        <div class="row">
            <div class="form-group col">
                <label class="my-1" for="EntregaLID">Entrega de LID</label>
                <input type="time" class="form-control" id="EntregaLID" name="EntregaLID">
            </div>
        </div>

        <div class="row">
            <div class="form-group col">
                <label class="my-1" for="CierrePuertasAC">Cierre Puertas A/C</label>
                <input type="time" class="form-control" id="CierrePuertasAC" name="CierrePuertasAC">
            </div>
        </div>

        <div class="row">
            <div class="form-group col">
                <label class="my-1" for="OffBlocks">Off Blocks</label>
                <input type="time" class="form-control" id="OffBlocks" name="OffBlocks">
            </div>
        </div>

        <div class="row">
            <div class="form-group col-md-6">
                <label class="my-1" for="STA">STA</label>
                <input type="time" class="form-control" id="STA" name="STA">
            </div>

            <div class="form-group col-md-6">
                <label class="my-1" for="STD">STD</label>
                <input type="time" class="form-control" id="STD" name="STD">
            </div>
        </div>

        <div>

            <button type="submit" class="btn btn-success my-3">Calcular</button>

        </div>


        `
    };

    displayFirstWave() {
        this.displayContainer.innerHTML = ``
        this.displayContainer.innerHTML = `

        <div class="row">
            <div class="form-group col">
                <label class="my-1" for="CrewArrival">Crew Arrival</label>
                <input type="time" class="form-control" id="CrewArrival" name="CrewArrival">
            </div>
        </div>

        <div class="row">
            <div class="form-group col">
                <label class="my-1" for="PreEmbarque">Incio Pre-Embarque</label>
                <input type="time" class="form-control" id="PreEmbarque" name="PreEmbarque">
            </div>
        </div>

        <div class="row">
                <div class="form-group col-md-4">
                    <label class="my-1" for="IniEmbarque">First Pax On</label>
                    <input type="time" class="form-control" id="IniEmbarque" name="IniEmbarque">
                </div>

                <div class="form-group col-md-4">
                    <label class="my-1" for="FinEmbarque">Last Pax On</label>
                    <input type="time" class="form-control" id="FinEmbarque" name="FinEmbarque">
                </div>

                <div class="form-group col-md-4">
                    <label class="my-1" for="PasajeOut">Pasaje Out <span class="badge bg-success">New</span></label>
                    <input type="text" class="form-control" id="PasajeOut" name="PasajeOut" pattern="\d{1,3}\+\d{1,2}"
                        placeholder="189+3" required>
                </div>
        </div>


        <div class="row">
                <div class="form-group col">
                    <label class="my-1" for="CierreEmbarque">Cierre Embarque</label>
                    <input type="time" class="form-control" id="CierreEmbarque" name="CierreEmbarque">
                </div>
        </div>

        <div class="row">
                <div class="form-group col">
                    <label class="my-1" for="EntregaLID">Entrega de LID</label>
                    <input type="time" class="form-control" id="EntregaLID" name="EntregaLID">
                </div>
        </div>

        <div class="row">
                <div class="form-group col">
                    <label class="my-1" for="CierrePuertasAC">Cierre Puertas A/C</label>
                    <input type="time" class="form-control" id="CierrePuertasAC" name="CierrePuertasAC">
                </div>
        </div>

        <div class="row">
                <div class="form-group col">
                    <label class="my-1" for="OffBlocks">Off Blocks</label>
                    <input type="time" class="form-control" id="OffBlocks" name="OffBlocks">
                </div>
        </div>

        <div class="row">
            <div class="form-group col-md-6">
                <label class="my-1" for="STD">STD</label>
                <input type="time" class="form-control" id="STD" name="STD">
            </div>
        </div>

            <div>

                <button type="submit" class="btn btn-success my-3">Calcular</button>

            </div>

        `
    };

    displaySingleTimeCalc() {
        this.displayContainer.innerHTML = ``;
        this.displayContainer.innerHTML = `

        <div class="row">
            <div class="form-group col-md-6">
                <label class="my-1" for="Single">Tiempo relevante</label>
                <input type="time" class="form-control" id="Single" name="Single">
            </div>
        </div>
        
        <div class="row">
        <div class="form-group col-md-6">
            <label class="my-1" for="STA">STA</label>
            <input type="time" class="form-control" id="STA" name="STA">
        </div>

        <div class="form-group col-md-6">
            <label class="my-1" for="STD">STD</label>
            <input type="time" class="form-control" id="STD" name="STD">
        </div>
    </div>


            <div>

                <button type="submit" class="btn btn-success my-3">Calcular</button>

            </div>
        
        `;

    };

    getAndDisplayDelayOption() {
        let delayTypeOption = this.containerId.querySelector("#DelayType");
        delayTypeOption.addEventListener("change", (event) => {
            let option = event.target.value
            if (option === "inicial") {
                this.displayInicial();
            };
            if (option === "Basico") {
                this.diplayTiemposEstandar();
            };
            if (option === "86") {
                this.display86();
            };
            if (option === "firstWave") {
                this.displayFirstWave();
            };
            if (option === "Single") {
                this.displaySingleTimeCalc();
            };
        })
    };

}