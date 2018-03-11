class LifeLoader {
    static loadLife(rootXml) {
        let ruleXml = rootXml.getChild("rule");
        switch (Config.getNeighborhood()) {
            case "neuman":
                NeumanLifeLoader.loadNeumanLife(ruleXml);
                break;
            case "moore":
                MooreLifeLoader.loadMooreLife(ruleXml);
                break;
            default:
                throw "Unknown neighborhood " + Config.getNeighborhood();
                break;
        }
    }
}