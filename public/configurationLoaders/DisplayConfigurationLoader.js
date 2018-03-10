class DisplayConfigurationLoader {
    static loadDisplay(rootXml) {
        let displayXml;
        try {
            displayXml = rootXml.getChild("display");
        } catch (err) {
            console.log(err);
            console.log("Failed to get display configuration");

            // TODDO: maybe in case of no display setting should add default
            return;
        }

        DisplayConfig.setStrokeWeight(displayXml.getChild("strokeWeight").getContent());
        console.log("Loaded display config stroke weight:", DisplayConfig.getStrokeWeight());

        let strokeColor = displayXml.getChild("strokeColor");
        DisplayConfig.setStrokeColor(strokeColor.getNumber("r"), strokeColor.getNumber("g"), strokeColor.getNumber("b"));
        console.log("Loaded display config stroke color:", DisplayConfig.getStrokeColor());
    }
}