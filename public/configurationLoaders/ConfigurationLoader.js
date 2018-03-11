class ConfigurationLoader {
    static loadConfiguration(_fileName) {
    	loadXML(_fileName, this.loadMain, (response) => { console.log("ERROR loading xml!", response); });
    }

    static loadMain(rootXml) {
        Config.setType(rootXml.getChild("type").getContent());
        console.log("Loaded type: ", Config.getType());

        Config.setRadius(rootXml.getChild("radius").getContent());
        console.log("Loaded radius: ", Config.getRadius());

        Config.setNeighborhood(rootXml.getChild("neighborhood").getContent());
        console.log("Loaded neighborhood: ", Config.getNeighborhood());

        Config.setCellSize(rootXml.getChild("cellSize").getContent());
        console.log("Loaded cell size:", Config.getCellSize());

        try {
            Config.setFrameRate(rootXml.getChild("frameRate").getContent());
            console.log("Loaded frame rate", Config.getFrameRate());
        } catch (err) {
            console.log(err);
            console.log("Failed to get frame rate, using default");
            Config.setFrameRate(60);
        }

        DisplayConfigurationLoader.loadDisplay(rootXml);

        switch(Config.getType())
        {
        	case "life":
        		LifeLoader.loadLife(rootXml);
        	break;
        	default:
        		console.log("No type: ", Config.getType());
        }

        InitialStateLoader.loadInitialState(rootXml);
    }
}